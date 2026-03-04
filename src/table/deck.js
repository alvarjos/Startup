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
  } else if (cardId == 1 || cardId == 14 || cardId == 27 || cardId == 40) {
    return 'Ace';
  }
}

export function getCardImageSrc(cardId) {
  if (cardId >= 1 && cardId <= 13) {
    return '/cards/Spade_Card.png';
  } else if (cardId >= 14 && cardId <= 26) {
    return '/cards/Clubs_Card.png';
  } else if (cardId >= 27 && cardId <= 39) {
    return '/cards/Hearts_Card.png';
  } else if (cardId >= 40 && cardId <= 52) {
    return '/cards/Diamond_Card.png';
  }
} 

export function getCardValue(cardId) {
  const cardValue = ((cardId - 1) % 13) + 1;

  // Face card values
  if (cardValue > 10) {
    return 10; 
  }
  return cardValue; 
}
