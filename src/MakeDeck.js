import _ from "underscore";

function MakeDeck(cards) {
  this.cards = cards;

  this.shuffle = function () {
    this.cards = _.shuffle(this.cards);
    return this;
  };

  this.getCard = function () {
    const firstCard = this.cards.shift();
    return firstCard;
  };
}

export default MakeDeck;
