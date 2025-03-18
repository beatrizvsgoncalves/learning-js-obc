class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }
  
  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property { }

const land = new Property(100, 100000);
const someHouse = new House(120, 200000);

console.log(someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof House)
console.log(someHouse instanceof Property)
console.log(land)
console.log(someHouse)

class Apartment extends House {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2)
  }
}

const apt = new Apartment("201", 80, 150000);

console.log(apt)
console.log(apt.getFloor())