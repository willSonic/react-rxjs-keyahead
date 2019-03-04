import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: '61px',
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
    } = this.props;
    return (
      <TextField
        id={idValue || 'suggest-input-text'}
        label={labelValue}
        style={{ margin: 8 }}
        placeholder={pHolderValue}
        helperText={helperValue}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: { doShrink },
        }}
        onChange={handleChange}
      />
    );
  }
}

SuggestInputText.propTypes = {
  idValue: PropTypes.shape({ idValue: PropTypes.string }),
  labelValue: PropTypes.shape({ labelValue: PropTypes.string }),
  pHolderValue: PropTypes.shape({ pHolderValue: PropTypes.string }),
  helperValue: PropTypes.shape({ helperValue: PropTypes.string }),
  doShrink: PropTypes.shape({ class: PropTypes.bool }),
  handleChange: PropTypes.shape({ class: PropTypes.func.isRequired }),
};

export default withStyles(styles)(SuggestInputText);
