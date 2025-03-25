import { Character } from "./Character.js"
import { Mage } from "./Mage.js"
import { Thief } from "./Thief.js"
import { Warrior } from "./Warrior.js"

const laios = new Thief('Laios', 90, 48, 53)
const marcille = new Mage('Marcille', 80, 16, 19, 52)
const chilchuck = new Thief('Chilchuck', 80, 10, 17)
const senshi = new Warrior('Senshi', 100, 48, 45, 11)

console.table({ laios, marcille, chilchuck, senshi })

senshi.switchStance()
laios.attack(chilchuck)
marcille.attack(chilchuck)

console.table({ laios, marcille, chilchuck, senshi })

senshi.switchStance()
laios.attack(senshi)
marcille.heal(chilchuck)

console.table({ laios, marcille, chilchuck, senshi })