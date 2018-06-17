import axios from 'axios';
import { ROUTES } from '../config/server';
import userTypes from '../types/user';

export function userRegistration(name){
    return function (dispatch){
        dispatch({type: userTypes.USER_REGISTER});
        axios.post(ROUTES.PLAYER,{"name":name})
            .then(response => {
                dispatch({type: userTypes.USER_REGISTER_SUCCESS, payload: response.data})
            })
            .catch((err) => {
            console.log(err.message);
            })
    }
}