class Vehicle {
  move() {
    console.log("Vehicle is moving.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("Car is driving.");
  }
}

class Bike extends Vehicle {
  move() {
    console.log("Bike is riding.");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("Ship is sailing.");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`Aircraft is flying at ${speed} km/h.`);
  }
}

const delorean = new Car()
const colli = new Bike()
const blackPearl = new Ship()
const boeing747 = new Aircraft()

// delorean.move()
// colli.move()
// blackPearl.move()
// boeing747.move(500)

function start(vehicle) {
  console.log("Starting a vehicle...");
  vehicle.move()
}

start(delorean)
start(colli)
start(blackPearl)
start(boeing747)