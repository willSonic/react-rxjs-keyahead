import { fromJS } from 'immutable';
import { BooksList, Book } from '../../models/books/Book';
import { BookActionTypes } from './index';

export const initialState = {
  loading: false,
  error: null,
  booksSearchList: new BooksList(),
};

export const mergeRecords = records => {
  if ('items' in records) {
    return new BooksList(
      records.items.map(record => {
        if ('volumeInfo' in record) {
          return new Book({ id: record.id, ...record.volumeInfo });
        }
        return new BooksList();
      }),
    );
  }
  return new BooksList();
};
export const initialImmutableState = fromJS(initialState);

export const BooksListReducer = (state = initialImmutableState, action) => {
  const { payload = {} } = action;
  switch (action.type) {
    case BookActionTypes.BOOK_SEARCH_BY_TITLE:
      return state.withMutations(mutableState => {
        mutableState
          .set('loading', true)
          .set('error', null)
          .set('booksSearchList', new BooksList());
      });
    case BookActionTypes.BOOK_SEARCH_BY_TITLE_SUCCESS:
      return state.withMutations(mutableState => {
        mutableState
          .set('booksSearchList', mergeRecords(payload))
          .set('loading', false)
          .set('error', null);
      });
    case BookActionTypes.BOOK_SEARCH_BY_TITLE_FAILURE:
      return state.withMutations(mutableState => {
        mutableState
          .set('loading', false)
          .set('error', payload)
          .set('booksSearchList', new BooksList());
      });
    default:
      return state;
  }
};

export const getBooksSearchList = state =>
  state.BooksListReducer.get('booksSearchList');
export const getBooksSearchListLoading = state =>
  state.BooksListReducer.get('loading');
export const getBooksSearchListError = state => state.BooksListReducer.error;
