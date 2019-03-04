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
    const { classes, idValue, anchorEl, children } = this.props;
    return (
      <Popper
        id={idValue || 'suggest-popper'}
        anchorEl={anchorEl}
        transition
        open={Boolean(children.length > 0)}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper square>{options.children}</Paper>
          </Fade>
        )}
      </Popper>
    );
  }
}
SuggestPopperComponent.propTypes = {
  classes: PropTypes.shape({ classes: PropTypes.object.isRequired }),
  idValue: PropTypes.shape({ idValue: PropTypes.string }),
  anchorEl: PropTypes.shape({ anchorEl: PropTypes.object.isRequired }),
  children: PropTypes.shape({ children: PropTypes.array.isRequired }),
};

export default withStyles(styles)(SuggestPopperComponent);