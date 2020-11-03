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
            console.log(err);
            setInitialRender(false);
        });

    }, []);

    if (initialRender) return <></>;
    
    if (uid) {
        return (        
            <div className={classes.root}>
                <Loading />
                <SidePanel/>
                <Component {...pageProps} />
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


