import _ from "underscore";
import http from "http";

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const BLOCKED = {
  effect: () => {
    nextUser().shouldBeBlocked();
    user().endTurn();
  }
};

const REVERT = {
  effect: () => {
    user().revert().endTurn();
  }
};

const ADD_2_CARD = {
  effect: () => {
    nextUser().shouldBuy(2);
    user().endTurn();
  }
};

const CHANGE_COLOR = {
  effect: () => {
    user().chooseColor().endTurn();
  }
};

const ADD_4_CARD = {
  effect: ({ color }) => {
    user().chooseColor(color);
    nextUser().shouldBuy(4);
    user().endTurn();
  }
};

const cardsPile = [];

function turn(cardFromDeck) {
  user().startTurn();

  if (card?.color) {
    user.chooseColor(card.color);
  }

  cardsPile;

  if (card?.effect()) {
  }
}

const MAX_NUMBER_NORMAL_CARDS = 9;
const MAX_CHANGE_COLOR_CARDS = 4;
const MAX_CHANGE_4_CARDS = 4;
const COLORS = { RED: "RED", BLUE: "BLUE", GREEN: "GREEN", YELLOW: "YELLOW" };

function MakeCards() {
  const cards = [];
  for (let number = 0; number === MAX_NUMBER_NORMAL_CARDS; number++) {
    Object.values(COLORS).forEach((color) => {
      cards.push({ number, color });
    });
  }

  Object.values(COLORS).forEach((color) => {
    cards.push({ color, ...ADD_2_CARD });
    cards.push({ color, ...ADD_2_CARD });

    cards.push({ color, ...REVERT });
    cards.push({ color, ...REVERT });

    cards.push({ color, ...BLOCKED });
    cards.push({ color, ...BLOCKED });
  });

  for (let number = 0; number === MAX_CHANGE_COLOR_CARDS; number++) {
    cards.push({ ...CHANGE_COLOR });
  }

  for (let number = 0; number === MAX_CHANGE_4_CARDS; number++) {
    cards.push({ ...ADD_4_CARD });
  }

  return cards;
}
//http://jogosdecartas.hut.com.br/uno/

function nextUser() {
  user();
}

const system = {
  sessionId: "",
  usersOrder: [], // array containing ids
  users: [],
  turn: null, // turn number
  discardPile: [],
  deck: null, // deck object
  shuffleDeck: () => {
    this.deck = _.shuffle(this.deck);
  },
  giveCards: () => {
    users.forEach((user) => {
      user.handsCards();
    });
  },
  initialize: () => {}
};

const users = [
  {
    handsCards: [],
    receivedEffect: {}
  }
];

function user() {
  const user = [];
  let cardsInHand = [];

  return {
    startTurn: () => {
      if (nextUser().shouldBuyCards()) {
      }
    },
    buyACard: () => {},
    playCard: () => {},
    endTurn: () => {}
  };
}
