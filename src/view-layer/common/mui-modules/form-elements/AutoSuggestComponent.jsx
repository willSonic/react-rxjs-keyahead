import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

class AutoSuggestComponent extends React.PureComponent {
  state = {
    single: '',
    popper: '',
    suggestions: [],
  };

  render() {
    const {
      classes,
      currentSuggestions,
      fetchRequestHandler,
      clearRequestHandler,
    } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: currentSuggestions,
      onSuggestionsFetchRequested: fetchRequestHandler,
      onSuggestionsClearRequested: clearRequestHandler,
      getSuggestionValue,
      renderSuggestion,
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            label: 'Label',
            placeholder: 'With Popper',
            value: this.state.popper,
            onChange: this.handleChange('popper'),
            inputRef: node => {
              this.popperNode = node;
            },
            InputLabelProps: {
              shrink: true,
            },
          }}
          theme={{
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
              <Paper
                square
                {...options.containerProps}
                style={{
                  width: this.popperNode ? this.popperNode.clientWidth : null,
                }}
              >
                {options.children}
              </Paper>
            </Popper>
          )}
        />
      </div>
    );
  }
}

AutoSuggestComponent.propTypes = {
  classes: PropTypes.shape({ classes: PropTypes.object.isRequired }),
  suggestions: PropTypes.shape({ suggestions: PropTypes.object.isRequired }),
  fetchRequestHandler: PropTypes.shape({
    fetchRequestHandler: PropTypes.func.isRequired,
  }),
  clearRequestHandler: PropTypes.shape({
    clearRequestHandler: PropTypes.func.isRequired,
  }),
};

export default withStyles(styles)(AutoSuggestComponent);
