import React, { PureComponent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  menuItem: {
    minWidth: 200,
    maxWidth: 300,
    marginLeft: '5%',
    marginRight: '5%',
    '&:focus': {
      color: '#4fc3f7',
    },
  },
  itemTextContainer: {
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

class SuggestMenuItem extends PureComponent {
  render() {
    const { isHighlighted, item, classes, handleSelect } = this.props;
    return (
      <MenuItem
        selected={isHighlighted}
        component="div"
        className={classes.menuItem}
        onClick={() => handleSelect(item)}
      >
        <div className={classes.itemTextContainer}>
          <strong style={{ fontWeight: 300 }}>{item.label}</strong>
        </div>
      </MenuItem>
    );
  }
}

SuggestMenuItem.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
  isHighlighted: PropTypes.bool,
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  handleSelect: PropTypes.func.isRequired,
};

export default withStyles(styles)(SuggestMenuItem);
