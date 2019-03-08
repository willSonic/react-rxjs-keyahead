import React, { PureComponent } from 'react';
import SearchAheadContainer from '../container/SearchAheadContainer';

// eslint-disable-next-line
class SearchScene extends PureComponent {
  render() {
    return (
      <div className="search__container">
        <SearchAheadContainer />
      </div>
    );
  }
}
export default SearchScene;
