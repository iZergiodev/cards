const cardGame = () => {
  const valueList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const colourList = ["red", "blue", "green", "yellow"];
  const deck = [];

  const card1 = document.querySelector("#card1");
  const card2 = document.querySelector("#card2");
  const card3 = document.querySelector("#card3");
  const card4 = document.querySelector("#card4");

  const createDeck = () => {
    for (let i = 0; i < valueList.length; i++) {
      for (let j = 0; j < colourList.length; j++) {
        deck.push(valueList[i] + colourList[j]);
      }
    }
    for (let i = deck.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    return deck;
  };

  const distributeCard = () => {
    createDeck();
    const cards = [deck.shift(), deck.shift(), deck.shift(), deck.shift()];

    const cardElements = [card1, card2, card3, card4];

    cards.forEach((card, index) => {
      const number = card[0];
      const color = card.slice(1);

      cardElements[index].textContent = number;

      cardElements[index].classList.remove(
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
      );
      cardElements[index].classList.add(`bg-${color}-500`);
    });
  };

  distributeCard();
};

