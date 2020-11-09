import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Table from '../../components/Table';
import Content from './Content';
import { useEffect } from 'react';
import { getUserWorth } from '../../services/user';
import { 
    updateTotalStockWorth,
    updateStockPrices,
} from '../../redux/actions';

const useStyles = makeStyles({
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        overflow: 'auto',
        padding: '100px 20px',
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
        label: 'shares',
        name: 'Owned',
        align: 'center',
        format: e => e ? 'Yes' : 'No',
    },
];

const Home = ({
    sidePanelOpened,
    portfolio,
    updateTotalStockWorth,
    updateStockPrices,
}) => {
    const classes = useStyles();
    const rows = [];

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
            .catch(err => console.log(err));

    }, [portfolio]);

    for (const symbol in portfolio) {
        rows.push({
            symbol,
            shares: portfolio[symbol],
        });
    }

    return (
        <div className={classes.root}>
            <Table
                tableTitle='Stocks'
                columns={stocksColumns}
                rows={rows}
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
                rows={[]}
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
}) => ({
    sidePanelOpened,
    portfolio,
});

const dispatch = {
    updateTotalStockWorth,
    updateStockPrices,
};

export default connect(states, dispatch)(Home);