import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
    },
    noStock: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const Stock = ({
    stockInfo,
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
            <BarChart range={65}/>
            <LineChart range={65} dataKey='volume'/>
        </div>
    );
};

const mapStateToProps = ({
    stockInfo,
}) => ({
    stockInfo,
});

export default connect(mapStateToProps)(Stock);