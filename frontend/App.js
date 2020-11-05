import {
    useEffect, 
    useState,
} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Loading from './containers/Loading';
import Landing from './containers/Landing';
import SidePanel from './containers/SidePanel';
import { isLoggedIn } from './services/auth';
import { updateUserLoginState } from './redux/actions';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
    },
    container: {
        // height: '100%',
        // width: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const App = ({
    Component,
    pageProps,
    uid,
    updateUserLoginState,
}) => {
    const [initialRender, setInitialRender] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        isLoggedIn()
        .then(results => {
            updateUserLoginState(results);
            setInitialRender(false);
        })
        .catch(err => {
            setInitialRender(false);
            const status = err.response;
            
            // TODO handle the status errors
        });

    }, []);

    if (initialRender) return <></>;
    
    if (uid) {
        return (        
            <div className={classes.root}>
                <Loading />
                <SidePanel/>
                <div className={classes.container}>
                    <Component {...pageProps} />
                </div>
            </div>
        );
    }
    else {
        return <Landing/>
    }
};

const mapStateToProps = ({
    loading,
    uid,
}) => ({
    loading,
    uid,
});

const mapDispatchToProps = {
    updateUserLoginState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


