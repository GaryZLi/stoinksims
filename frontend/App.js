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
    updateWatchList,
} from './redux/actions';
import {
    getUserInfo,
    getUserPortfolio,
    getUserWatchList,
} from './services/user';

const useStyles = makeStyles({
    root: {
        height: '100%',
        // width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',

        backgroundColor: '#dbecff',

    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
});

const App = ({
    Component,
    pageProps,
    uid,
    loading,
    updateLoading,
    updateUserInfo,
    updateUserLoginState,
    updatePortfolio,
    updateWatchList,
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

                if (status === 401) {
                    updateUserLoginState(false);
                }
            });

    }, []);

    useEffect(() => {
        if (uid?.length) {
            updateLoading(true);

            getUserInfo(uid)
                .then(result => {
                    updateUserInfo(result);
                    updateLoading(false);
                })
                .catch(err => {
                    setInitialRender(false);
                    const status = err.response;

                    // TODO handle the status errors

                    if (status === 401) {
                        updateUserLoginState(false);
                    }
                })

            getUserPortfolio(uid)
                .then(result => {
                    updateLoading(false);
                    updatePortfolio(result);
                })
                .catch(err => {
                    setInitialRender(false);
                    const status = err.response;

                    // TODO handle the status errors

                    if (status === 401) {
                        updateUserLoginState(false);
                    }
                })

            getUserWatchList(uid)
                .then(res => {
                    updateLoading(false);
                    updateWatchList(res);
                })
                .catch(err => {
                    setInitialRender(false);
                    updateLoading(false);
                    const status = err.response;

                    // TODO handle the status errors

                    if (status === 401) {
                        updateUserLoginState(false);
                    }
                });
        }
    }, [uid]);

    if (initialRender) return <></>;

    if (uid?.length) {
        return (
            <div className={classes.root}>
                <SidePanel />
                <div className={classes.content}>
                    {loading
                        ? <Loading />
                        : <Component {...pageProps} />
                    }
                </div>
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
    updateWatchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


