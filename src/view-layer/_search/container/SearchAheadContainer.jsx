import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import SuggestInputText from '../../common/mui-modules/form-elements/key-ahead/components/SuggestInputText';
import SuggestMenuItem from '../../common/mui-modules/form-elements/key-ahead/components/SuggestMenuItem';
import SuggestPopper from '../../common/mui-modules/form-elements/key-ahead/components/SuggestPopper';
import { BookCollectionConnectServices } from '../../../business-layer/connected-services/BooksConnectService';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

@BookCollectionConnectServices
class SearchAheadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPopper: false,
      openDialog: false,
      openBasedOnProps: false,
      queryString: '',
      anchorEl: null,
    };
    this.onSearch$ = new Subject().pipe(debounceTime(100));
  }

  static getDerivedStateFromProps(props, state) {
    const { booksSearchList, selectedBook } = props;
    const { openBasedOnProps } = state;
    if (!openBasedOnProps && booksSearchList && booksSearchList.size > 0) {
      return {
        openBasedOnProps: true,
        openPopper: true,
      };
    }
    if (booksSearchList && booksSearchList.size === 0) {
      return {
        openBasedOnProps: false,
        openPopper: false,
      };
    }

    if (selectedBook) {
      return {
        openDialog: true,
      };
    }

    return null;
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

  handleDialogClose = () => {
    this.setState({ openDialog: false });
  };

  onItemSelected = item => {
    const { setSelectedBookId } = this.props;
    this.handleClose();
    setSelectedBookId(item.id);
  };

  onInputChange = event => {
    const { queryString } = this.state;
    const newQuery = event.target.value ? event.target.value : undefined;
    if (newQuery && newQuery !== queryString) {
      if (!this.state.anchorEl) {
        this.setState({ anchorEl: event.currentTarget });
      }
      this.setState({ queryString: newQuery });
      this.onSearch$.next(newQuery);
    } else if (this.state.openPopper) {
      this.handleClose();
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
    const { openPopper, anchorEl, openDialog } = this.state;
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
        <Dialog
          open={openDialog}
          onClose={this.handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleDialogClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SearchAheadContainer.propTypes = {
  booksLoading: PropTypes.bool,
  booksSearchList: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line
  booksSearchListError: PropTypes.object,
  searchForBooksByTitle: PropTypes.func,
  setSelectedBookId: PropTypes.func,
  selectedBook: PropTypes.object,
};

export default SearchAheadContainer;
