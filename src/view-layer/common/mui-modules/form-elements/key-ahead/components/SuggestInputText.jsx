import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import LinearProgress from '@material-ui/core/LinearProgress';
// https://github.com/mui-org/material-ui/issues/12797
// https://itnext.io/sharing-variables-between-js-and-sass-using-webpack-sass-loader-713f51fa7fa0
// https://github.com/planetflash/sharing_variables_js_sass
const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '50%',
  },
});

class SuggestInputText extends PureComponent {
  render() {
    const {
      idValue,
      labelValue,
      pHolderValue,
      helperValue,
      doShrink,
      handleChange,
      suggestionLoading,
      classes
    } = this.props;
    return (
      <Fragment>
        <TextField
          id={idValue || 'suggest-input-text'}
          label={labelValue}
          style={{ padding: 8 }}
          placeholder={pHolderValue}
          helperText={helperValue}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: doShrink,
          }}
          onFocus={handleChange}
          onChange={handleChange}
        />
        {suggestionLoading && <LinearProgress color="primary" styles={{width:300}} />}
      </Fragment>
    );
  }
}

SuggestInputText.propTypes = {
  classes: PropTypes.object.isRequired,
  idValue: PropTypes.string,
  labelValue: PropTypes.string,
  pHolderValue: PropTypes.string,
  helperValue: PropTypes.string,
  doShrink: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  suggestionLoading: PropTypes.bool,
};

export default withStyles(styles)(SuggestInputText);
