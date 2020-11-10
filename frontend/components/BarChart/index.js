import { memo } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import {
    BarChart as BC,
    ResponsiveContainer,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import ChartActionButton from '../ChartActionButton';
import WatchListButton from '../WatchListButton';

const useStyles = makeStyles({
    root: {
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        height: 100,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'relative',
    },
    
});

const BarChart = ({
    data,
    range,
    symbol,
}) => {
    const classes = useStyles();

    data = data.slice(0, range).reverse();

    return (
        <Paper
            className={classes.root}
            elevation={5}
        >
            <Typography
                className={classes.title}
                variant='h4'
            >
                <WatchListButton stock={symbol}/>
                {symbol}
                <ChartActionButton/>
            </Typography>
            <ResponsiveContainer>
                <BC
                    data={data}
                    margin={{
                        top: 10,
                        right: 50,
                        left: 30,
                        bottom: 30,
                    }}
                >
                    <XAxis
                        dataKey="date"
                        minTickGap={~~(range / 2)}
                    />
                    <YAxis
                        domain={[0, 'dataMax + dataMax * 0.1']}
                        tickFormatter={tick => tick.toLocaleString()}
                    />
                    <Tooltip formatter={item => item.toLocaleString()} />
                    <Bar
                        dataKey="volume"
                        fill="#598ad4"
                        maxBarSize={50}
                    />
                </BC>
            </ResponsiveContainer>
        </Paper>
    );
};

const mapStateToProps = ({
    stockInfo,
}) => {
    const data = stockInfo.chartData;

    data.forEach(item => {
        for (const index in item) {
            let num = Number(item[index]);

            num = num
                ? num
                : Number(item[index].replaceAll(',', ''));

            if (num) {
                item[index] = num;
            }
        }
    });

    return {
        data,
        symbol: stockInfo.symbol,
    };
};


export default connect(mapStateToProps)(memo(BarChart, (prev, next) => prev.range === next.range && prev.symbol === next.symbol));
