import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Table from '../../components/Table';
import Content from './Content';
import { useEffect } from 'react';
import { getUserWorth } from '../../services/user';
import { 
    updateTotalStockWorth,
    updateStockPrices,
    updateInitialRender,
} from '../../redux/actions';
import Modal from './Modal';

const useStyles = makeStyles({
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        overflow: 'auto',
        padding: '50px 20px',
        position: 'relative',
        minWidth: 1200,
    },
});

const stocksColumns = [
    {
        label: 'symbol',
        name: 'Symbol',
        align: 'left',
        format: e => e,
    },
    {
        label: 'shares',
        name: 'Shares',
        align: 'center',
        format: e => e.toLocaleString(),
    },
];

const watchListColumns = [
    {
        label: 'symbol',
        name: 'Symbol',
        align: 'left',
        format: e => e,
    },
    {
        label: 'owned',
        name: 'Owned',
        align: 'center',
        format: e => e ? 'Yes' : 'No',
    },
];

const Home = ({
    firstName,
    portfolio,
    watchList,
    initialRender,
    updateTotalStockWorth,
    updateStockPrices,
    updateInitialRender,
}) => {
    const classes = useStyles();
    const stockRows = [];
    const watchListRows = [];

    useEffect(() => {
        const stocks = [];

        for (const stock in portfolio) {
            stocks.push(stock);
        }

        getUserWorth(stocks)
            .then(res => {
                updateStockPrices(res);

                let totalStockWorth = 0;

                for (const stock in res) {
                    totalStockWorth += portfolio[stock] * res[stock];
                }

                updateTotalStockWorth(totalStockWorth);
            })
            .catch(err => {

                const status = err.response;

                // TODO handle the status errors

                if (status === 401) {
                    updateUserLoginState(false);
                }
            });

    }, [portfolio]);

    for (const symbol in portfolio) {
        stockRows.push({
            symbol,
            shares: portfolio[symbol],
        });
    }

    for (const item of watchList) {
        watchListRows.push({
            symbol: item.symbol,
            owned: portfolio[item.symbol],
        });
    }

    return (
        <div className={classes.root}>
            {initialRender && <Modal firstName={firstName} setModal={updateInitialRender}/>}
            <Table
                tableTitle='Stocks'
                columns={stocksColumns}
                rows={stockRows}
                width={200}
                styles={{
                    position: 'sticky',
                    top: 0,
                    marginRight: 10,
                }}
            />
            <Content />
            <Table
                tableTitle='Watchlist'
                columns={watchListColumns}
                rows={watchListRows}
                width={200}
                styles={{
                    position: 'sticky',
                    top: 0,
                    marginLeft: 10,
                }}
            />
        </div>

    );
};

const states = ({
    sidePanelOpened,
    portfolio,
    watchList,
    firstName,
    initialRender,
}) => ({
    sidePanelOpened,
    portfolio,
    watchList,
    firstName,
    initialRender,
});

const dispatch = {
    updateTotalStockWorth,
    updateStockPrices,
    updateInitialRender,
};

export default connect(states, dispatch)(Home);