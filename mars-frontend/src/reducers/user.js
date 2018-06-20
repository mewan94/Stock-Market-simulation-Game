import userTypes from '../types/user';
import jwt from 'jsonwebtoken';
import {GAME_ROLE} from '../types/common';

export const initialState = {
    fetching: false,
    action: null,
    user: {
        name:null,
        balance:0
    },
    game: {
        id:null,
        role:null
    }
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
        case userTypes.CREATE_GAME:
            return {
                ...state,
                fetching: true,
                action: userTypes.CREATE_GAME
            };
        case userTypes.CREATE_GAME_SUCCESS:
            return {
                ...state,
                fetching: false,
                action: userTypes.CREATE_GAME_SUCCESS,
                game:{
                    id: action.payload,
                    role: GAME_ROLE.ADMIN
                }
            };
        case userTypes.CREATE_GAME_FAIL:
            return {
                ...state,
                fetching: false,
                action: userTypes.CREATE_GAME_FAIL
            };
        default:
            return state
    }
};