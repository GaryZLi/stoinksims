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
    setMsg,
    setTransactionState,
} from '../../redux/actions';
import {
    buyShares,
    askShares,
} from '../../services/stock';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: 250,
        minWidth: 250,
        maxHeight: 270,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 10,
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
    style,
    uid,
    symbol,
    price,
    shares,
    msg,
    transactionState,
    buyingPower,
    updateLoading,
    updateBuyingPower,
    updateShares,
    setMsg,
    setTransactionState,
}) => {
    const classes = useStyles();
    const [shareInput, setShareInput] = useState('');

    const handleClick = () => {
        if (!shareInput.length) return;

        if (transactionState === 'Sell' && (shareInput > shares || !shares)) {
            return setMsg({
                msg: "You don't have enough shares!",
                color: 'red',
            });
        }
        else if (transactionState === 'Buy') {
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
        else if (transactionState === 'Sell') {
            updateLoading(true);

            askShares(uid, symbol, shareInput)
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

    const changeState = transactionState => {
        setMsg({
            msg: '',
            color: '',
        });
        setTransactionState(transactionState);
    };

    return (
        <Paper
            className={classes.root}
            elevation={7}
            style={style}
        >
            <List className={classes.heading}>
                <ListItem
                    className={classes.listItem}
                    button
                    style={{
                        color: transactionState === 'Buy'
                            ? 'blue'
                            : 'black',
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
                        color: transactionState === 'Sell'
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
                    Buying power: ${buyingPower ? buyingPower.toLocaleString() : 0}
                </div>
                <div className={classes.fields}>
                    Current: {shares ? shares.toLocaleString() : 0} {symbol} shares
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
                    {transactionState}
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
    msg,
    transactionState,
}) => ({
    buyingPower,
    uid,
    msg,
    transactionState,
});

const mapDispatchToProps = {
    updateLoading,
    updateBuyingPower,
    updateShares,
    setMsg,
    setTransactionState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);