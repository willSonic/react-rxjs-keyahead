import { fromJS } from 'immutable';
import { BooksList, Book } from '../../models/books/Book';
import { BookActionTypes } from './index';

export const initialState = {
  loading: false,
  error: null,
  bookCollection: BooksList,
};

export const mergeRecords = records => {
  return new BooksList(
    records.map(record => {
      if ('volumeInfo' in record) {
        return new Book({ id: record.id, ...record.volumeInfo });
      }
      return null;
    }),
  );
};
export const initialImmutableState = fromJS(initialState);

export const BooksReducer = (state = initialImmutableState, action) => {
  const { payload = {} } = action;
  switch (action.type) {
    case BookActionTypes.BOOK_SEARCH_BY_TITLE:
      return state.withMutations(mutableState => {
        mutableState
          .set('loading', true)
          .set('error', null)
          .set('bookCollection', new BooksList());
      });
    case BookActionTypes.BOOK_SEARCH_BY_TITLE_SUCCESS:
      return state.withMutations(mutableState => {
        mutableState
          .set('bookCollection', mergeRecords(payload))
          .set('loading', false)
          .set('error', null);
      });
    case BookActionTypes.BOOK_SEARCH_BY_TITLE_FAILURE:
      return state.withMutations(mutableState => {
        mutableState
          .set('loading', false)
          .set('error', payload)
          .set('songsCollection', new BooksList());
      });
    default:
      return state;
  }
};

export const getBookCollection = state =>
  state.BooksReducer.get('bookCollection');
export const getBookCollectionLoading = state =>
  state.BooksReducer.get('loading');
export const getBookCollectionError = state => state.BooksReducer.get('error');
