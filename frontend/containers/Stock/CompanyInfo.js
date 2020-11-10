import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import CompanyInfoCard from '../../components/CompanyInfoCard';

const useStyles = makeStyles({
    root: {
        marginTop: 50,
    },
    heading: {
        padding: 20,
        fontSize: 30,
    },
    companyInfo: {
        padding: '0 10px 10px 10px',
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
});

const list = [
    {
        title: 'Company Name',
        text: 'companyName',
    },
    {
        title: 'Exchange',
        text: 'exchange',
    },
    {
        title: 'Website',
        text: 'website',
    },
    {
        title: 'CEO',
        text: 'CEO',
    },
    {
        title: 'Number of Employees',
        text: 'employees',
    },
    {
        title: 'State',
        text: 'state',
    },
    {
        title: 'Volume',
        text: 'volume',
    },
    {
        title: 'Market Cap',
        text: 'marketCap',
    },
    {
        title: 'PE Ratio',
        text: 'peRatio',
    },
    {
        title: '52 Week High',
        text: 'week52High',
    },
    {
        title: '52 Week Low',
        text: 'week52Low',
    },
    {
        title: '52 Week Change',
        text: 'week52change',
    },
    {
        title: '200 Day Simple Moving Avg',
        text: 'day200MovingAvg',
    },
    {
        title: 'Next Earning Date',
        text: 'nextEarningsDate',
    },
]

const CompanyInfo = ({
    stockInfo,
}) => {
    const classes = useStyles();
    console.log(stockInfo?.description)

    return (
        <Paper
            className={classes.root}
            elevation={7}
        >
            <Typography className={classes.heading}>
                Company Info
            </Typography>
            <div className={classes.companyInfo}>
                {list.map((item, id) => (
                    <CompanyInfoCard
                        key={id}
                        title={item.title}
                        text={stockInfo[item.text]}
                    />
                ))}
                <CompanyInfoCard
                    title='Description'
                    text={stockInfo.description}
                />
            </div>
        </Paper>
    );
};

const states = ({stockInfo}) => ({stockInfo});

export default connect(states)(CompanyInfo);