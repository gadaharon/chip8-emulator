import { Display } from "./Display";
import { Keyboard } from "./Keyboard";
import { Memory } from "./Memory";
import { Registers } from "./Registers";

export class Chip8 {
  constructor() {
    console.log('Create new Chip-8');
    this.display = new Display();
    this.memory = new Memory();
    this.registers = new Registers();
    this.keyboard = new Keyboard();
  }
  sleep(ms = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
