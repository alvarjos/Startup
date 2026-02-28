/**
 * Returns a fresh deck of 52 card ids.
 * 1-13: Spades (Ace-King)
 * 14-26: Hearts
 * 27-39: Diamonds
 * 40-52: Clubs
 * @returns {number[]} Array of numbers 1 through 52
 */
export function fullDeck() {
  return Array.from({ length: 52 }, (_, i) => i + 1);
}

export function getCardLabel(cardId) {
  if (cardId == 11 || cardId == 24 || cardId == 37 || cardId == 50) {
    return 'Jack';
  } else if (cardId == 12 || cardId == 25 || cardId == 38 || cardId == 51) {
    return 'Queen';
  } else if (cardId == 13 || cardId == 26 || cardId == 39 || cardId == 52) {
    return 'King';
  }
}

export function getCardImageSrc(cardId) {
  if (cardId >= 1 && cardId <= 13) {
    return '/public/cards/Spade_Card.png';
  } else if (cardId >= 14 && cardId <= 26) {
    return '/public/cards/Clubs_Card.png';
  } else if (cardId >= 27 && cardId <= 39) {
    return '/public/cards/Hearts_Card.png';
  } else if (cardId >= 40 && cardId <= 52) {
    return '/public/cards/Diamond_Card.png';
  }
} 

export function getCardValue(cardId) {
  if (cardId == 14 || cardId == 27 || cardId == 40) {
    return 1;
    } else if (cardId == 15 || cardId == 28 || cardId == 41) {
      return 2;
    } else if (cardId == 16 || cardId == 29 || cardId == 42) {
      return 3;
    } else if (cardId == 17 || cardId == 30 || cardId == 43) {
      return 4;
    } else if (cardId == 18 || cardId == 31 || cardId == 44) {
      return 5;
    } else if (cardId == 19 || cardId == 32 || cardId == 45) {
      return 6;
    } else if (cardId == 20 || cardId == 33 || cardId == 46) {
      return 7;
    } else if (cardId == 21 || cardId == 34 || cardId == 47) {
      return 8;
    } else if (cardId == 22 || cardId == 35 || cardId == 48) {
      return 9;
    } else if (cardId == 23 || cardId == 36 || cardId == 49) {
      return 10;
    }
}