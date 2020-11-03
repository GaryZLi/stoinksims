import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '30%',
        backgroundColor: 'red',
    },
});

const SidePanel = ({

}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            SidePanel
        </div>
    );
};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(SidePanel);