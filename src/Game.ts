import { Deck as IDeck, Player as IPlayer } from "./Interfaces";
import Cards from "./MakeCards";
import Deck from "./Deck";
import Player from "./Player";

function Game() {
  this.sessionId = "";
  this.playersOrder = []; // array containing ids
  this.players = [] as IPlayer[];
  this.turn = null; // turn number
  this.discardPile = [];
  this.deck = null; // deck object

  this.addPlayer = (id: string) => {
    this.players.push(new Player(id));
    this.playersOrder.push(id);
  };

  this.giveCards = (deck: IDeck) => {
    const playersInGame = this.playersOrder.length;
    const limitOfCardsToGive = playersInGame * 7;
    let playersIterator = 0;

    const addCardToPlayer = () => {
      this.players[playersIterator].buyCard(deck);

      if (playersIterator < playersInGame - 1) {
        playersIterator += 1;
      } else {
        playersIterator = 0;
      }
    };

    for (let i = 1; i <= limitOfCardsToGive; i++) {
      addCardToPlayer();
    }
  };

  this.initialize = () => {
    const cards = new Cards().build();
    this.deck = new Deck(cards).shuffle();

    this.giveCards(this.deck);
  };
}

export default Game;
