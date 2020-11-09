import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // margin: 'auto',
        maxHeight: '70%',
        // marginTop: 50,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        height: '100%',
        justifyContent: 'space-evenly'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const Table = ({
    tableTitle,
    rows,
    columns,
    width,
    filterable,
    styles,
}) => {
    const classes = useStyles();
    const [filter, setFilter] = useState('');

    return (
        <Paper
            className={classes.root}
            elevation={15}
            style={{width, ...styles}}
        >
            <Toolbar className={classes.top}>
                <Typography variant="h5">
                    {tableTitle}
                </Typography>
                {filterable && <TextField label='Filter Ticker' onChange={e => setFilter(e.target.value)} />}
            </Toolbar>
            <TableContainer className={classes.container}>
                <MuiTable stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, id) => (
                                <TableCell
                                    key={id}
                                    style={{ minWidth: column.minWidth }}
                                    align={column.align}
                                >
                                    {column.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .filter(row => filter.length ? row.symbol.toLowerCase().includes(filter.toLowerCase()) : true)
                            .map((row, id) => {
                                return (
                                    <TableRow key={id}>
                                        {columns
                                            .map((column, id) => (
                                                <TableCell
                                                    key={id}
                                                    align={column.align}
                                                >
                                                    {column.format(row[column.label])}
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </Paper>
    );
}


export default Table;
