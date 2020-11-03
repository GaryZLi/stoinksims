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