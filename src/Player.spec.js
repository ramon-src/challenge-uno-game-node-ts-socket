import Player from "./Player";
import Deck from "./Deck";
import Cards from "./MakeCards";
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
    const id = "uh12i3uh1i2h3i1";
    const player = new Player(id);
    player.setInitialHandCards(cards);

    expect(player.hand).toEqual(cards);
    expect(player.hand.length).toBe(7);

    const cardChosen = cards[2];

    const discartedCard = player.playCard(cardChosen);

    expect(player.hand).toEqual(expectedHand);
    expect(player.hand.length).toBe(6);
    expect(discartedCard).toEqual(cardChosen);
  });

  it("should buy a card", () => {
    const cards = [
      { id: 1, color: COLORS.BLUE, number: 0 },
      { id: 2, color: COLORS.RED, number: 1 },
      { id: 3, color: COLORS.BLUE, number: 2 },
      { id: 4, color: COLORS.GREEN, number: 3 },
      { id: 5, color: COLORS.YELLOW, number: 4 },
      { id: 6, color: COLORS.BLUE, number: 5 },
      { id: 7, color: COLORS.RED, number: 6 }
    ];
    const deckCards = new Cards().build();
    const deck = new Deck(deckCards);
    const expectedDeckCards = deck.cards.length - 1;
    const id = "u1ih3iu23i12";
    const player = new Player(id);
    player.setInitialHandCards(cards);

    expect(player.hand.length).toBe(7);

    player.buyCard(deck);

    expect(deck.cards.length).toBe(expectedDeckCards);
    expect(player.hand.length).toBe(8);
  });
});
