import shuffle from 'shuffle-array';
import suits from './suits';
import ranks from './ranks';
import Card from './card';

class DeckOfCards {
  constructor() {
    this.cards = [];
    this.reset();
  }

  reset() {
    ranks.values().forEach((rank) => {
      suits.values().forEach((suit) => {
        this.cards.push(new Card(rank, suit));
      });
    });
  }

  shuffle() {
    shuffle(this.cards);
  }
}

export default DeckOfCards;
