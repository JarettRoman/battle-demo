import {Game, Types, AUTO, Scale} from "phaser";

import {Game as MainGame} from './scenes/Game';
import {GameOver} from './scenes/GameOver';
import {MainMenu} from './scenes/MainMenu';
import {Preloader} from './scenes/Preloader';


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
  parent: 'game-container',
  backgroundColor: '#028af8',
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [
    Preloader,
    MainMenu,
    MainGame,
    GameOver,
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new Game(config);
