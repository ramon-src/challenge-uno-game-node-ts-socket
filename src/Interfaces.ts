export interface Card {
  id: string;
  color?: string;
  number?: number;
  effect?: () => void;
}

export interface Deck {
  cards: Card[];
  shuffle?: () => Deck;
  getCard?: () => Card;
}

export interface Player {
  id: string;
  hand: Card[];
  setInitialHandCards: (cards: Card[]) => void;
  buyCard: (deck: Deck[]) => void;
  playCard: (card: Card) => Card;
}
