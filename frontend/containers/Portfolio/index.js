import { makeStyles } from '@material-ui/styles';
import {
    
} from '@material-ui/core';
import Table from '../../components/Table';

const useStyles = makeStyles({
    root: {

    },
});

const columns = [
    {
        label: 'symbol',
        name: 'Symbol',
        align: 'left',
        format: e => e,
    },
]

const Portfolio = () => {
    const classes = useStyles();

    return (
        <div>
            <Table
                tableTitle='Stocks'
                columns={columns}
                rows={[]}
                width={200}
            />
        </div>

    );
};

export default Portfolio;