import MakeCards from "./MakeCards";
import MakeDeck from "./MakeDeck";

function Game() {
  this.sessionId = "";
  this.usersOrder = []; // array containing ids
  this.users = [];
  this.turn = null; // turn number
  this.discardPile = [];
  this.deck = null; // deck object

  this.giveCards = () => {
    users.forEach((user) => {
      user.handsCards();
    });
  };

  this.initialize = () => {
    const cards = new MakeCards().build();
    this.deck = new MakeDeck(cards).shuffle();
  };
}

export default Game;
