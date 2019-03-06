import { createSelector } from 'reselect';

import {
  getBookCollection,
  getBookCollectionLoading,
  getBookCollectionError,
} from './book-reducer';

export const bookCollection = createSelector(
  [getBookCollection],
  bookCollection => bookCollection,
);

export const isLoading = createSelector(
  [getBookCollectionLoading],
  loading => loading,
);

export const bookCollectionError = createSelector(
  [getBookCollectionError],
  error => error,
);
