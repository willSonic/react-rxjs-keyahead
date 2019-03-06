import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, debounceTime, map, catchError } from 'rxjs/operators';
import {
  BookActionTypes,
  BookActionFunctions,
  apiGoogleFetchBooksByName,
} from './index';

/**
 * Watches for successfully Transform response.
 * @param action$
 * @return {ActionsObservable} - dispatch to Update SongsterReducer with latest Songs
 */
export const epicSearchGoogleBooks = action$ =>
  action$.pipe(
    ofType(BookActionTypes.BOOK_SEARCH_BY_TITLE),
    debounceTime(500),
    mergeMap(payload => {
      ajax.getJSON(`${apiGoogleFetchBooksByName + payload}`).pipe(
        map(response =>
          BookActionFunctions.bookSearchByTitleSuccess(response),
        ),
        catchError(error =>
          of(BookActionFunctions.bookSearchByTitleFailure(error)),
        ),
      );
    }),
  );
