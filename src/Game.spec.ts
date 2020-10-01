import Game from "./Game";
import { COLORS } from "./constants";
import { __setDeck } from "./Deck";

jest.mock("./Deck");

describe("Game", () => {
  it("should start the game with default values", () => {
    const game = new Game();

    expect(game.deck).toBeNull();
  });

  xit("should initialize the game", () => {
    const game = new Game();

    game.initialize();
  });

  it("should give splitted 7 cards for each user", () => {
    __setDeck([
      { id: 1, color: COLORS.BLUE, number: 0 },
      { id: 2, color: COLORS.RED, number: 1 },
      { id: 3, color: COLORS.BLUE, number: 2 },
      { id: 4, color: COLORS.GREEN, number: 3 },
      { id: 5, color: COLORS.YELLOW, number: 4 },
      { id: 6, color: COLORS.BLUE, number: 5 },
      { id: 7, color: COLORS.RED, number: 6 },
      { id: 12, color: COLORS.BLUE, number: 0 },
      { id: 22, color: COLORS.RED, number: 1 },
      { id: 32, color: COLORS.BLUE, number: 2 },
      { id: 42, color: COLORS.GREEN, number: 3 },
      { id: 52, color: COLORS.YELLOW, number: 4 },
      { id: 62, color: COLORS.BLUE, number: 5 },
      { id: 72, color: COLORS.RED, number: 6 }
    ]);
    const game = new Game();

    game.addPlayer("1");
    game.addPlayer("2");

    game.initialize();

    expect(game.players[0].hand).toEqual([
      { id: 1, color: COLORS.BLUE, number: 0 },
      { id: 3, color: COLORS.BLUE, number: 2 },
      { id: 5, color: COLORS.YELLOW, number: 4 },
      { id: 7, color: COLORS.RED, number: 6 },
      { id: 22, color: COLORS.RED, number: 1 },
      { id: 42, color: COLORS.GREEN, number: 3 },
      { id: 62, color: COLORS.BLUE, number: 5 }
    ]);
    expect(game.players[1].hand).toEqual([
      { id: 2, color: COLORS.RED, number: 1 },
      { id: 4, color: COLORS.GREEN, number: 3 },
      { id: 6, color: COLORS.BLUE, number: 5 },
      { id: 12, color: COLORS.BLUE, number: 0 },
      { id: 32, color: COLORS.BLUE, number: 2 },
      { id: 52, color: COLORS.YELLOW, number: 4 },
      { id: 72, color: COLORS.RED, number: 6 }
    ]);
  });
});
