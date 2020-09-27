import Player from "./Player";
import { COLORS } from "./constants";

describe("Player", () => {
  it("should play a card", () => {
    const cards = [
      { id: 1, color: COLORS.BLUE, number: 0 },
      { id: 2, color: COLORS.RED, number: 1 },
      { id: 3, color: COLORS.BLUE, number: 2 },
      { id: 4, color: COLORS.GREEN, number: 3 },
      { id: 5, color: COLORS.YELLOW, number: 4 },
      { id: 6, color: COLORS.BLUE, number: 5 },
      { id: 7, color: COLORS.RED, number: 6 }
    ];
    const expectedHand = [
      { id: 1, color: COLORS.BLUE, number: 0 },
      { id: 2, color: COLORS.RED, number: 1 },
      { id: 4, color: COLORS.GREEN, number: 3 },
      { id: 5, color: COLORS.YELLOW, number: 4 },
      { id: 6, color: COLORS.BLUE, number: 5 },
      { id: 7, color: COLORS.RED, number: 6 }
    ];
    const player = new Player(cards);
    expect(player.hand).toEqual(cards);
    expect(player.hand.length).toBe(7);

    const cardChosen = cards[2];

    const discartedCard = player.playCard(cardChosen);

    expect(player.hand).toEqual(expectedHand);
    expect(player.hand.length).toBe(6);
    expect(discartedCard).toEqual(cardChosen);
  });
});
