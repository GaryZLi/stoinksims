import { makeStyles } from '@material-ui/styles';
import {
    Paper,
    Typography,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        margin: 'auto',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0.9,
        zIndex: 1000,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
            cursor: 'pointer',
        }
    },
    modal: {
        width: 300,
        backgroundColor: '#EEEEEE',
        padding: '2px 1px',
        borderRadius: 2,

        '&:hover': {
            cursor: 'default',
        }
    },
    heading: {
        backgroundColor: 'white',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        textAlign: 'center',
    },
    message: {
        backgroundColor: 'white',
        marginTop: 3,
        padding: '1px 3px',
    },
    button: {
        marginTop: 5,
    }
});

const Modal = ({
    firstName,
    setModal,
}) => {

    const classes = useStyles();

    return (
        <Paper className={classes.root} onClick={() => setModal()}>
            <div className={classes.modal}>
                <Typography variant='h4'
                    className={classes.heading}
                >
                    Welcome, {firstName}!
                </Typography>
                <Typography 
                    className={classes.message}
                    variant='body1'>
                    Stoink Sims is a simulator that mocks how the real life stock exchanges work. You can buy or sell any stocks available on the stock exchange.
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    onClick={() => setModal()}
                >
                    CLOSE
                </Button>
            </div>
        </Paper>
    );
};

export default Modal;