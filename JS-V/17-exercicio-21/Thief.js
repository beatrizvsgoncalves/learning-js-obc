import { Character } from "./Character.js";

export class Thief extends Character {
  damageAttack(targetCharacter) {
    return (this.attackPts - targetCharacter.defensePts) * 2 ;
  }
}