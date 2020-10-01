import Deck from "./Deck";

describe("Deck", () => {
  it("should shuffle cards", () => {
    const cards = [{ color: "red" }, { color: "green" }, { color: "blue" }];

    const deckShuffled = new Deck(cards).shuffle();

    expect(deckShuffled.cards.length).toBe(3);
    expect(deckShuffled.cards).not.toEqual(cards);
  });

  it("should get the top card of the deck", () => {
    // initialization
    const cards = [{ color: "red" }, { color: "green" }, { color: "blue" }];
    const deckShuffled = new Deck(cards).shuffle();
    const firstCard = deckShuffled.cards[0];

    //execution
    const card = deckShuffled.getCard();

    //verifying
    expect(deckShuffled.cards.length).toEqual(2);
    expect(card).toEqual(firstCard);
  });
});
