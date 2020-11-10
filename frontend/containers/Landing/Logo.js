import { makeStyles } from '@material-ui/styles';

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
        backgroundImage: 'none'
    }
});

const Logo = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <img 
                className={classes.logo}
                src='/money.png' 
                alt='logo'
            />
        </div>
    );
};

export default Logo;