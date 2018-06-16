import userTypes from '../types/user';
import jwt from 'jsonwebtoken';

export const initialState = {
    fetching: false,
    action: null,
    user: []
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.USER_REGISTER:
            return {
                ...state,
                fetching: true
            };
        case userTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                user:jwt.verify(action.payload, 'abcd'),
                fetching: false
            };
        case userTypes.USER_REGISTER_FAIL:
            return {
                ...state,
                fetching: false
            };
        default:
            return state
    }
};