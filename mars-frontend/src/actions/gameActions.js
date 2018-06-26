import axios from 'axios';
import { ROUTES } from '../config/server';
import * as ActionTypes from '../types/gameAction';

export function buyStocks(gameid,companyID,amount) {
    let data = {
        "token": localStorage.getItem('userToken'),
        "gameid": gameid,
        "amount": amount,
        "stock":companyID
    };
    return function (dispatch) {
        dispatch({type:ActionTypes.BUY_STOCK});
        axios.post(ROUTES.BUY_STOCKS,data)
            .then(response => {
                if(response.status === 200){
                    dispatch({type:ActionTypes.BUY_STOCK_SUCCESS, payload: data, Mybalance: response.data.balance})
                }else{
                    dispatch({type:ActionTypes.BUY_STOCK_FAIL})
                }
            })
            .catch((err) => {
                dispatch({type:ActionTypes.BUY_STOCK_FAIL})
            })
    }
}

export function sellStocks(gameid,companyID,amount) {
    let data = {
        "token": localStorage.getItem('userToken'),
        "gameid": gameid,
        "amount": amount,
        "stock":companyID
    };
    return function (dispatch) {
        dispatch({type:ActionTypes.SELL_STOCK});
        axios.post(ROUTES.SELL_STOCKS,data)
            .then(response => {
                if(response.status === 200){
                    dispatch({type:ActionTypes.SELL_STOCK_SUCCESS, payload: data})
                }else{
                    dispatch({type:ActionTypes.SELL_STOCK_FAIL})
                }
            })
            .catch((err) => {
                dispatch({type:ActionTypes.SELL_STOCK_FAIL})
            })
    }
}