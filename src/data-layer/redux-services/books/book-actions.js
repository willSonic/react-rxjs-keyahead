export const BOOK_SEARCH_BY_TITLE = 'BOOK_SEARCH_BY_TITLE';
export function bookSearchByTitle(queryTitle) {
  return {
    type: BOOK_SEARCH_BY_TITLE,
    payload: queryTitle,
  };
}
export const BOOK_SEARCH_BY_TITLE_SUCCESS = 'BOOK_SEARCH_BY_TITLE_SUCCESS';
export function bookSearchByTitleSuccess(response) {
  return {
    type: BOOK_SEARCH_BY_TITLE_SUCCESS,
    payload: response,
  };
}

export const BOOK_SEARCH_BY_TITLE_FAILURE = 'BOOK_SEARCH_BY_TITLE_FAILURE';
export function bookSearchByTitleFailure(error) {
  return {
    type: BOOK_SEARCH_BY_TITLE_FAILURE,
    payload: { error },
  };
}

export const FETCH_BOOK_BY_ID = 'FETCH_BOOK_BY_ID';
export function fetchBookById(bookId) {
  return {
    type: FETCH_BOOK_BY_ID,
    payload: bookId,
  };
}
export const FETCH_BOOK_BY_ID_SUCCESS = 'FETCH_BOOK_BY_ID_SUCCESS';
export function fetchBookByIdSuccess(response) {
  return {
    type: FETCH_BOOK_BY_ID_SUCCESS,
    payload: response,
  };
}

export const FETCH_BOOK_BY_ID_FAILURE = 'FETCH_BOOK_BY_ID_FAILURE';
export function fetchBookByIdFailure(error) {
  return {
    type: FETCH_BOOK_BY_ID_FAILURE,
    payload: { error },
  };
}

export const SELECT_BOOK_BY_ID = 'SELECT_BOOK_BY_ID';
export function selectBookById(bookId) {
  return {
    type: SELECT_BOOK_BY_ID,
    payload: bookId,
  };
}
