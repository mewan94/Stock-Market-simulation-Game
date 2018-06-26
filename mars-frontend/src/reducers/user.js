import userTypes from '../types/user';
import actionTypes from '../types/gameAction';
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
        playerList:[],
        stocks:[],
        gameStarted: false,
        gameEnded: false,
        turn: null,
        gameAdmin: "",
        gameID: ""
    },
    stac:[]
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
        case userTypes.GET_GAME_DETAILS:
            return {
                ...state,
                fetching: true,
                action: userTypes.GET_GAME_DETAILS
            };
        case userTypes.GET_GAME_DETAILS_SUCCESS:
            return {
                ...state,
                fetching: false,
                game:{
                    ...action.payload,
                    turn:state.game.turn
                },
                action: userTypes.GET_GAME_DETAILS_SUCCESS
            };
        case userTypes.GET_GAME_DETAILS_FAIL:
            return {
                ...state,
                fetching: false,
                action: userTypes.GET_GAME_DETAILS_FAIL
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
        case userTypes.USER_SUCCESSFULLY_JOINED:
            let list = action.payload;
            return {
                ...state,
                game:{
                    ...state.game,
                    playerList:state.game.playerList.concat(list.name)
                },
                action: userTypes.USER_SUCCESSFULLY_JOINED
            };
        case userTypes.START_GAME:
            return{
                ...state,
                fetching: true,
                action: userTypes.START_GAME
            };
        case userTypes.START_GAME_SUCCESS:
            return{
                ...state,
                fetching: false,
                game:{
                    ...state.game,
                    gameStarted:true
                },
                action: userTypes.START_GAME_SUCCESS
            };
        case userTypes.START_GAME_FAIL:
            return{
                ...state,
                fetching: false,
                action: userTypes.START_GAME_FAIL
            };
        case userTypes.INIT_ROUND_ONE:
            let stac = [];
            action.payload.forEach((item,i)=>{
                stac.push({
                    name:item.name,
                    symol:item.symbol,
                    sector:item.sector,
                    price:[item.price]
                })
            });
            return{
                ...state,
                game:{
                    ...state.game,
                    stocks:action.payload,
                    gameStarted:true,
                    turn:1
                },
                stac:stac,
                action: userTypes.INIT_ROUND_ONE
            };
        case actionTypes.START_TURN:
            let newstac = [];
            state.stac.forEach((item,i)=>{
                newstac.push({
                    ...stac,
                    price:item.price.push(action.payload.stocks[i].price)
                })
            });
            return{
                ...state,
                game:{
                    ...state.game,
                    turn:state.game.turn+1,
                    stocks:action.payload.stocks
                },
                /*stac:newstac,
                */action: actionTypes.START_TURN
            };


        default:
            return state
    }
};