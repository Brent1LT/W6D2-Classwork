const View = require('./ttt-view.js');
const Game = require('./game.js');

  $(() => {
    let newGame = new Game();
    let container = $('figure.ttt');
    let ourView = new View(newGame, container);
  });
  