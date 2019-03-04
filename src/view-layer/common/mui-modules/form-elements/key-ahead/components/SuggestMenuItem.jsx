import React, { PureComponent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

class SuggestMenuItem extends PureComponent {
  render() {
    const { isHighlighted, item } = this.props;
    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          <strong key={String(item.keyIndex)} style={{ fontWeight: 300 }}>
            {item.label}
          </strong>
        </div>
      </MenuItem>
    );
  }
}

SuggestMenuItem.propTypes = {
  isHighlighted: PropTypes.shape({ isHighlighted: PropTypes.bool }),
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    keyIndex: PropTypes.string.isRequired,
  }),
};
