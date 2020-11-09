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
    portfolio: {},
    stockPrices: {},
    transactions: [],
    totalStockWorth: 0,
};

const mainReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
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

        default:
            return state;
    }
};

export default mainReducer