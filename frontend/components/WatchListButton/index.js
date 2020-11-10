import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
} from '@material-ui/core';
import {
    addToWatchList,
} from '../../services/user';
import {
    updateWatchList,
} from '../../redux/actions';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        left: 10,
    },
})

const WatchListButton = ({
    stock,
    uid,
    watchList,
    updateWatchList
}) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.root}
            variant='contained'
            color='primary'
            disabled={watchList?.find(item => item.symbol === stock) || false}
            onClick={() => {
                addToWatchList(uid, stock)
                .then(() => {
                    const temp = [...watchList];
                    temp.push({symbol: stock})
                    updateWatchList(temp);
                })
                .catch(err => console.log(err));
            }}
        >
            + WatchList
        </Button>
    );
};

const states = ({
    uid,
    watchList,
}) => ({
    uid,
    watchList,
});

const dispatch = {
    updateWatchList
};

export default connect(states, dispatch)(WatchListButton);