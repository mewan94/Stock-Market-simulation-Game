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
                fetching: true,
                action: userTypes.USER_REGISTER
            };
        case userTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                user:jwt.verify(action.payload, 'abcd'),
                fetching: false,
                action: userTypes.USER_REGISTER_SUCCESS
            };
        case userTypes.USER_REGISTER_FAIL:
            return {
                ...state,
                fetching: false,
                action: userTypes.USER_REGISTER_FAIL
            };
        default:
            return state
    }
};