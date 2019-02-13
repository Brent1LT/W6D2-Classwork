class View{
  constructor(game, $el){
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.bindEvents();
  }

  bindEvents() {

  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $pile = $('<ul></ul>');
      if (i === 0) {
        for (let i = 0; i < 3; i++) {
          let $disk = $('<li></li>');
          $disk.addClass('disk');
          $disk.attr('id', 3 - i);
          $pile.append($disk);
        }
      }
      $pile.addClass('pile');
      this.el.append($pile);
    }
  }
}
module.exports = View;