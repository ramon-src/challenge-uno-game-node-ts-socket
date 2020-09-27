import Game from "./Game";

describe("Game", () => {
  it("should start the game with default values", () => {
    const game = new Game();

    expect(game.deck).toBeNull();
  });

  xit("should initialize the game", () => {
    const game = new Game();

    game.initialize();
  });
});
