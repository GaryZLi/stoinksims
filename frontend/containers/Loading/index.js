import { makeStyles } from '@material-ui/styles';
import HashLoader from 'react-spinners/HashLoader';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        opacity: 0.5,
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
});

const Loading = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <HashLoader
                size={150}
                loading
                color='#123abc'
            />
        </div>
    );
};


export default Loading;