import { gql } from "apollo-server";

export const typeDefs = gql`
  type Token {
    value: String
    position: [Int]
  }

  type Page {
    pageIndex: Int
    content: String
    tokens: [Token]
  }

  type Book {
    id: Int
    title: String
    author: String
    pages: [Page]
  }

  type NewBook {
    id: Int
    pages: [ContentInfo]
  }

  type ContentInfo {
    index: Int
    token: String
    content: String
    isTappable: Boolean
  }

  type Query {
    GetBook(id: Int): NewBook
  }
`;
