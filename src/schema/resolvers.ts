import { bookData } from "../data";
import { Book, NewBook } from "../interfaces/types.interface";
import transformPageContent from "../utils/tokenizer";

const resolvers = {
  Query: {
    GetBook: (_: any, { id }: any): NewBook => {
      const existingBook = bookData.find((book: Book) => book.id === id);
      const data = transformPageContent(existingBook);

      return {
        id: existingBook.id,
        pages: data,
      };
    },
  },
};

export { resolvers };
