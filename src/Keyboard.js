import { keyMap, NUMBER_OF_KEYS } from './constants/keyboardConstants';

export class Keyboard {
  constructor() {
    this.keys = new Array(NUMBER_OF_KEYS);
    document.addEventListener('keydown', (event) => this.keydown(event.key));
    document.addEventListener('keyup', (event) => this.keyup(event.key));
  }
  // helpers
  isKeyDown(keyIndex) {
    return this.keys[keyIndex];
  }
  hasKeydown() {
    return this.keys.findIndex((key) => key) !== -1;
  }
  getKeyIndex(key) {
    return keyMap.findIndex((mapKey) => mapKey === key.toLowerCase());
  }
  setKeyMap(key, value) {
    const keyIndex = this.getKeyIndex(key);
    if (keyIndex > -1) {
      this.keys[keyIndex] = value;
    }
  }

  // listeners callbacks
  keydown(key) {
    this.setKeyMap(key, true);
  }
  keyup(key) {
    this.setKeyMap(key, false);
  }
}
