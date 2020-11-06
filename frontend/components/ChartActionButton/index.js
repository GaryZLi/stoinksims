import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
} from '@material-ui/core';
import { updateChartType } from '../../redux/actions';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        right: 10,
    },
})

const types = {
    Price: 'Volume',
    Volume: 'Price',
};

const ChartActionButton = ({
    chartType,
    updateChartType,
}) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.root}
            variant='contained'
            color='primary'
            onClick={() => updateChartType(types[chartType])}
        >
            {types[chartType]}
        </Button>
    );
};

const mapStateToProps = ({chartType}) => ({chartType});

const mapDispatchToProps = {
    updateChartType
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartActionButton);