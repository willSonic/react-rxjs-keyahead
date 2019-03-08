import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import SuggestMenuItemTheme from '../themes/SuggestMenuItemTheme';

const styles = theme => ({
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class SuggestPopperComponent extends PureComponent {
  render() {
    const {
      idValue,
      open,
      anchorElement,
      children,
      onHandleClickAway,
    } = this.props;
    return (
      <MuiThemeProvider theme={SuggestMenuItemTheme}>
        <Popper
          id={idValue || 'suggest-popper'}
          anchorEl={anchorElement}
          open={open}
          transition
          disablePortal={false}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={onHandleClickAway}>
                  <MenuList>{children}</MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </MuiThemeProvider>
    );
  }
}

SuggestPopperComponent.propTypes = {
  idValue: PropTypes.string,
  open: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  anchorElement: PropTypes.object.isRequired,
  // eslint-disable-next-line
  children: PropTypes.object.isRequired,
  onHandleClickAway: PropTypes.func.isRequired,
};

export default withStyles(styles)(SuggestPopperComponent);
