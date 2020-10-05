export const MAX_NUMBER_NORMAL_CARDS = 9;

export const MAX_CHANGE_COLOR_CARDS = 4;

export const MAX_CHANGE_4_CARDS = 4;

export const COLORS = {
  RED: "RED",
  BLUE: "BLUE",
  GREEN: "GREEN",
  YELLOW: "YELLOW"
};

export const EFFECTS = {
  REVERT: "REVERT",
  ADD_2_CARD: "ADD_2_CARD",
  ADD_4_CARD: "ADD_4_CARD",
  BLOCKED: "BLOCKED",
  CHANGE_COLOR: "CHANGE_COLOR"
};

export const TURN = {
  START: "START",
  CONTINUE: "CONTINUE",
  END: "END",
  DIRECTION: {
    LEFT: "LEFT",
    RIGHT: "RIGHT"
  }
};

export const BLOCKED = {
  effect: (state) => {
    return { ...state, turn: TURN.END };
  }
};

export const REVERT = {
  effect: (state) => {
    let newDirection;
    let newCurrentTurn;

    if (state.turnDirection === TURN.DIRECTION.RIGHT) {
      newDirection = TURN.DIRECTION.LEFT;
      newCurrentTurn = state.currentTurn - 1;
    } else {
      newDirection = TURN.DIRECTION.RIGHT;
      newCurrentTurn = state.currentTurn + 1;
    }

    return {
      ...state,
      turn: TURN.CONTINUE,
      turnDirection: newDirection,
      currentTurn: newCurrentTurn
    };
  }
};
