import { gql } from "@apollo/client";

// Gets all books in the logged-in user's collection. Requires no arguments.
export const GET_MY_BOOKS=gql`
    query Me {
      me {
        books {
          _id
          authors
          bookId
          image
          review {
            content
            shared
            username
          }
          title
          progress
        }
      }
    }
`

// Get one book by _id, including the nested review. Requires book's _id as argument.
export const GET_ONE_BOOK=gql`
    query GetBook($id: ID!) {
      getBook(_id: $id) {
        _id
        authors
        bookId
        image
        title
        review {
          content
          shared
          username
        }
        progress
      }
    }
`

// Get an array of book objects from google book search. Requires search string as argument.
export const GOOGLE_BOOK_SEARCH=gql`
    query BookSearch($string: String!) {
      bookSearch(string: $string) {
        authors
        bookId
        image
        title
      }
    }
`

// Get an array of all reviews of a book. Requires bookId as argument.
export const GET_BOOK_REVIEWS=gql`
    query BookReviews($bookId: String!) {
      bookReviews(bookId: $bookId) {
        _id
        review {
          content
          username
        }
      }
    }
`
// Gets user information by ID. Used for Profile page.
export const GET_USER = gql`
  query getUser($getUserId: ID!) {
    getUser(id: $getUserId) {
      _id
      username
      email
      groups {
        _id
        groupname
        description
      }
      books {
        _id
        title
        authors
        image
        progress
        bookId
      }
    }
  }
`;

// Gets club details by club ID. Used for Club page.
export const GET_CLUB = gql`
  query getClub($getClubId: ID!) {
    getClub(id: $getClubId) {
      _id
      groupname
      description
      users {
        username
        email
        _id
      }
      discussions {
        title
        _id
        image
        authors
      }
    }
  }
`;

// Gets all discussions for a club. Used for Club Discussion component.
export const GET_DISCUSSIONS = gql`
  query getDiscussions($clubId: ID!) {
    getDiscussions(clubId: $clubId) {
      _id
      title
      image
      authors
      comments {
        commentId
        content
        username
      }
    }
  }
`;

// Gets progress of a specific book by its ID. Used for Book Progress page.
export const GET_BOOK_PROGRESS = gql`
  query getBookProgress($id: ID!) {
    getBook(_id: $id) {
      _id
      title
      authors
      image
      bookId
      progress
    }
  }
`;
