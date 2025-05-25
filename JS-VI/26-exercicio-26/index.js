document.addEventListener('DOMContentLoaded', () => {

  fetchTransfers();
  fetchUserInfo();
});

let editButtons = []

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  newTransfer();
})

function renderUserInfo(userData) {
  const name = document.createElement('p');
  name.innerHTML = `<strong>Nome:</strong> ${userData.name}`;

  const balance = document.createElement('p');
  balance.innerHTML = `<strong>Saldo:</strong> R$ ${userData.balance}`;

  document.querySelector('#user-info').append(name, balance);
}

async function fetchUserInfo() {
  const userInfo = await fetch("http://localhost:3000/users").then(res => res.json());
  renderUserInfo(userInfo[0]);
}

function renderTransfer(transferData) {
  const transfer = document.createElement('div');
  transfer.classList.add('transfer');
  transfer.id = `transfer-${transferData.id}`;

  const amount = document.createElement('p');
  amount.classList.add('amount');
  amount.innerHTML = `<strong>Valor:</strong> R$ ${transferData.amount}`;
 
  const sender = document.createElement('p');
  sender.classList.add('sender');
  sender.innerHTML = `<strong>De:</strong> ${transferData.sender}`;

  const receiver = document.createElement('p');
  receiver.classList.add('receiver');
  receiver.innerHTML = `<strong>Para:</strong> ${transferData.receiver}`;

  const date = document.createElement('p');
  date.classList.add('date');
  date.innerHTML = `<strong>Data:</strong> ${new Date(transferData.date).toLocaleDateString('pt-BR')}`;

  const editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.id = `edit-${transferData.id}`;
  editButtons.push(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.id = `delete-${transferData.id}`;

  transfer.append(amount, sender, receiver, date, editButton, deleteButton);
  document.querySelector('#transfers').appendChild(transfer);
}

async function fetchTransfers() {
  const transfers = await fetch("http://localhost:3000/transfers").then(res => res.json());
  transfers.forEach(renderTransfer);
}

async function newTransfer() {
  const transferData = {
    amount: Number(document.querySelector('#amount').value),
    sender: document.querySelector('#sender').value,
    receiver: document.querySelector('#receiver').value,
    date: document.querySelector('#date').value
  };

  const response = await fetch("http://localhost:3000/transfers", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transferData)
  })

  const savedTransfer = await response.json();
  form.reset();
  renderTransfer(savedTransfer);
  updateBalance(transferData);
}

async function updateBalance(transferData) {
  const userInfo = await fetch("http://localhost:3000/users").then(res => res.json());

  if (transferData.sender === userInfo[0].name) {
    fetch(`http://localhost:3000/users/${userInfo[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        balance: (userInfo[0].balance - transferData.amount)
      })
    }).then(res => res.json())
  } else if (transferData.receiver === 'Jane Doe') {
    fetch(`http://localhost:3000/users/${userInfo[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        balance: (userInfo[0].balance + transferData.amount)
      })
    }).then(res => res.json())
  }
}


function editTransfer() {
  // não consegui fazer a edição
}

function deleteTransfer() {
  // não consegui fazer a exclusão
}