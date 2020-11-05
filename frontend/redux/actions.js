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
