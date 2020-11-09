import { makeStyles } from '@material-ui/styles';
import {
    Paper,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: 222,
    },
    heading: {
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
    },
});

const Card = ({
    heading,
    Component,
    className,
}) => {
    const classes = useStyles();

    return (
        <Paper 
            className={className? [classes.root, className].join(' ') : classes.root}
            elevation={7}
        >
            <Typography className={classes.heading}>
                {heading}
            </Typography>
            {Component}
        </Paper>
    );
};

export default Card;