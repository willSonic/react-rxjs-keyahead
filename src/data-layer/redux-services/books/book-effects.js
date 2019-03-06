import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, debounceTime, map, catchError } from 'rxjs/operators';
import {
  BookActionTypes,
  BookActionFunctions,
  apiGoogleFetchBooksByName,
  searchTerms,
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
    mergeMap(({ payload }) => {
      return ajax
        .getJSON(
          `${apiGoogleFetchBooksByName +
            searchTerms.IN_TITLE +
            payload +
            '&maxResults=20'}`,
        )
        .pipe(
          map(response =>
            BookActionFunctions.bookSearchByTitleSuccess(response),
          ),
          catchError(error =>
            of(BookActionFunctions.bookSearchByTitleFailure(error)),
          ),
        );
    }),
  );
