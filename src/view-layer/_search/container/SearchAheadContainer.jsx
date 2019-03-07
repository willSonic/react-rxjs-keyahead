import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import SuggestInputText from '../../common/mui-modules/form-elements/key-ahead/components/SuggestInputText';
import SuggestMenuItem from '../../common/mui-modules/form-elements/key-ahead/components/SuggestMenuItem';
import SuggestPopper from '../../common/mui-modules/form-elements/key-ahead/components/SuggestPopper';
import { BookCollectionConnectServices } from '../../../business-layer/connected-services/BooksConnectService';

@BookCollectionConnectServices
class SearchAheadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
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
    this.onSearch$.next(e.target.value);
  };

  renderSuggestionItems = item => {
    console.log('SuggestMenuItem item.title --', item.title);
    console.log('SuggestMenuItem item.id --', item.id);
    return <SuggestMenuItem item={{ label: item.title, keyIndex: item.id }} />;
  };

  render() {
    const { booksSearchList } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className="search__container-input">
        <SuggestInputText
          idValue="ws-suggest-input"
          labelValue="Book Finder"
          helperValue="Search by Title"
          inputRef={node => this.setState({ anchorEl: node })}
          handleChange={this.onInputChange}
        />
        <SuggestPopper anchorEl={anchorEl}>
          {booksSearchList.size > 0 &&
            booksSearchList.map(item => this.renderSuggestionItems(item))}
        </SuggestPopper>
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
