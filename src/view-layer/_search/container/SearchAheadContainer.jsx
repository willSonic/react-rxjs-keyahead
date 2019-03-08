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
      openPopper: false,
      openBasedOnProps: false,
      queryString:'',
      anchorEl: null,
    };
    this.onSearch$ = new Subject().pipe(debounceTime(100));
  }

  static getDerivedStateFromProps(props, state) {
    const { booksSearchList } = props;
    const { openBasedOnProps } = state;
    if (!openBasedOnProps && booksSearchList && booksSearchList.size > 0) {
      return {
        openBasedOnProps: true,
        openPopper: true,
      };
    } else if (booksSearchList && booksSearchList.size === 0) {
      return {
        openBasedOnProps: false,
        openPopper: false,
      };
    } else {
      return null;
    }
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

  handleClose = () => {
    if (this.state.openPopper) {
      this.setState({ openPopper: false });
    }
  };

  onItemSelected = item => {
    this.handleClose();
    console.log(' onInputChange ,item=', item);
  };

  onInputChange = event => {
    const { booksSearchList } = this.props;
    const { queryString } = this.state;
    if (!event.target.value && (booksSearchList && booksSearchList.size > 0)) {
      console.log('  booksSearchList.size =',booksSearchList.size)
      this.setState({ openPopper: true });
    } else if (event.target.value !== queryString) {
      if (!this.state.anchorEl) {
        this.setState({ anchorEl: event.currentTarget });
      }
      this.setState({ queryString: event.target.value });
      console.log('  event.target.value ', event.target.value)
      this.onSearch$.next(event.target.value);
    }
  };

  renderSuggestionItems = item => {
    return (
      <SuggestMenuItem
        item={{ label: item.title, id: String(item.id) }}
        key={String(item.id)}
        handleSelect={this.onItemSelected}
      />
    );
  };

  render() {
    const { booksSearchList, booksLoading } = this.props;
    const { openPopper, anchorEl } = this.state;
    return (
      <div className="search__container-input">
        <SuggestInputText
          idValue="ws-suggest-input"
          labelValue="Book Finder"
          helperValue="Search by Title"
          handleChange={this.onInputChange}
          suggestionLoading={booksLoading}
        />
        {anchorEl && (
          <SuggestPopper
            anchorElement={anchorEl}
            onHandleClickAway={this.handleClose}
            open={openPopper}
          >
            {booksSearchList &&
              booksSearchList.map(item => this.renderSuggestionItems(item))}
          </SuggestPopper>
        )}
      </div>
    );
  }
}

SearchAheadContainer.propTypes = {
  booksLoading: PropTypes.bool,
  booksSearchList: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line
  booksSearchListError: PropTypes.object,
  searchForBooksByTitle: PropTypes.shape({
    searchForBooksByTitle: PropTypes.func.isRequired,
  }),
};

export default SearchAheadContainer;
