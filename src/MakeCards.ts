import { Card } from "./Interfaces";
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
  this.cards = [] as Card[];

  this.build = function (): Card[] {
    enum Type {
      NUMBER = "NUMBER",
      EFFECT = "EFFECT"
    }

    const makeIdCardWithColors = ({ typeId, order, value, color }): string => {
      return `CARD_${Type[typeId]}_${value}_COLOR_${color}_${order}`;
    };

    for (let number = 0; number < MAX_NUMBER_NORMAL_CARDS + 1; number++) {
      Object.values(COLORS).forEach((color) => {
        this.cards.push({
          id: makeIdCardWithColors({
            typeId: Type.NUMBER,
            order: 1,
            value: number,
            color
          }),
          number,
          color
        });
        this.cards.push({
          id: makeIdCardWithColors({
            typeId: Type.NUMBER,
            order: 2,
            value: number,
            color
          }),
          number,
          color
        });
      });
    }

    Object.values(COLORS).forEach((color) => {
      this.cards.push({
        id: makeIdCardWithColors({
          typeId: Type.EFFECT,
          order: 1,
          value: "ADD_2",
          color
        }),
        color,
        ...ADD_2_CARD
      });
      this.cards.push({
        id: makeIdCardWithColors({
          typeId: Type.EFFECT,
          order: 2,
          value: "ADD_2",
          color
        }),
        color,
        ...ADD_2_CARD
      });

      this.cards.push({
        id: makeIdCardWithColors({
          typeId: Type.EFFECT,
          order: 1,
          value: "REVERT",
          color
        }),
        color,
        ...REVERT
      });
      this.cards.push({
        id: makeIdCardWithColors({
          typeId: Type.EFFECT,
          order: 2,
          value: "REVERT",
          color
        }),
        color,
        ...REVERT
      });

      this.cards.push({
        id: makeIdCardWithColors({
          typeId: Type.EFFECT,
          order: 1,
          value: "BLOCKED",
          color
        }),
        color,
        ...BLOCKED
      });
      this.cards.push({
        id: makeIdCardWithColors({
          typeId: Type.EFFECT,
          order: 2,
          value: "BLOCKED",
          color
        }),
        color,
        ...BLOCKED
      });
    });

    const makeIdWithoutColor = (orderNumber, effectName): string =>
      `CARD_EFFECT_${effectName}_${orderNumber}`;

    for (let number1 = 0; number1 < MAX_CHANGE_COLOR_CARDS; number1++) {
      this.cards.push({
        id: makeIdWithoutColor(number1, "CHANGE_COLOR"),
        ...CHANGE_COLOR
      });
    }

    for (let number2 = 0; number2 < MAX_CHANGE_4_CARDS; number2++) {
      this.cards.push({
        id: makeIdWithoutColor(number2, "ADD_4"),
        ...ADD_4_CARD
      });
    }
    return this.cards;
  };
}

export default MakeCards;
