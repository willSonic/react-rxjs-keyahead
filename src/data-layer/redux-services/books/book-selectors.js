import { createSelector } from 'reselect';

import {
  getBooksSearchList,
  getBooksSearchListLoading,
  getBooksSearchListError,
} from './book-reducer';

export const booksSearchList = createSelector(
  [getBooksSearchList],
  bookCollection => bookCollection,
);

export const isLoading = createSelector(
  [getBooksSearchList],
  loading => loading,
);

export const booksSearchListError = createSelector(
  [getBooksSearchListError],
  error => error,
);
