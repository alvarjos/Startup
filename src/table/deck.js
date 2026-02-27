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
