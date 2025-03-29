const Deposit = require("./entities/Deposit");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");
const Loan = require("./entities/Loan");

module.exports = class App {
	static #users = [];

	static findUser(email) {
		const user = this.#users.find((user) => user.email === email);
		return user ?? null;
	}

	static createUser(email, fullname) {
		const userExists = App.findUser(email);
		if (!userExists) {
			this.#users.push(new User(email, fullname));
		} else {
			throw new Error("Email already in use");
		}
	}

	static deposit(email, value) {
		const user = App.findUser(email);
		if (user) {
			const newDeposit = new Deposit(value);
			user.account.addDeposit(newDeposit);
		} else {
			throw new Error("User not found");
		}
	}

	static transfer(fromUserEmail, toUserEmail, value) {
		const fromUser = App.findUser(fromUserEmail);
		const toUser = App.findUser(toUserEmail);
		if (fromUser && toUser) {
			const newTransfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
		} else {
			throw new Error("User not found");
		}
	}

	static takeLoan(email, value, numberOfInstallments) {
		const user = App.findUser(email);
		if (user) {
			const newLoan = new Loan(value, numberOfInstallments);
      user.account.addLoan(newLoan);
		} else {
			throw new Error("User not found");
		}
	}

	static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage
  }

  static findFirstPendingInstallment(email, loanValue) {
    const user = App.findUser(email);
    const loan = user.account.loans.find(loan => loan.value === loanValue)
    const installment = loan.installments.find(installment => installment.status === "pending")
    return installment ?? null;
  }

  static payLoan(email, loanValue) {
    const user = App.findUser(email);
    const installment = App.findFirstPendingInstallment(email, loanValue)
    if (installment) {
      installment.status = 'paid';
      user.account.payLoanInstallment(installment)
    } else {
      throw new Error("Error");
    }
  }
};
