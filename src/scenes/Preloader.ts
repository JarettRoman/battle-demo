import {Scene} from 'phaser';

import {BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS} from '../asset-keys';

import {SCENE_KEYS} from './scene-keys';

export class Preloader extends Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOADER,
    });
  }

  init() {
        // //  We loaded this image in our Boot Scene, so we can display it here
        // this.add.image(512, 384, 'background');

        // //  A simple progress bar. This is the outline of the bar.
        // this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        // //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        // const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        // //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        // this.load.on('progress', (progress: number) => {

        //     //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
        //     bar.width = 4 + (460 * progress);

        // });
    console.log(this.init.name);
  }

  preload() {
        // //  Load the assets for the game - Replace with your own assets

    // this.load.image('logo', 'logo.png');

    const monsterTamerAssetPath = '/images/monster-tamer';
    const kenneysAssetPath = '/images/kenneys-assets';

    this.load.setPath('assets');
    // battle backgrounds
    this.load.image(BATTLE_BACKGROUND_ASSET_KEYS.FOREST, `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`);
    // battle assets
    this.load.image(BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND, `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`);

    // health bar assets
    this.load.image(HEALTH_BAR_ASSET_KEYS.LEFT_CAP, `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`);
    this.load.image(HEALTH_BAR_ASSET_KEYS.RIGHT_CAP, `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`);
    this.load.image(HEALTH_BAR_ASSET_KEYS.MIDDLE, `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`);

    // monsters

    this.load.image(MONSTER_ASSET_KEYS.CARNODUSK, `${monsterTamerAssetPath}/monsters/carnodusk.png`);
    this.load.image(MONSTER_ASSET_KEYS.IGUANIGNITE, `${monsterTamerAssetPath}/monsters/iguanignite.png`);
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    // console.log(this.textures.get('game_background'));
    // this.scene.start('MainMenu');
    console.log(this.textures.get(BATTLE_BACKGROUND_ASSET_KEYS.FOREST));
    this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);
    console.log("create");
  }

  update() {
    console.log("update");
  }
}
