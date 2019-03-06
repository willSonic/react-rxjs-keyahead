export const BOOK_SEARCH_BY_TITLE = 'BOOK_SEARCH_BY_TITLE';
export const BOOK_SEARCH_BY_TITLE_SUCCESS = 'BOOK_SEARCH_BY_TITLE_SUCCESS';
export const BOOK_SEARCH_BY_TITLE_FAILURE = 'BOOK_SEARCH_BY_TITLE_FAILURE';

export function bookSearchByTitle(queryString) {
  return {
    type: BOOK_SEARCH_BY_TITLE,
    payload: queryString,
  };
}
export function bookSearchByTitleSuccess(response) {
  return {
    type: BOOK_SEARCH_BY_TITLE_SUCCESS,
    payload: response,
  };
}
export function bookSearchByTitleFailure(error) {
  return {
    type: BOOK_SEARCH_BY_TITLE_FAILURE,
    payload: { error },
  };
}
