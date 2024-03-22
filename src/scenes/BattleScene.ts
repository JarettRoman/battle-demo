import {Scene} from 'phaser';

import {
  BATTLE_ASSET_KEYS,
  BATTLE_BACKGROUND_ASSET_KEYS,
  HEALTH_BAR_ASSET_KEYS,
  MONSTER_ASSET_KEYS,
} from '../asset-keys';

import {SCENE_KEYS} from './scene-keys';

const enum BATTLE_MENU_OPTIONS {
  FIGHT = 'FIGHT',
  SWITCH = 'SWITCH',
  ITEM = 'ITEM',
  FLEE = 'FLEE',
}

const battleUITextStyle = {
  color: 'black',
  fontSize: '30px',
};

export class BattleScene extends Scene {
  constructor() {
    super({
      key: SCENE_KEYS.BATTLE_SCENE,
    });
  }

  create() {
    // add background image
    this.add.image(
      this.scale.width / 2,
      this.scale.height / 2,
      BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
    );

    // render out player and enemy monsters
    this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
    this.add
      .image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0)
      .setFlip(true, false);

    const playerMonsterName = this.add.text(
      30,
      20,
      MONSTER_ASSET_KEYS.IGUANIGNITE,
      {
        color: '#7e3d3f',
        fontSize: '32px',
      },
    );
    // render player health bar
    this.add.container(556, 318, [
      this.add
        .image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
        .setOrigin(0),
      playerMonsterName,
      this.createHealthBar(34, 34),
      this.add.text(playerMonsterName.width + 35, 23, 'Lv 5', {
        color: '#ed474b',
        fontSize: '28px',
      }),
      this.add.text(30, 55, 'HP', {
        color: '#ff6505',
        fontSize: '24px',
        fontStyle: 'italic',
      }),
      this.add
        .text(443, 80, '25/25', {
          color: '#7e3d3f',
          fontSize: '16px',
        })
        .setOrigin(1, 0),
    ]);

    const enemyMonsterName = this.add.text(
      30,
      20,
      MONSTER_ASSET_KEYS.CARNODUSK,
      {
        color: '#7e3d3f',
        fontSize: '32px',
      },
    );
    // render enemy health bar
    this.add.container(0, 0, [
      this.add
        .image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
        .setOrigin(0)
        .setScale(1, 0.8),
      enemyMonsterName,
      this.createHealthBar(34, 34),
      this.add.text(enemyMonsterName.width + 35, 23, 'Lv 5', {
        color: '#ed474b',
        fontSize: '28px',
      }),
      this.add.text(30, 55, 'HP', {
        color: '#ff6505',
        fontSize: '24px',
        fontStyle: 'italic',
      }),
    ]);
    // render main info container
    this.createMainInfoPane();
    this.add.container(520, 448, [
      this.createMainInfoSubPane(),
      this.add.text(55, 22, BATTLE_MENU_OPTIONS.FIGHT, battleUITextStyle),
      this.add.text(240, 22, BATTLE_MENU_OPTIONS.SWITCH, battleUITextStyle),
      this.add.text(55, 70, BATTLE_MENU_OPTIONS.ITEM, battleUITextStyle),
      this.add.text(240, 70, BATTLE_MENU_OPTIONS.FLEE, battleUITextStyle),
    ]);

    this.add.container(0, 448, [
      this.add.text(55, 22, 'slash', battleUITextStyle),
      this.add.text(240, 22, 'slash', battleUITextStyle),
      this.add.text(55, 70, 'slash', battleUITextStyle),
      this.add.text(240, 70, 'slash', battleUITextStyle),
    ]);
  }

  createHealthBar(x: number, y: number) {
    const scaleY = 0.7;
    const leftCap = this.add
      .image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP)
      .setOrigin(0, 0.5)
      .setScale(1, scaleY);
    const middle = this.add
      .image(leftCap.x + leftCap.width, y, HEALTH_BAR_ASSET_KEYS.MIDDLE)
      .setOrigin(0, 0.5)
      .setScale(1, scaleY);
    middle.displayWidth = 360;
    const rightCap = this.add
      .image(middle.x + middle.displayWidth, y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP)
      .setOrigin(0, 0.5)
      .setScale(1, scaleY);
    return this.add.container(x, y, [leftCap, middle, rightCap]);
  }

  createMainInfoPane() {
    const padding = 4;
    const rectHeight = 124;
    this.add
      .rectangle(
        padding,
        this.scale.height - rectHeight - padding,
        (this.scale.width - padding) * 2,
        rectHeight,
        0xede4f3,
        1,
      )
      .setOrigin(0)
      .setStrokeStyle(8, 0xe4434a, 1);
  }

  createMainInfoSubPane() {
    const rectWidth = 500;
    const rectHeight = 124;
    return this.add
      .rectangle(0, 0, rectWidth, rectHeight, 0xede4f3, 1)
      .setOrigin(0)
      .setStrokeStyle(8, 0x905ac2, 1);
  }
}
