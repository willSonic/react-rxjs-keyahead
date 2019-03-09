import { connect } from 'react-redux';
import {
  BookSelectors,
  BookActionFunctions,
} from '../../data-layer/redux-services/books';

const mapStateToProps = state => ({
  booksLoading: BookSelectors.isLoading(state),
  booksSearchList: BookSelectors.booksSearchList(state),
  booksSearchListError: BookSelectors.booksSearchListError(state),
  selectedBook: BookSelectors.selectedBook(state),
});

const mapDispatchToProps = {
  searchForBooksByTitle: BookActionFunctions.bookSearchByTitle,
  setSelectedBookId: BookActionFunctions.selectBookById,
};

export const BookCollectionConnectServices = connect(
  mapStateToProps,
  mapDispatchToProps,
);
