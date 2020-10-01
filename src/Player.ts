import { Deck, Card } from "./Interfaces";

function Player(id: string) {
  this.playerId = id;
  this.hand = [];

  this.setInitialHandCards = function (cards: Card[]) {
    this.hand = cards;
  };

  this.buyCard = function (deck: Deck) {
    this.hand.push(deck.getCard());
  };

  this.playCard = function (card: Card) {
    this.hand = this.hand.filter((handCard) => handCard.id !== card.id);
    return card;
  };
}

export default Player;
