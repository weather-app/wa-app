import * as types from '../actions/actionTypes';

const initialState = {
    userAgree: false
};

export default function app(state = initialState, action = {}) {
    switch (action.type) {
        case types.APPLY_AGREEMENT:
            return {
                ...state,
                userAgree: true
            };
        default:
            return state;
    }
}