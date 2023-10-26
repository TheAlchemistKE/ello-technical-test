import { Book, Page, TransformedWord } from "../interfaces/types.interface";
import isNumberInWords from "./isNumberInWords";

/**
 * Takes in book content and returns converted tokenized book data
 *
 * @param {Book} book - The book to be converted
 * @returns {TransformedWord} Converted tokenized book data.
 */

export default function transformPageContent(book: Book): TransformedWord[] {
  const result: TransformedWord[] = [];
  let indexCounter = 0;

  for (const page of book.pages) {
    for (const token of page.tokens) {
      const content = page.content.slice(token.position[0], token.position[1]);
      const isTappable = true;

      // Check if the token is a number written in words
      const numberValue = isNumberInWords(token.value);
      if (numberValue !== null) {
        result.push({
          index: indexCounter,
          token: numberValue.toString(), // Convert to the corresponding number
          content: content,
          isTappable: isTappable,
        });
      } else {
        result.push({
          index: indexCounter,
          token: token.value,
          content: content,
          isTappable: isTappable,
        });
      }
      indexCounter++;

      // Add a space as a separator (if not the last token)
      if (token !== page.tokens[page.tokens.length - 1]) {
        result.push({
          index: null,
          token: null,
          content: " ",
          isTappable: false,
        });
      }
    }
  }

  return result;
}
