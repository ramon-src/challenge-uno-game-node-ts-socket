import { Card } from "../Interfaces";

let deckCards = [];

export const __setDeck = (cards) => (deckCards = cards);

function Deck() {
  this.cards = deckCards;

  this.shuffle = function () {
    return this;
  };

  this.getCard = function (): Card {
    const firstCard = this.cards.shift();
    return firstCard;
  };
}

export default Deck;
