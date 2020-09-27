function Player(cards) {
  this.hand = cards;

  this.playCard = function (card) {
    this.hand = this.hand.filter((handCard) => handCard.id !== card.id);
    return card;
  };
}

export default Player;
