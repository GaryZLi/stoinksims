import { makeStyles } from '@material-ui/styles';
import Pin from './Pin';

const useStyles = makeStyles({
    root: {
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

const Gauge = ({
    deg,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.inner}/>
            <Pin deg={deg}/>      
        </div>
    );
};

export default Gauge;