export const FETCH_SONGSTERR_SONGS_BY_TITLE = 'FETCH_SONGSTERR_SONGS_BY_TITLE';
export const FETCH_SONGSTERR_SONGS_BY_TITLE_SUCCESS =
  'FETCH_SONGSTERR_SONGS_BY_TITLE_SUCCESS';
export const FETCH_SONGSTERR_SONGS_BY_TITLE_FAILURE =
  'FETCH_SONGSTERR_SONGS_BY_TITLE_FAILURE';

export function fetchSongsByTitle({ id }) {
  return {
    type: FETCH_SONGSTERR_SONGS_BY_TITLE,
    payload: { id },
  };
}
export function fetchSongsByTitleSuccess({ response }) {
  return {
    type: FETCH_SONGSTERR_SONGS_BY_TITLE_SUCCESS,
    payload: { response },
  };
}
export function fetchSongsByTitleFailure(payload) {
  return {
    type: FETCH_SONGSTERR_SONGS_BY_TITLE_FAILURE,
    payload,
  };
}
