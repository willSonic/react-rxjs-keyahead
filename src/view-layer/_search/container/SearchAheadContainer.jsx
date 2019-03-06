import React, { Component } from 'react';
import SuggestInputText from '../../common/mui-modules/form-elements/key-ahead/components/SuggestInputText';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export default class SearchAheadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      debounced: '',
    };
    this.onSearch$ = new Subject().pipe(debounceTime(300));
  }

  componentDidMount() {
    this.subscription = this.onSearch$.subscribe(debounced =>
      this.setState({ debounced }),
    );
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onInputChange = e => {
    const search = e.target.value;
    this.setState({ search });
    this.onSearch$.next(search);
  };

  render() {
    const { search, debounced } = this.state;
    return (
      <div  className="search__container-input">
        <SuggestInputText
          idValue="ws-suggest-input"
          labelValue="Book Finder"
          helperValue="Search by Title"
          value={search}
          handleChange={this.onInputChange}
        />
        <div> debounced value:{debounced} </div>
      </div>
    );
  }
}
