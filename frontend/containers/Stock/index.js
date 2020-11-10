import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import Transaction from './Transaction';
import CompanyInfo from './CompanyInfo';

const useStyles = makeStyles({
    root: {
        width: '100%',
        minWidth: 900,
        display: 'flex',
        paddingTop: 100,
        // alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        position: 'relative',
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
        transition: 'all 1s ease-out',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 100,

        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        zIndex: 100,
        overflow: 'auto',

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
                    // marginRight: sidePanelOpened
                        // ? 250
                        // : 64,
                }}
            >
                {chartType === 'Price'
                    ? <LineChart range={65} />
                    : <BarChart range={65} />
                }
                <CompanyInfo/>
            </div>
            <Transaction
                style={{
                    position: 'sticky',
                    top: 0,
                }}
                symbol={stockInfo.symbol}
                sidePanelOpened={sidePanelOpened}
                price={stockInfo.close}
                shares={portfolio[stockInfo.symbol]}
            />
        </div>
    );
};

const mapStateToProps = ({
    stockInfo,
    chartType,
    sidePanelOpened,
    portfolio,
}) => ({
    stockInfo,
    chartType,
    sidePanelOpened,
    portfolio,
});

export default connect(mapStateToProps)(Stock);