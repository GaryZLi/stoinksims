import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Paper,
    Divider,
    List,
    ListItem,
    Button,
    TextField,
} from '@material-ui/core';
import {
    updateLoading,
    updateBuyingPower,
    updateShares,
} from '../../redux/actions';
import { 
    buyShares,
} from '../../services/stock';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: 250,
        margin: '100px auto 0px auto',
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        display: 'flex',
        width: '100%',
    },
    listItem: {
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 20,
    },
    shareField: {
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center'
    },
    fields: {
        paddingTop: 10,
    },
    textField: {
        width: '50%',
    },
    msg: {
        width: '100%',
        height: 30,
        textAlign: 'center',
        marginTop: 10,
    }
});

const Transaction = ({
    uid,
    symbol,
    price,
    shares,
    buyingPower,
    updateLoading,
    updateBuyingPower,
    updateShares,
}) => {
    const classes = useStyles();
    const [state, setState] = useState('Buy');
    const [shareInput, setShareInput] = useState('');
    const [msg, setMsg] = useState({
        msg: '',
        color: '',
    });

    const handleClick = () => {
        if (!shareInput.length) return;
        console.log('herah')
        if (state === 'Sell' && (shareInput > shares || !shares)) {
            return setMsg('Not enough shares!');
        }
        else if (state === 'Buy') {
            updateLoading(true);

            buyShares(uid, symbol, shareInput)
            .then(res => {
                updateLoading(false);
                updateBuyingPower(res.buyingPower);
                updateShares(symbol, res.shares);
                setMsg({
                    msg: res.msg,
                    color: 'green',
                });
            })
            .catch(err => {
                updateLoading(false);

                if (err.response) {
                    setMsg({
                        msg: err.response.data,
                        color: 'red',
                    });
                }
            });
        }
    };

    const changeState = state => {
        setMsg(undefined);
        setState(state);
    };

    return (
        <Paper
            className={classes.root}
            elevation={7}
        >
            <List className={classes.heading}>
                <ListItem
                    className={classes.listItem}
                    button
                    style={{
                        color: state === 'Buy'
                            ? 'blue'
                            : 'black'
                    }}
                    onClick={() => changeState('Buy')}
                >
                    Buy {symbol}
                </ListItem>
                <Divider orientation='vertical' flexItem />
                <ListItem
                    className={classes.listItem}
                    button
                    style={{
                        color: state === 'Sell'
                            ? 'blue'
                            : 'black'
                    }}
                    onClick={() => changeState('Sell')}
                >
                    Sell {symbol}
                </ListItem>
            </List>
            <Divider />
            <div className={classes.container}>
                <div className={classes.fields}>
                    Buying power: ${buyingPower? buyingPower.toLocaleString() : 0}
                </div>
                <div className={classes.fields}>
                    Current: {shares? shares.toLocaleString() : 0} {symbol} shares
                </div>
                <div className={classes.fields}>
                    {symbol} Price: ${price?.toLocaleString()}
                </div>
                <div className={classes.shareField}>
                    <div style={{
                        paddingTop: 3,
                        paddingRight: 5,
                    }}>
                        Shares
                    </div> 
                    <TextField
                        className={classes.textField}
                        value={shareInput}
                        onChange={e => {
                            const val = e.target.value.replace(/[^0-9\.]/g, '');
                            setShareInput(val);
                        }}
                    />
                </div>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleClick}
                >
                    {state}
                </Button>
                {msg.msg && (
                    <div 
                        className={classes.msg}
                        style={{
                            color: msg.color,
                        }}
                    >
                        {msg.msg}
                    </div>
                )}
            </div>
        </Paper>
    );
};

const mapStateToProps = ({
    buyingPower,
    uid,
}) => ({
    buyingPower,
    uid,
});

const mapDispatchToProps = {
    updateLoading,
    updateBuyingPower,
    updateShares,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);