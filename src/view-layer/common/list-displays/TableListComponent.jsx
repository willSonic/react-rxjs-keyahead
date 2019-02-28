import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class TableListComponent extends PureComponent {

  render() {
    const { classes, tableMetaData, content } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {tableMetaData.map((column, index) => (
                <TableCell key={`${index + 1}'-tr'`}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((item, index) => (
              <TableRow key={`${index + 1}'-tr'`}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TableListComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object.isRequired),
  tableMetaData: PropTypes.shape({ tableMetaData: PropTypes.array.isRequired }),
  content: PropTypes.shape({ content: PropTypes.array.isRequired }),
};

export default withStyles(styles)(TableListComponent);
