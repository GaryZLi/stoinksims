import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        padding: 5,
    },
    title: {
        fontWeight: 500,
        color: 'black',
    }
});

const CompanyInfoCard = ({
    title,
    text,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                {title}
            </div>
            <div>
                {text.toLocaleString()}
            </div>
        </div>
    );
};

export default CompanyInfoCard;