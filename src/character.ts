export default class Character {
  name: string;
  health: number;
  speed: number;
  constructor(name: string, health: number, speed: number) {
    this.name = name;
    this.health = health;
    this.speed = speed;
  }
}
