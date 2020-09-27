import {
  MAX_CHANGE_4_CARDS,
  MAX_NUMBER_NORMAL_CARDS,
  COLORS,
  REVERT,
  BLOCKED,
  MAX_CHANGE_COLOR_CARDS,
  CHANGE_COLOR,
  ADD_2_CARD,
  ADD_4_CARD
} from "./constants";

function MakeCards() {
  this.cards = [];

  this.build = function () {
    for (let number = 0; number < MAX_NUMBER_NORMAL_CARDS + 1; number++) {
      Object.values(COLORS).forEach((color) => {
        this.cards.push({ number, color });
        this.cards.push({ number, color });
      });
    }

    Object.values(COLORS).forEach((color) => {
      this.cards.push({ color, ...ADD_2_CARD });
      this.cards.push({ color, ...ADD_2_CARD });

      this.cards.push({ color, ...REVERT });
      this.cards.push({ color, ...REVERT });

      this.cards.push({ color, ...BLOCKED });
      this.cards.push({ color, ...BLOCKED });
    });

    for (let number1 = 0; number1 < MAX_CHANGE_COLOR_CARDS; number1++) {
      this.cards.push({ ...CHANGE_COLOR });
    }

    for (let number2 = 0; number2 < MAX_CHANGE_4_CARDS; number2++) {
      this.cards.push({ ...ADD_4_CARD });
    }
    return this.cards;
  };
}

export default MakeCards;
