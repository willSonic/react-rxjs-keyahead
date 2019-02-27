import { createSelector } from 'reselect';

import {
  getSongsCollection,
  getSongsCollectionLoaded,
  getSongsCollectionLoading,
  getSongsCollectionError,
} from './songster-reducer';

export const songsCollection = createSelector(
  [getSongsCollection],
  songsCollection => songsCollection,
);

export const songsLoaded = createSelector(
  [getSongsCollectionLoaded],
  songsCollection => songsCollection,
);

export const songsLoading = createSelector(
  [getSongsCollectionLoading],
  loading => loading,
);

export const songsError = createSelector(
  [getSongsCollectionError],
  error => error,
);
