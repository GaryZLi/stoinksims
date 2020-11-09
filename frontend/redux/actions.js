import * as types from './action-types';

export const updateLoading = loading => ({
    type: types.UPDATE_LOADING,
    loading,
});

export const updateLandingState = state => ({
    type: types.UPDATE_LANDING_STATE,
    state,
});

export const updateUserLoginState = uid => ({
    type: types.UPDATE_USER_LOGIN_STATE,
    uid,
});

export const updateUserInfo = info => ({
    type: types.UPDATE_USER_INFO,
    info,
});

export const updateSearchInput = ticker => ({
    type: types.UPDATE_SEARCH_INPUT,
    ticker,
});

export const updateSidePanel = opened => ({
    type: types.UPDATE_SIDE_PANEL,
    opened,
});

export const updateStockInfo = stockInfo => ({
    type: types.UPDATE_STOCK_INFO,
    stockInfo,
});

export const updateChartType = chartType => ({
    type: types.UPDATE_CHART_TYPE,
    chartType,
});

export const updateBuyingPower = buyingPower => ({
    type: types.UPDATE_BUYING_POWER,
    buyingPower,
});

export const updateShares = (symbol, shares) => ({
    type: types.UPDATE_SHARES,
    symbol,
    shares,
});

export const updatePortfolio = portfolio => ({
    type: types.UPDATE_PORTFOLIO,
    portfolio,
});

export const updateTransactions = transactions => ({
    type: types.UPDATE_TRANSACTIONS,
    transactions,
});

export const updateTotalStockWorth = totalStockWorth => ({
    type: types.UPDATE_TOTAL_STOCK_WORTH,
    totalStockWorth,
});

export const updateStockPrices = stockPrices => ({
    type: types.UPDATE_STOCK_PRICES,
    stockPrices,
});