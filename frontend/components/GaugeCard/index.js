import { makeStyles } from '@material-ui/styles';
import {
    Typography,
} from '@material-ui/core';
import Gauge from '../Gauge';

const useStyles = makeStyles({
    root: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        marginBottom: 10,
    },
    outer: {
        height: 100,
        width: 200,
        borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
        background: 'linear-gradient(to right, red 0%, yellow 30%, green 100%)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'relative',
    },
    inner: {
        height: 70,
        width: 140,
        backgroundColor: 'white',
        borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
        position: 'absolute',
    },
});

const GaugeCard = ({
    deg,
    heading,
}) => {
    const classes = useStyles();

    return (
        <div 
            className={classes.root}
        >
            <Typography className={classes.heading}>
                {heading}
            </Typography>
            <Gauge deg={deg}/>
        </div>
    );
};

export default GaugeCard;