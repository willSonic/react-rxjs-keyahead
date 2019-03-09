import { createSelector } from 'reselect';

import {
  getBooksSearchList,
  getBooksSearchListLoading,
  getBooksSearchListError,
  getSelectedBookId,
} from './book-reducer';

export const booksSearchList = createSelector(
  [getBooksSearchList],
  bookCollection => bookCollection,
);

export const isLoading = createSelector(
  [getBooksSearchListLoading],
  loading => loading,
);

export const booksSearchListError = createSelector(
  [getBooksSearchListError],
  error => error,
);

export const selectedBook = createSelector(
  [getBooksSearchList, getSelectedBookId],
  (booksSearchList, selectedId) => booksSearchList.find(item => item.id === selectedId)
);
