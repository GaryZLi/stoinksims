import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import {
    Paper, 
    Typography,
} from '@material-ui/core';
import Table from '../../components/Table';
import Card from '../../components/Card';
import GaugeCard from '../../components/GaugeCard';

const useStyles = makeStyles({
    root: {
        minWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    intro: {
        padding: 10,
        display: 'inline-block',
    },
    gauge: {
        display: 'flex',        
        marginTop: 10,
        maxHeight: 200,
    },
    container: {
        paddingTop: 30,
        display: 'flex',        
        justifyContent: 'center',
    },
    infoCards: {
        width: '50%',
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    infoCard: {
        margin: '10px 5px 0 5px',
    },
    extra: {
        width: '100%',
        backgroundColor: 'gray',
        opacity: 0.6,
        padding: '100px 0',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        color: 'white',
        fontSize: 40,
    }
});

const Content = ({
    firstName,
    buyingPower,
    totalStockWorth,
    stockPrices,
}) => {
    const classes = useStyles();

    const totalStocks = [];

    for (const stock in stockPrices) {
        totalStocks.push(stock);
    }

    const getOverallGainText = () => {
        if (buyingPower - 10000 < 0) {
            return `Overall gain: -$${buyingPower? (-(buyingPower - 10000)).toLocaleString() : 0}`;
        }
        else {
            return `Overall gain: $${buyingPower? (buyingPower - 10000).toLocaleString() : 0}`;
        }
    };

    const getTodaysEarnings = () => {
        const total = buyingPower + totalStockWorth - 10000;
        
        if (total < 0) {
            return `-$${(-total).toLocaleString()}`;
        }

        return `$${total.toLocaleString()}`;
    };

    return (
        <div className={classes.root}>
            <Paper
                className={classes.intro}
                elevation={7}
            >
                <Typography variant='h5'>
                    Welcome to Stoink Sims, {firstName}!
                </Typography>
                <div>
                    Stoink Sims is a simulator that mocks how the real life stock exchanges work. You can buy or sell any stocks available on the stock exchange.
                </div>
            </Paper>
            <div className={classes.container}>
                <Paper 
                    className={classes.gauge}
                    elevation={7}    
                >
                    <GaugeCard
                        deg={buyingPower? -30 : -90}
                        heading={`Buying Power: $${buyingPower? buyingPower.toLocaleString() : 0}`}
                    />
                    <GaugeCard
                        deg={buyingPower? 0 : -90}
                        heading={getOverallGainText()}
                    />
                </Paper>
                <div className={classes.infoCards}>
                    <Card
                        className={classes.infoCard}
                        heading='Total Worth'
                        Component={<Typography variant='h3'>${(buyingPower + totalStockWorth).toLocaleString()}</Typography>}
                    />
                    <Card
                        className={classes.infoCard}
                        heading="Total Stock Worth"
                        Component={<Typography variant='h3'>${parseFloat((totalStockWorth).toFixed(2)).toLocaleString()}</Typography>}
                    />
                    <Card
                        className={classes.infoCard}
                        heading='Top Earnings'
                        Component={<Typography variant='h3'>${Math.max(buyingPower + totalStockWorth - 10000, 0).toLocaleString()}</Typography>}
                    />
                    <Card
                        className={classes.infoCard}
                        heading="Today's Earnings"
                        Component={<Typography variant='h3'>{getTodaysEarnings()}</Typography>}
                    />
                    <Card
                        className={classes.infoCard}
                        heading="Average Earnings"
                        Component={<Typography variant='h3'>{getTodaysEarnings()}</Typography>}
                    />
                    <Card
                        className={classes.infoCard}
                        heading='Number of stocks owned'
                        Component={<Typography variant='h3'>{totalStocks.length.toLocaleString()}</Typography>}
                    />
                </div>
            </div>
            <div className={classes.extra}>
                <div>
                    MORE ANALYTICS COMING SOON!
                </div>
            </div>
        </div>
    );
};

const states = ({
    firstName,
    buyingPower,
    totalStockWorth,
    stockPrices,
}) => ({
    firstName,
    buyingPower,
    totalStockWorth,
    stockPrices,
});

export default connect(states)(Content);