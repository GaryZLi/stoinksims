import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    pin: {
        width: 0,
        height: 0, 
        borderLeft: '2px solid transparent',
        borderRight: '2px solid transparent',
        borderBottom: '100px solid #007bff',
        zIndex: 9,
        transformOrigin: 'bottom',
        position: 'absolute',
        bottom: 0,
        transition: 'all 2.5s ease-out',
    },
    ball: {
        position: 'absolute',
        bottom: -4,
        left: -4,
        height: 12,
        width: 12,
        borderRadius: '50%',
        backgroundColor: '#007bff',
        zIndex: 9,
    }
});

const Pin = ({
    deg,
}) => {
    const classes = useStyles();
    // const deg = 
    // // ((def? def : 0) + 10000) * 0.00163636363636363636363636363636 - 90;
    // def? -34 : -90;

    return (
        <div className={classes.root}>
            <div className={classes.pin}
                style={{
                    transform: `rotateZ(${deg}deg)`,
                }}
            />
            <div className={classes.ball}/>
        </div>
    );
};

export default Pin;