import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        // position: 'absolute',
        // top: '50%', 
        // right: '50%',
        // transform: 'translate(50%,-50%)',
        textTransform: 'uppercase',
        fontFamily: 'verdana',
        fontSize: 100,
        fontWeight: 700,
        color: 'white',
        textShadow: `
            1px 1px 1px #919191,
            1px 2px 1px #919191,
            1px 3px 1px #919191,
            1px 4px 1px #919191,
            1px 5px 1px #919191,
            1px 6px 1px #919191,
            1px 7px 1px #919191,
            1px 8px 1px #919191,
            1px 9px 1px #919191,
            1px 10px 1px #919191,
        1px 18px 6px rgba(16,16,16,0.4),
        1px 22px 10px rgba(16,16,16,0.2),
        1px 25px 35px rgba(16,16,16,0.2),
        1px 30px 60px rgba(16,16,16,0.4)`,
    },
});

const Heading = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Stoink sims
        </div>
    );
};

export default Heading;