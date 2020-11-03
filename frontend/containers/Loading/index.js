import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'fixed',
        zIndex: 10,
    },
    loading: {

    },
});

const Loading = ({loading}) => {
    if (!loading) return <></>;

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            Loading
        </div>
    );
};

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps)(Loading);