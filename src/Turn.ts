import { TURN } from "./constants";

function Turn({ currentTurn, playersOrder, dicardPile, turnDirection }) {
  this.state = { turn: TURN.START, playersOrder, turnDirection, currentTurn };

  this.applyEffects = function () {
    const topCardInDiscardPile = dicardPile.slice(-1)[0];

    if (topCardInDiscardPile?.effect) {
      const newState = topCardInDiscardPile.effect(this.state);
      this.state = newState;
    }
  };

  this.isOver = function () {
    return this.state.turn === TURN.END;
  };
}

export default Turn;
