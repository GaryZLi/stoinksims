import { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    
} from '@material-ui/core';
import Table from '../../components/Table';
import { getUserTransactions } from '../../services/user';
import { 
    updateTransactions,
    updateLoading,
 } from '../../redux/actions';

const columns = [
    {
        label: 'date',
        name: 'Date',
        align: 'left',
        format: e => new Date(e).toLocaleDateString(),
    },
    {
        label: 'action',
        name: 'Action',
        align: 'center',
        format: e => e[0].toUpperCase() + e.substring(1),
    },
    {
        label: 'symbol',
        name: 'Ticker',
        align: 'center',
        format: e => e,
    },
    {
        label: 'shares',
        name: 'Shares',
        align: 'center',
        format: e => e.toLocaleString(),
    },
    {
        label: 'price',
        name: 'Price',
        align: 'center',
        format: e => e.toLocaleString(),
    },
];

const useStyles = makeStyles({
    root: {
        height: 'calc(100% - 100px)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 100,
        transition: 'all 1s ease-out',
        paddingLeft: 20,
    },
});

const Transactions = ({
    uid,
    transactions,
    sidePanelOpened,
    updateTransactions,
    updateLoading,
}) => {
    const classes = useStyles();

    useEffect(() => {
        // updateLoading(true);

        getUserTransactions(uid)
        .then(transactions => {
            // updateLoading(false);
            updateTransactions(transactions);
        })
        .catch(err => {
            // updateLoading(false);
            console.log(err, '-x-x-<<')
        })
    }, []);

    return (
        <div 
            className={classes.root}
            style={{
                marginRight: sidePanelOpened
                    ? 270
                    : 84,
            }}
        >
            <Table
                tableTitle='Transactions'
                rows={transactions}
                columns={columns}
                width={800}
                filterable
            />
        </div>
    );
};

const states = ({
    uid,
    transactions,
    sidePanelOpened,
}) => ({
    uid,
    transactions,
    sidePanelOpened,
});

const dispatch = {
    updateTransactions,
    updateLoading,
};

export default connect(states, dispatch)(Transactions);