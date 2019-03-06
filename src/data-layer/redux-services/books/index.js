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

import { BooksListReducer } from './book-reducer';

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

export const searchTerms = {
  IN_TITLE: 'intitle:',
  IN_AUTHOR: 'inauthor:',
  SUBJECT: 'subject:',
};
export const BookEpics = combineEpics(epicSearchGoogleBooks);

export { BooksListReducer };

export const BookSelectors = BookSelectorExports;
