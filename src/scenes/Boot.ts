import {Scene} from 'phaser';

import {SCENE_KEYS} from './scene-keys';

export class Boot extends Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

    this.load.image('background', 'assets/bg.png');
  }

  create() {
    this.scene.start(SCENE_KEYS.PRELOADER);
  }
}
