import { Character } from "./Character.js"

export class Mage extends Character {
  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts);
    this.magicPts = magicPts;
    this.defensePts = defensePts + magicPts
  }

  damageAttack(targetCharacter) {
    return (this.attackPts + this.magicPts) - targetCharacter.defensePts;
  }

  heal(targetCharacter) {
    if (targetCharacter.lifePts <= 0) {
      targetCharacter.status = "Alive";
      console.log(`${this.name} resurrected ${targetCharacter.name}!`);
    } else {
      console.log(`${this.name} healed ${targetCharacter.name} with ${this.magicPts} magic points!`);
    }
    
    const magicSpent = this.magicPts / 2
    targetCharacter.lifePts += magicSpent
    this.magicPts -= magicSpent
    this.defensePts -= magicSpent

    if (targetCharacter.lifePts > targetCharacter.maxLifePts) {
      targetCharacter.lifePts = targetCharacter.maxLifePts;
    }
    
  }
}