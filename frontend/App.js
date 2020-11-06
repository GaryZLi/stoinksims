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
import {
    updateLoading,
    updateUserInfo,
    updateUserLoginState,
    updatePortfolio,
} from './redux/actions';
import {
    getUserInfo,
    getUserPortfolio,
} from './services/user';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
    },
    container: {
        // flex: 1,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});

const App = ({
    Component,
    pageProps,
    uid,
    updateLoading,
    updateUserInfo,
    updateUserLoginState,
    updatePortfolio,
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

    useEffect(() => {
        if (uid) {
            updateLoading(true);

            getUserInfo(uid)
                .then(result => {
                    updateUserInfo(result);
                    updateLoading(false);
                })
                .catch(err => {
                    updateLoading(false);
                })

            getUserPortfolio(uid)
            .then(result => {
                updateLoading(false);
                updatePortfolio(result);
            })
            .catch(err => {
                updateLoading(false);
            })
        }
    }, [uid]);

    if (initialRender) return <></>;

    if (uid) {
        return (
            <div className={classes.root}>
                <Loading />
                <SidePanel />
                <Component {...pageProps} />
                {/* <div className={classes.container}>
                </div> */}
            </div>
        );
    }
    else {
        return <Landing />
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
    updateLoading,
    updateUserInfo,
    updatePortfolio,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


