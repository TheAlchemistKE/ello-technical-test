/**
 * Checks if the word is a number written in words
 * Converts the word into a number
 *
 * @param {string} word - The word/token to be analyzed and converted
 * @returns {number | null} - Returns number if the word was a number written in words otherwise it returns null.
 */
export default function isNumberInWords(word: string): number | null {
  const numberWords: { [word: string]: number } = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const words = word.toLowerCase().split(" ");
  let result = 0;
  let currentNumber = 0;

  for (const word of words) {
    if (numberWords[word] !== undefined) {
      currentNumber += numberWords[word];
    } else if (word === "hundred") {
      currentNumber *= 100;
    } else if (word === "thousand" || word === "million") {
      result += currentNumber;
      currentNumber = 0;
      if (word === "thousand") {
        result *= 1000;
      } else if (word === "million") {
        result *= 1000000;
      }
    } else {
      return null; // Unrecognized word
    }
  }

  return result + currentNumber;
}
