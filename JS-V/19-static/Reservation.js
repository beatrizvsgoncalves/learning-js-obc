class Reservation {
  constructor(guests, room, days, reserveType) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.reserveType = reserveType;
    this.total = guests * days * (reserveType === 'Standard' ? Reservation.baseFee : Reservation.premiumFee);
  }

  static baseFee = 100;
  
  static showBaseFee() {
    console.log(`Base fee per day: ${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }

  static showPremiumFee() {
    console.log(`Premium fee per day: ${Reservation.premiumFee}`);
  }
}

Reservation.showBaseFee()
Reservation.showPremiumFee()

const reservation1 = new Reservation(2, "112", 5, 'Standard');
const reservation2 = new Reservation(3, "200", 3, 'Premium');
const reservation3 = new Reservation(4, "47", 2, 'Standard');

console.table({reservation1, reservation2, reservation3});
