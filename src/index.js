import { Chip8 } from './Chip8';

const chip8 = new Chip8();
async function runChip8() {
  while (true) {
    const hasKeydown = chip8.keyboard.hasKeydown();
    const isKeydown = chip8.keyboard.isKeyDown(1);
    console.log({ hasKeydown, isKeydown });
    await chip8.sleep();
  }
}

// runChip8();