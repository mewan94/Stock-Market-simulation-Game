import axios from 'axios';
import { ROUTES } from '../config/server';
import userTypes from '../types/user';
import actionTypes from '../types/gameAction';

export function userRegistration(name){
    return function (dispatch){
        dispatch({type: userTypes.USER_REGISTER});
        axios.post(ROUTES.CREATE_PLAYER,{"name":name})
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('userToken',response.data);
                    dispatch({type: userTypes.USER_REGISTER_SUCCESS, payload: response.data})
                }else{
                    dispatch({type: userTypes.USER_REGISTER_FAIL});
                }
            })
            .catch((err) => {
            console.log(err);
            dispatch({type: userTypes.USER_REGISTER_FAIL});
            })
    }
}

export function startGame() {
    return function (dispatch) {
        dispatch({type: userTypes.CREATE_GAME});
        axios.post(ROUTES.CREATE_GAME,{"token":localStorage.getItem('userToken')})
            .then(response => {
                if(response.status === 200){
                    dispatch({type: userTypes.CREATE_GAME_SUCCESS,payload:response.data})
                }else{
                    dispatch({type: userTypes.CREATE_GAME_FAIL})
                }
            })
            .catch((err) => {
            console.log(err);
                dispatch({type: userTypes.CREATE_GAME_FAIL})
            })
    }
}

export function joinGame(gameid) {
    return function (dispatch) {
        dispatch({type: userTypes.JOIN_GAME});
        axios.get(`${ROUTES.JOIN_GAME+gameid}`)
            .then(response => {
                if(response.status === 200){
                    dispatch({type: userTypes.JOIN_GAME_SUCCESS, payload: response.data})
                }else{
                    dispatch({type: userTypes.JOIN_GAME_FAIL})
                }
            })
            .catch((err) => {
            console.log(err)
            dispatch({type: userTypes.JOIN_GAME_FAIL})
            })
    }
}

export function joinexistinggame(gameid) {
    return function (dispatch) {
        dispatch({type: userTypes.JOIN_EXISTING_GAME});
        axios.post(`${ROUTES.JOIN_EXISTING_GAME + gameid}`,{"token":localStorage.getItem('userToken')})
            .then(response => {
                if(response.status === 200) {
                    dispatch({type: userTypes.JOIN_EXISTING_GAME_SUCCESS, payload: response.data});
                }else{
                    dispatch({type: userTypes.JOIN_EXISTING_GAME_FAIL});
                }

            })
            .catch((err) => {
                dispatch({type: userTypes.JOIN_EXISTING_GAME_FAIL});
                console.log(err)
            })
    }
}

export function userSuccessfullyJoined(username) {
    return function (dispatch) {
        dispatch({type: userTypes.USER_SUCCESSFULLY_JOINED, payload: username})
    }
}

export function startGameByAdmin(gameId) {
    return function (dispatch) {
        dispatch({type: userTypes.START_GAME});
        axios.post(`${ROUTES.START_GAME+gameId}/start`,{"token":localStorage.getItem('userToken')})
            .then(response => {
                if(response.status === 200){
                    dispatch({type: userTypes.START_GAME_SUCCESS})
                }else{
                    dispatch({type: userTypes.START_GAME_FAIL})
                }
            })
            .catch((err) => {
                dispatch({type: userTypes.START_GAME_FAIL})
            })

    }
}

export function initRoundOne(data,balance) {
    return function (dispatch) {
        dispatch({type: userTypes.INIT_ROUND_ONE,payload:data.stocks});
        dispatch({type: actionTypes.INIT_BALANCE, payload: balance});
    }
}