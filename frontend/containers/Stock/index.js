import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import Transaction from './Transaction';

const useStyles = makeStyles({
    root: {
        width: '100%',
        minWidth: 900,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        paddingTop: 100,
        paddingBottom: 100,
        alignItems: 'center',
    },
    noStock: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        width: 700,
        marginLeft: 20,
        transition: 'all 1s ease-out',
    },
    chartContainer: {
        maxWidth: 700,
        width: '100%',
    },
});

const Stock = ({
    stockInfo,
    chartType,
    sidePanelOpened,
    portfolio,
    loading,
}) => {
    const classes = useStyles();

    if (!stockInfo) {
        return (
            <div className={classes.noStock}>
                No Stock Info
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <div
                className={classes.contentContainer}
                style={{
                    marginRight: sidePanelOpened
                        ? 250
                        : 64,
                }}
            >
                {chartType === 'Price'
                    ? <LineChart range={65} />
                    : <BarChart range={65} />
                }
                <Transaction
                    symbol={stockInfo.symbol}
                    sidePanelOpened={sidePanelOpened}
                    price={stockInfo.close}
                    shares={portfolio[stockInfo.symbol]}
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({
    stockInfo,
    chartType,
    sidePanelOpened,
    portfolio,
    loading,
}) => ({
    stockInfo,
    chartType,
    sidePanelOpened,
    portfolio,
    loading,
});

export default connect(mapStateToProps)(Stock);