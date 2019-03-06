import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import SuggestInputText from '../../common/mui-modules/form-elements/key-ahead/components/SuggestInputText';
import { BookCollectionConnectServices } from '../../../business-layer/connected-services/BooksConnectService';

@BookCollectionConnectServices
class SearchAheadContainer extends Component {
  constructor(props) {
    super(props);
    this.onSearch$ = new Subject().pipe(debounceTime(300));
  }

  componentDidMount() {
    const { searchForBooksByTitle } = this.props;
    this.subscription = this.onSearch$.subscribe(query => {
      return searchForBooksByTitle(query);
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onInputChange = e => {
    const searchQuery = e.target.value;
    this.onSearch$.next(searchQuery);
  };

  render() {
    const { booksSearchList } = this.props;
    return (
      <div className="search__container-input">
        <SuggestInputText
          idValue="ws-suggest-input"
          labelValue="Book Finder"
          helperValue="Search by Title"
          handleChange={this.onInputChange}
        />
        <div> debounced value: {booksSearchList.size} </div>
      </div>
    );
  }
}

SearchAheadContainer.propTypes = {
  booksLoading: PropTypes.bool,
  booksSearchList: PropTypes.arrayOf(PropTypes.object),
  booksSearchListError: PropTypes.object,
  searchForBooksByTitle: PropTypes.shape({
    searchForBooksByTitle: PropTypes.func.isRequired,
  }),
};

export default SearchAheadContainer;
