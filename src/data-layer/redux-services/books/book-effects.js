import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, debounceTime, map, catchError } from 'rxjs/operators';
import {
  BookActionTypes,
  BookActionFunctions,
  apiGoogleBooksApi,
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
    debounceTime(300),
    mergeMap(({ payload }) => {
      return ajax
        .getJSON(
          `${apiGoogleBooksApi +
            searchTerms.IN_TITLE +
            payload +
            '&maxResults=10'}`,
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

export const epicFetchBookFromGoogle = action$ =>
  action$.pipe(
    ofType(BookActionTypes.FETCH_BOOK_BY_ID),
    mergeMap(({ payload }) => {
      return ajax.getJSON(`${apiGoogleBooksApi}${payload}`).pipe(
        map(response => BookActionFunctions.fetchBookByIdSuccess(response)),
        catchError(error =>
          of(BookActionFunctions.fetchBookByIdFailure(error)),
        ),
      );
    }),
  );
