import _ from "underscore";

function MakeDeck() {
  return {
    cards: null,
    shuffle: () => {
      this.cards = _.shuffle(this.cards);
    }
  };
}

export default MakeDeck;
