import transformPageContent from "../src/utils/tokenizer";
import { Book } from "../src/interfaces/types.interface";

describe("transformPageContent", () => {
  // Should return an array of TransformedWord objects
  it("should return an array of TransformedWord objects when given a valid book", () => {
    // Arrange
    const book: Book = {
      id: 1,
      title: "Test Book",
      author: "Test Author",
      pages: [
        {
          pageIndex: 1,
          content: "This is a test page",
          tokens: [
            {
              value: "This",
              position: [0, 3],
            },
            {
              value: "is",
              position: [5, 6],
            },
            {
              value: "a",
              position: [8, 8],
            },
            {
              value: "test",
              position: [10, 13],
            },
            {
              value: "page",
              position: [15, 18],
            },
          ],
        },
      ],
    };

    const result = transformPageContent(book);

    expect(result).toEqual([
      {
        content: "Thi",
        index: 0,
        isTappable: true,
        token: "This",
      },
      {
        content: " ",
        index: null,
        isTappable: false,
        token: null,
      },
      {
        content: "i",
        index: 1,
        isTappable: true,
        token: "is",
      },
      {
        content: " ",
        index: null,
        isTappable: false,
        token: null,
      },
      {
        content: "",
        index: 2,
        isTappable: true,
        token: "a",
      },
      {
        content: " ",
        index: null,
        isTappable: false,
        token: null,
      },
      {
        content: "tes",
        index: 3,
        isTappable: true,
        token: "test",
      },
      {
        content: " ",
        index: null,
        isTappable: false,
        token: null,
      },
      {
        content: "pag",
        index: 4,
        isTappable: true,
        token: "page",
      },
    ]);
  });

  // Should correctly handle a book with no pages
  it("should return an empty array when given a book with no pages", () => {
    // Arrange
    const book: Book = {
      id: 1,
      title: "Test Book",
      author: "Test Author",
      pages: [],
    };

    // Act
    const result = transformPageContent(book);

    // Assert
    expect(result).toEqual([]);
  });

  // Should correctly handle a page with no tokens
  it("should return an empty array when given a page with no tokens", () => {
    // Arrange
    const book: Book = {
      id: 1,
      title: "Test Book",
      author: "Test Author",
      pages: [
        {
          pageIndex: 1,
          content: "This is a test page",
          tokens: [],
        },
      ],
    };

    // Act
    const result = transformPageContent(book);

    // Assert
    expect(result).toEqual([]);
  });
});
