import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Logo from './Logo';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(250,0,0,0.5),transparent)',
        backgroundColor: '#115bf0',
    },
    loginContainer: {
        width: 300,
    }
});

const landingStates = {
    'Sign In': <SignIn/>,
    'Sign Up': <SignUp/>,
    'Forgot Password': <ForgotPassword/>,
};

const Login = ({
    landingState,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper
                className={classes.loginContainer}
                // elevation={24}    
            >
                <Logo/>
                {landingStates[landingState]}
            </Paper>
        </div>
    );
};

const mapStateToProps = ({landingState}) => ({landingState});

export default connect(mapStateToProps)(Login);