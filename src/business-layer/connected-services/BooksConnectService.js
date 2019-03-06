import { connect } from 'react-redux';
import {
  BookSelectors,
  BookActionFunctions,
} from '../../data-layer/redux-services/books';

const mapStateToProps = state => ({
  booksLoading: BookSelectors.isLoading(state),
  bookCollection: BookSelectors.bookCollection(state),
  bookCollectionError: BookSelectors.bookCollectionError(state),
});

const mapDispatchToProps = {
  searchForBooksByTitle: BookActionFunctions.bookSearchByTitle,
};

export const BookCollectionConnectServices = connect(
  mapStateToProps,
  mapDispatchToProps,
);
