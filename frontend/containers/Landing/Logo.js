import { makeStyles } from '@material-ui/styles';
// import money from '../../picSrc/money.png';

const useStyles = makeStyles({
    root: {
        height: 110,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 60,
        width: 60,
    }
});

const Logo = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {/* <img 
                className={classes.logo}
                src={money} 
                alt='logo'
            /> */}
        </div>
    );
};

export default Logo;