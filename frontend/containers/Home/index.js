// import { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
// import { 
//     updateLoading,
//     updateUserInfo,
// } from '../../redux/actions';
// import {
//     getUserInfo,
// } from '../../services/user';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
    },
});

const Home = ({
    uid,
    firstName,
    lastName,
    buyingPower,
}) => {
    const classes = useStyles();

    // useEffect(() => {
        
    // }, []);

    return (
        <div className={classes.root}>
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
    buyingPower,
}) => ({
    uid,
    firstName,
    lastName,
    buyingPower,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);