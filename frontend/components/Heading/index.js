import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        boxShadow: '0px -4px 5px -2px rgba(0,0,0,0.2), 0px -7px 10px 1px rgba(0,0,0,0.14), 0px -2px 16px 1px rgba(0,0,0,0.12)',
    },
});

const Heading = ({
    headingTitle
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                {headingTitle}
            </div>
        </div>
    );
};

export default Heading;