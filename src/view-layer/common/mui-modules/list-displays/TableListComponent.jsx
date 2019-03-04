import React, { PureComponent, Children, cloneElement } from 'react';
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
    const { classes, content, orderBy, direction, children } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {/* Dynamic generation of the header cells from the children */}
              {Children.map(children, column => (
                <TableCell
                  key={column.props.name}
                  sortDirection={
                    orderBy === column.props.name ? direction : false
                  }
                >
                  {/* Clone the child, adding an intent prop to the props it already has */}
                  {cloneElement(column, { intent: 'header' })}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Dynamic generation of the cells from the children */}
            {content.map(item => (
              <TableRow key={item.id}>
                {Children.map(children, column => (
                  <TableCell
                    key={column.props.name}
                    numeric={column.props.isNumeric}
                  >
                    {/* Clone the child, adding intent and value props to the props it already has */}
                    {cloneElement(column, {
                      intent: 'cell',
                      value: item[column.props.name],
                    })}
                  </TableCell>
                ))}
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
  children: PropTypes.objectOf(PropTypes.array.isRequired),
  orderBy: PropTypes.shape({ orderBy: PropTypes.string }),
  direction: PropTypes.shape({ direction: PropTypes.string }),
  content: PropTypes.shape({ content: PropTypes.array.isRequired }),
};

export default withStyles(styles)(TableListComponent);
