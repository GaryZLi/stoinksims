import { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { getUserInfo } from '../../services/user';
import { 
    updateLoading,
    updateUserInfo,
} from '../../redux/actions';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',

        backgroundColor: 'blue'
    },
});

const Home = ({
    uid,
    firstName,
    lastName,
    updateLoading,
    updateUserInfo,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}>
                {uid}
            </div>
        </div>
    );
};

const mapStateToProps = ({
    uid,
    firstName,
    lastName,
}) => ({
    uid,
    firstName,
    lastName,
});

const mapDispatchToProps = {
    updateLoading,
    updateUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);