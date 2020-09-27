export const MAX_NUMBER_NORMAL_CARDS = 9;

export const MAX_CHANGE_COLOR_CARDS = 4;

export const MAX_CHANGE_4_CARDS = 4;

export const COLORS = {
  RED: "RED",
  BLUE: "BLUE",
  GREEN: "GREEN",
  YELLOW: "YELLOW"
};

export const BLOCKED = {
  effect: () => {
    nextUser().shouldBeBlocked();
    user().endTurn();
  }
};

export const REVERT = {
  effect: () => {
    user().revert().endTurn();
  }
};

export const ADD_2_CARD = {
  effect: () => {
    nextUser().shouldBuy(2);
    user().endTurn();
  }
};

export const CHANGE_COLOR = {
  effect: () => {
    user().chooseColor().endTurn();
  }
};

export const ADD_4_CARD = {
  effect: ({ color }) => {
    user().chooseColor(color);
    nextUser().shouldBuy(4);
    user().endTurn();
  }
};
