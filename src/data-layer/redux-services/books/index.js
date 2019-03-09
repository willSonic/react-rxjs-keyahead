import { combineEpics } from 'redux-observable';
import {
  BOOK_SEARCH_BY_TITLE,
  BOOK_SEARCH_BY_TITLE_SUCCESS,
  BOOK_SEARCH_BY_TITLE_FAILURE,
  bookSearchByTitle,
  bookSearchByTitleSuccess,
  bookSearchByTitleFailure,
  FETCH_BOOK_BY_ID,
  FETCH_BOOK_BY_ID_SUCCESS,
  FETCH_BOOK_BY_ID_FAILURE,
  fetchBookById,
  fetchBookByIdSuccess,
  fetchBookByIdFailure,
  SELECT_BOOK_BY_ID,
  selectBookById,
} from './book-actions';

import * as BookSelectorExports from './book-selectors';
import { epicSearchGoogleBooks, epicFetchBookFromGoogle } from './book-effects';

import { BooksListReducer } from './book-reducer';

export const BookActionTypes = {
  BOOK_SEARCH_BY_TITLE,
  BOOK_SEARCH_BY_TITLE_SUCCESS,
  BOOK_SEARCH_BY_TITLE_FAILURE,
  FETCH_BOOK_BY_ID,
  FETCH_BOOK_BY_ID_SUCCESS,
  FETCH_BOOK_BY_ID_FAILURE,
  SELECT_BOOK_BY_ID,
};

export const BookActionFunctions = {
  bookSearchByTitle,
  bookSearchByTitleSuccess,
  bookSearchByTitleFailure,
  fetchBookById,
  fetchBookByIdSuccess,
  fetchBookByIdFailure,
  selectBookById,
};

export const apiGoogleBooksApi = 'https://www.googleapis.com/books/v1/volumes/';

export const searchTerms = {
  IN_TITLE: '?q=intitle:',
  IN_AUTHOR: '?q=inauthor:',
  SUBJECT: '?q=subject:',
};
export const BookEpics = combineEpics(
  epicSearchGoogleBooks,
  epicFetchBookFromGoogle,
);

export { BooksListReducer };

export const BookSelectors = BookSelectorExports;
