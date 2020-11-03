import * as types from './action-types';

const initialState = {
    landingState: 'Sign In',
    loading: false,
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
                portfolioValue: action.info.portfoliovalue,
            };

        default:
            return state;
    }
};

export default mainReducer