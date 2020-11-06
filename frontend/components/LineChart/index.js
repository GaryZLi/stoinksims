import { memo } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import {
    LineChart as LC,
    ResponsiveContainer,
    Line, 
    XAxis, 
    YAxis, 
    Tooltip, 
} from 'recharts';
import ChartActionButton from '../ChartActionButton';

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

const LineChart = ({
    data,
    range,
    symbol,
}) => {
    const classes = useStyles();

    data = data?.slice(0, range).reverse();

    return (
        <Paper
            className={classes.root}
            elevation={5}
        >
            <Typography 
                className={classes.title}
                variant='h4'
            >
                {symbol}
                <ChartActionButton/>
            </Typography>
            <ResponsiveContainer>
                <LC
                    data={data}
                    margin={{
                        top: 10, 
                        right: 50, 
                        left: 10, 
                        bottom: 10,
                    }}
                >
                    <XAxis
                        minTickGap={~~(range / 2)}
                        dataKey="date" 
                    />
                    <YAxis
                        domain={[min => ~~(min - (min * 0.1)), max => ~~(max + (max * 0.1))]}
                        tickFormatter={tick => tick.toLocaleString()}
                    />
                    <Tooltip formatter={item => [item.toLocaleString(), 'price']}/>
                    <Line
                        dataKey="close" 
                        fill="gray" 
                        dot={false}
                    />
                </LC>
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

export default connect(mapStateToProps)(memo(LineChart, (prev, next) => prev.range === next.range && prev.symbol === next.symbol));
