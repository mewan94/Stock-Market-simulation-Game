import axios from 'axios';
import { ROUTES } from '../config/server';
import userTypes from '../types/user';

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