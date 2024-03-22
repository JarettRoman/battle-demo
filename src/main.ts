import {Game, Types, CANVAS, Scale} from 'phaser';

import {Game as MainGame} from './scenes/Game';
import {GameOver} from './scenes/GameOver';
import {MainMenu} from './scenes/MainMenu';
import {Preloader} from './scenes/Preloader';
import {BattleScene} from './scenes/BattleScene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
  type: CANVAS,
  pixelArt: false,
  scale: {
    parent: 'game-container',
    width: 1024,
    height: 576,
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [Preloader, BattleScene, MainMenu, MainGame, GameOver],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new Game(config);
