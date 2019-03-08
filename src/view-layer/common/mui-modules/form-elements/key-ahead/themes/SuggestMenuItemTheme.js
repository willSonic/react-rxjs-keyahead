import { createMuiTheme, createStyles } from '@material-ui/core';

const SuggestMenuItemTheme = createMuiTheme({
  overrides: {
    MuiMenuItem: createStyles({
      root: {
        '&&:hover': {
          backgroundColor: '#4fc3f7',
          '& *': {
            color: 'white',
          },
          '&&:selected': {
            '& *': {
              color: 'orange',
            },
          },
        },
      },
    }),
  },
});

export default SuggestMenuItemTheme;
