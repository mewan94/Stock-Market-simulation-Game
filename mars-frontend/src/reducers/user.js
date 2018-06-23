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
    game: {}
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
                    ...action.payload
                }
            };
        case userTypes.CREATE_GAME_FAIL:
            return {
                ...state,
                fetching: false,
                action: userTypes.CREATE_GAME_FAIL
            };
        case userTypes.JOIN_GAME:
            return {
                ...state,
                fetching: true,
                action: userTypes.JOIN_GAME
            };
        case userTypes.JOIN_GAME_SUCCESS:
            return {
                ...state,
                fetching: false,
                game:{
                    ...action.payload
                },
                action: userTypes.JOIN_GAME_SUCCESS
            };
        case userTypes.JOIN_GAME_FAIL:
            return {
                ...state,
                fetching: false,
                action: userTypes.JOIN_GAME_FAIL
            };
        case userTypes.JOIN_EXISTING_GAME:
            return {
                ...state,
                fetching: true,
                action: userTypes.JOIN_EXISTING_GAME
            };
        case userTypes.JOIN_EXISTING_GAME_SUCCESS:
            return {
                ...state,
                fetching: false,
                action: userTypes.JOIN_EXISTING_GAME_SUCCESS
            };
        case userTypes.JOIN_EXISTING_GAME_FAIL:
            return {
                ...state,
                fetching: false,
                action: userTypes.JOIN_EXISTING_GAME_FAIL
            };
        default:
            return state
    }
};