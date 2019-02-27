import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, debounceTime, map, catchError } from 'rxjs/operators';
import {
  SongsterActionMethods,
  SongsterActionTypes,
  apiSongSterrFetchSongsByTitle,
} from './index';

/**
 * Watches for successfully Transform response.
 * @param action$
 * @return {ActionsObservable} - dispatch to Update SongsterReducer with latest Songs
 */
export const epicFetchSongsFromSongSterr = action$ =>
  action$.pipe(
    ofType(SongsterActionTypes.FETCH_SONGSTERR_SONGS_BY_TITLE),
    debounceTime(500),
    mergeMap(payload => {
      ajax.getJSON(`${apiSongSterrFetchSongsByTitle + payload}`).pipe(
        map(response =>
          SongsterActionMethods.fetchSongsByTitleSuccess(response),
        ),
        catchError(error =>
          of(SongsterActionMethods.fetchSongsByTitleFailure(error)),
        ),
      );
    }),
  );
