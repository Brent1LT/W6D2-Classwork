class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents()
  }

  bindEvents() {
    const $cells = $('.cell');
    $cells.on('click', e => {this.makeMove($(e.target))});
    
  }

  makeMove($square) {
    // debugger;
    try {
      this.game.playMove($square.data('pos'));
      $square.text(this.game.currentPlayer);
    }
    catch(err) {
      alert('Invalid Move!!')
    }
    $square.addClass('clicked')
    if (this.game.isOver()) {
      alert(`${this.game.currentPlayer} has won!!!`)
    };
  }

  setupBoard() {
    const $grid = $('<ul></ul>');
    for (let row = 0; row < 3; row ++) {
      for (let col = 0; col < 3; col ++) {
        let $cell = $('<li></li>');
        $grid.append($cell);
        $cell.data('pos', [row, col]);
        $cell.addClass('cell');
      }
    }
    
    this.el.append($grid);
  }
}

module.exports = View;
