import { fromJS } from 'immutable';
import { SongsList, Song } from '../../models/songsterr/Song';

import {
  FETCH_SONGSTERR_SONGS_BY_TITLE,
  FETCH_SONGSTERR_SONGS_BY_TITLE_SUCCESS,
  FETCH_SONGSTERR_SONGS_BY_TITLE_FAILURE,
} from './songster-actions';

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
  songsCollection: SongsList,
};

export const mergeRecords = records =>
  new SongsList(records.map(c => new Song(c)));

export const initialImmutableState = fromJS(initialState);

export const SongReducer = (state = initialImmutableState, action) => {
  const { payload = {} } = action;
  switch (action.type) {
    case FETCH_SONGSTERR_SONGS_BY_TITLE:
      return state.withMutations(mutableState => {
        mutableState
          .set('loading', true)
          .set('loaded', false)
          .set('error', null)
          .set('songsCollection', new SongsList());
      });
    case FETCH_SONGSTERR_SONGS_BY_TITLE_SUCCESS:
      return state.withMutations(mutableState => {
        mutableState
          .set('songsCollection', mergeRecords(payload.response))
          .set('loading', false)
          .set('loaded', true)
          .set('error', null);
      });
    case FETCH_SONGSTERR_SONGS_BY_TITLE_FAILURE:
      return state.withMutations(mutableState => {
        mutableState
          .set('loading', false)
          .set('loaded', false)
          .set('error', null)
          .set('songsCollection', new SongsList());
      });
    default:
      return state;
  }
};

export const getSongsCollection = state =>
  state.SongReducer.get('songsCollection');
export const getSongsCollectionLoading = state =>
  state.SongReducer.get('loading');
export const getSongsCollectionLoaded = state =>
  state.SongReducer.get('loaded');
export const getSongsCollectionError = state => state.SongReducer.get('error');
