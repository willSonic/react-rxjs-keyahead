import { connect } from 'react-redux';
import {
  BookSelectors,
  BookActionFunctions,
} from '../../data-layer/redux-services/books';

const mapStateToProps = state => ({
  booksLoading: BookSelectors.isLoading(state),
  booksSearchList: BookSelectors.booksSearchList(state),
  booksSearchListError: BookSelectors.booksSearchListError(state),
});

const mapDispatchToProps = {
  searchForBooksByTitle: BookActionFunctions.bookSearchByTitle,
};

export const BookCollectionConnectServices = connect(
  mapStateToProps,
  mapDispatchToProps,
);
