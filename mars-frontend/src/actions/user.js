import axios from 'axios';
import { API } from './config/server';
import userTypes from './types/user'; 

export function userRegistration(){
    return function (dispatch){
        dispatch({type: userTypes.U_LOGIN})
    }
}