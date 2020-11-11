import * as types from './action-types';

const initialState = {
    landingState: 'Sign In',
    loading: false,
    sidePanelOpened: true,
    ticker: '',
    firstName: '',
    lastName: '',
    chartType: 'Price',
    buyingPower: null,
    uid: undefined,
    stockInfo: undefined,
    initialRender: true,
    portfolio: {},
    stockPrices: {},
    watchList: [],
    transactions: [],
    totalStockWorth: 0,
    transactionState: 'Buy',
    msg: {
        msg: '',
        color: '',
    },
};

const mainReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case types.UPDATE_INITIAL_RENDER:
            return {
                ...state,
                initialRender: false,
            };

        case types.UPDATE_LOADING:
            return {
                ...state,
                loading: action.loading,
            };

        case types.UPDATE_LANDING_STATE:
            return {
                ...state,
                landingState: action.state,
            };

        case types.UPDATE_USER_LOGIN_STATE:
            return {
                ...state,
                uid: action.uid,
            };

        case types.UPDATE_USER_INFO:
            return {
                ...state,
                firstName: action.info.firstname,
                lastName: action.info.lastname,
                buyingPower: parseFloat(action.info.buyingpower),
            };

        case types.UPDATE_SEARCH_INPUT:
            return {
                ...state,
                ticker: action.ticker,
            };

        case types.UPDATE_SIDE_PANEL:
            return {
                ...state,
                sidePanelOpened: action.opened,
            };

        case types.UPDATE_STOCK_INFO:
            return {
                ...state,
                stockInfo: action.stockInfo,
            };

        case types.UPDATE_CHART_TYPE:
            return {
                ...state,
                chartType: action.chartType,
            };

        case types.UPDATE_BUYING_POWER:
            return {
                ...state,
                buyingPower: parseFloat(action.buyingPower),
            };

        case types.UPDATE_SHARES:
            return {
                ...state,
                portfolio: {
                    ...state.portfolio,
                    [action.symbol]: action.shares,
                },
            };

        case types.UPDATE_PORTFOLIO:
            const rows = action.portfolio;
            const portfolio = {};

            for (const row of rows) {
                portfolio[row.symbol] = row.shares;
            }

            return {
                ...state,
                portfolio: {
                    ...portfolio,
                },
            };

        case types.UPDATE_TRANSACTIONS:
            return {
                ...state,
                transactions: action.transactions,
            };

        case types.UPDATE_TOTAL_STOCK_WORTH:
            return {
                ...state,
                totalStockWorth: action.totalStockWorth,
            };

        case types.UPDATE_STOCK_PRICES:
            return {
                ...state,
                stockPrices: action.stockPrices,
            };

        case types.UPDATE_WATCH_LIST:
            return {
                ...state,
                watchList: action.watchList,
            };

        case types.SET_MSG:
            return {
                ...state,
                msg: action.info,
            };

        case types.SET_TRANSACTION_STATE:
            return {
                ...state,
                transactionState: action.state,
            };

        default:
            return state;
    }
};

export default mainReducer