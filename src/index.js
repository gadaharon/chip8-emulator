import { Chip8 } from './Chip8';

const chip8 = new Chip8();
async function runChip8() {
  chip8.display.drawSprite(0, 0, 0, 5)
  chip8.display.drawSprite(0, 5, 5, 5)
  chip8.display.drawSprite(0, 10, 10, 5)
  chip8.display.drawSprite(0, 15, 15, 5)
  chip8.display.drawSprite(0, 20, 20, 5)
}

runChip8();