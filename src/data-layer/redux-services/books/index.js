import { combineEpics } from 'redux-observable';
import {
  BOOK_SEARCH_BY_TITLE,
  BOOK_SEARCH_BY_TITLE_SUCCESS,
  BOOK_SEARCH_BY_TITLE_FAILURE,
  bookSearchByTitle,
  bookSearchByTitleSuccess,
  bookSearchByTitleFailure,
} from './book-actions';

import * as BookSelectorExports from './book-selectors';
import { epicSearchGoogleBooks } from './book-effects';

import { BooksReducer } from './book-reducer';

export const BookActionTypes = {
  BOOK_SEARCH_BY_TITLE,
  BOOK_SEARCH_BY_TITLE_SUCCESS,
  BOOK_SEARCH_BY_TITLE_FAILURE,
};

export const BookActionFunctions = {
  bookSearchByTitle,
  bookSearchByTitleSuccess,
  bookSearchByTitleFailure,
};

export const apiGoogleFetchBooksByName =
  'https://www.googleapis.com/books/v1/volumes?q=';

export const BookEpics = combineEpics(epicSearchGoogleBooks);

export { BooksReducer };

export const BookSelectors = BookSelectorExports;
