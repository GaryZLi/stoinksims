import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    updateLandingState,
} from '../../redux/actions';
import { connect } from 'react-redux';

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

const ForgotPassword = ({
    updateLandingState,
}) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleForgotPassword = e => {
        if (!email.length) return setErrorMsg('Please enter email!');
    };

    return (
        <div className={classes.root}>
            <TextField
                className={classes.field}
                label='Email*'
                variant='outlined'
                onChange={e => setEmail(e.target.value)}
            />
            <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={handleForgotPassword}
            >
                Retrieve Password
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
                <div 
                    className={classes.actionField}
                    onClick={() => updateLandingState('Sign Up')}
                >
                    Create an account
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateLandingState,
};

export default connect(null, mapDispatchToProps)(ForgotPassword);