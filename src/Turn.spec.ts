import Turn from "./Turn";
import MakeCards from "./MakeCards";
import Player from "./Player";
import { TURN } from "./constants";

describe("Turn", () => {
  const BLOCKED_CARD_ID = `CARD_EFFECT_BLOCKED_COLOR_BLUE_1`;
  const REVERT_CARD_ID = `CARD_EFFECT_REVERT_COLOR_RED_1`;

  it("should apply blocked card effect to the current player and should finish the turn", () => {
    const cards = new MakeCards().build();
    const blockedCard = cards.find((card) => card.id === BLOCKED_CARD_ID);

    const dicardPile = [blockedCard];
    const playersOrder = [];
    const currentTurn = 0;
    const turnDirection = TURN.DIRECTION.RIGHT;

    const turn = new Turn({
      currentTurn,
      playersOrder,
      dicardPile,
      turnDirection
    });

    turn.applyEffects();

    expect(turn.isOver()).toBe(true);
  });

  it("should apply revert card effect to the current player and should continue the turn", () => {
    const cards = new MakeCards().build();
    const revertCard = cards.find((card) => card.id === REVERT_CARD_ID);

    const player1 = new Player("1");
    const player2 = new Player("2");
    const player3 = new Player("3");

    const dicardPile = [revertCard];
    const playersOrder = [player1, player2, player3];
    const turnDirection = TURN.DIRECTION.RIGHT;
    const currentTurn = 1;

    const turn = new Turn({
      dicardPile,
      currentTurn,
      playersOrder,
      turnDirection
    });

    turn.applyEffects();

    expect(turn.isOver()).toBe(false);
    expect(turn.state.playersOrder).toEqual([player1, player2, player3]);
    expect(turn.state.turnDirection).toBe(TURN.DIRECTION.LEFT);
    expect(turn.state.currentTurn).toBe(0);
  });
});
