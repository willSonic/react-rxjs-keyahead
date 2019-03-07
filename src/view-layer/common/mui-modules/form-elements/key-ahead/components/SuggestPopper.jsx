import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SuggestPopperComponent extends PureComponent {
  render() {
    const { idValue, anchorEl, children } = this.props;
    return (
      <Popper
        id={idValue || 'suggest-popper'}
        anchorEl={anchorEl}
        transition
        open={Boolean(children.size > 0)}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper square>{children}</Paper>
          </Fade>
        )}
      </Popper>
    );
  }
}
SuggestPopperComponent.propTypes = {
  idValue: PropTypes.string,
  anchorEl: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

export default withStyles(styles)(SuggestPopperComponent);
