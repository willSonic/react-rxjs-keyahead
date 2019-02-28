import { combineEpics } from 'redux-observable';
import {
  FETCH_SONGSTERR_SONGS_BY_TITLE,
  FETCH_SONGSTERR_SONGS_BY_TITLE_SUCCESS,
  FETCH_SONGSTERR_SONGS_BY_TITLE_FAILURE,
  fetchSongsByTitle,
  fetchSongsByTitleSuccess,
  fetchSongsByTitleFailure,
} from './songster-actions';

import * as SelectorExports from './songster-selectors';

import { epicFetchSongsFromSongSterr } from './sonsgter-effects';

import { SongReducer } from './songster-reducer';

export const SongsterActionTypes = {
  FETCH_SONGSTERR_SONGS_BY_TITLE,
  FETCH_SONGSTERR_SONGS_BY_TITLE_SUCCESS,
  FETCH_SONGSTERR_SONGS_BY_TITLE_FAILURE,
};
export const SongsterActionMethods = {
  fetchSongsByTitle,
  fetchSongsByTitleSuccess,
  fetchSongsByTitleFailure,
};
export const SongCollectionReducer = SongReducer;

export const apiSongSterrFetchSongsByTitle =
  'https://www.songsterr.com/a/ra/songs.json?pattern=';

export const apiSongSterrFetchSongsByArtist =
  'https://www.songsterr.com/a/ra/songs/byartists.json?artists=';

export const SongsterrEpics = combineEpics(epicFetchSongsFromSongSterr);

export const SongsterrSelectors = SelectorExports;
