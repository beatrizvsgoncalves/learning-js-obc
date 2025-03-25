export class Character {
  #maxLifePts = 100
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
    this.status = "Alive";
  }
  
  attack(targetCharacter) {
    const damage = this.damageAttack(targetCharacter);
    targetCharacter.lifePts -= damage <= 0 ? 0 : damage;

    if (damage <= 0) {
      console.log(`${this.name}'s attack did not cause any damage to ${targetCharacter.name}.`);
    } else {
      console.log(`${this.name} attacked ${targetCharacter.name} with ${damage} damage points!`);
    }

    if (targetCharacter.lifePts <= 0) {
      console.log(`${targetCharacter.name} died!`);
      targetCharacter.status = "Dead";
      targetCharacter.lifePts = 0;
    }
  }

  damageAttack(targetCharacter) {
    return this.attackPts - targetCharacter.defensePts;
  }
}