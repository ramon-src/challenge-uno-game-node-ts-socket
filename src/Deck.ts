import _ from "underscore";

import { Deck as IDeck, Card } from "./Interfaces";

function Deck(cards: Card[]): void {
  this.cards = cards;

  this.getLength = function () {
    return this.cards.length;
  };

  this.shuffle = function (): IDeck {
    this.cards = _.shuffle(this.cards);
    return this;
  };

  this.getCard = function (): Card {
    const firstCard = this.cards.shift();
    return firstCard;
  };
}

export default Deck;
