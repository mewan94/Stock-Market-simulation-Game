import userTypes from '../types/user';

export const initialState = {
    fetching: false,
    action: null,
    user: []
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.U_LOGIN:
            return {
                ...state,
                fetching: true
            };
        default:
            return state
    }
};