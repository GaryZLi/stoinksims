import { useState } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signIn } from '../../services/auth';
import {
    updateLoading,
    updateLandingState,
    updateUserLoginState,
} from '../../redux/actions';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        width: '70%',
        marginTop: 10,
        marginBottom: 10,
    },
    actionFieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    actionField: {
        color: 'blue',
        marginTop: 5,
        marginBottom: 5,

        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
        }
    },
    errorMsg: {
        color: 'red',
    }
})

const SignIn = ({
    loading,
    updateLoading,
    updateLandingState,
    updateUserLoginState,
}) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSignIn = e => {
        if (!email.length || !password.length) return setErrorMsg('Please enter both email and password!');

        if (loading) return;
        
        
        signIn(email, password)
        .then(results => {
            // updateLoading(false);
            updateUserLoginState(results);
            
            
            // Router.push('/');
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div className={classes.root}>
            <TextField
                className={classes.field}
                label='Email*'
                variant='outlined'
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                className={classes.field}
                label='Password*'
                variant='outlined'
                type='password'
                onKeyDown={e => e.key === 'Enter' && handleSignIn()}
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={handleSignIn}
            >
                Sign In
            </Button>
            <div className={classes.actionFieldContainer}>
                <div className={classes.errorMsg}>
                    {errorMsg}
                </div>
                <div 
                    className={classes.actionField}
                    onClick={() => updateLandingState('Sign Up')}
                >
                    Don't have an account?
                </div>
                <div 
                    className={classes.actionField}
                    onClick={() => updateLandingState('Forgot Password')}
                >
                    Forgot password?
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({loading}) => ({loading});

const mapDispatchToProps = {
    updateLoading,
    updateLandingState,
    updateUserLoginState,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);