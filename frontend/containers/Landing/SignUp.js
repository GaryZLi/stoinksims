import { useState } from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    updateLandingState,
    updateLoading,
    updateUserLoginState,
} from '../../redux/actions';
import { signUp } from '../../services/auth';

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
        justifyContent: 'space-evenly',
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

const SignUp = ({
    loading,
    updateLandingState,
    updateUserLoginState,
}) => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSignUp = e => {
        if (!firstName.length || !lastName.length || !email.length || !password.length) return setErrorMsg('Please enter all the fields!');

        if (loading) return;

        updateLoading(true);

        signUp(firstName, lastName, email, password)
        .then(results => {
            updateUserLoginState(results);
            updateLoading(false);
            Router.push('/');
        })
        .catch(err => {
            console.log(err);
            updateLoading(false);
        });
    };

    return (
        <div className={classes.root}>
            <TextField
                className={classes.field}
                label='First Name*'
                variant='outlined'
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                className={classes.field}
                label='Last Name*'
                variant='outlined'
                onChange={e => setLastName(e.target.value)}
            />
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
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={handleSignUp}
            >
                Sign Up
            </Button>
            <div className={classes.actionFieldContainer}>
                <div className={classes.errorMsg}>
                    {errorMsg}
                </div>
                <div 
                    className={classes.actionField}
                    onClick={() => updateLandingState('Sign In')}
                >
                    Sign In
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({loading}) => ({loading});

const mapDispatchToProps = {
    updateLandingState,
    updateUserLoginState,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);