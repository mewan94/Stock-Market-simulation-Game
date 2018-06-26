import ActionTypes from '../types/gameAction';

export const initialState = {
    fetching: false,
    action: null,
    myAccount:[],
    myBalance:0,
    history:[],
    results:[]
};

export const gameAction = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INIT_BALANCE:
            return {
                ...state,
                myBalance:action.payload
            };
        case ActionTypes.BUY_STOCK:
            return {
                ...state,
                fetching: true,
                action: ActionTypes.BUY_STOCK
            };
        case ActionTypes.BUY_STOCK_SUCCESS:
            let history = {
                type:'buy',
                amount: action.payload.amount,
                stock: action.payload.stock
            };
            let account = state.myAccount;
            let found = false;
            account.forEach((item,i) =>{
                if(item.stock === action.payload.stock){
                    account[i].amount = parseInt(account[i].amount) + parseInt(action.payload.amount);
                    found = true
                }
            });
            if(!found){
                account.push({amount:action.payload.amount,stock:action.payload.stock})
            }
            return {
                ...state,
                fetching: false,
                history:state.history.concat(history),
                myAccount:account,
                myBalance:action.Mybalance,
                action: ActionTypes.BUY_STOCK_SUCCESS
            };
        case ActionTypes.BUY_STOCK_FAIL:
            return {
                ...state,
                fetching: false,
                action: ActionTypes.BUY_STOCK_FAIL
            };
        case ActionTypes.SELL_STOCK:
            return {
                ...state,
                fetching: true,
                action: ActionTypes.SELL_STOCK
            };
        case ActionTypes.SELL_STOCK_SUCCESS:
            let sellhistory = {
                type:'sell',
                amount: action.payload.amount,
                stock: action.payload.stock
            };
            let account2 = state.myAccount;
            let found2 = false;
            account2.forEach((item,i) =>{
                if(item.stock === action.payload.stock){
                    account2[i].amount = parseInt(account2[i].amount) - parseInt(action.payload.amount);
                    found2 = true
                }
            });
            if(!found2){
                account2.push({amount:action.payload.amount,stock:action.payload.stock})
            }
            return {
                ...state,
                fetching: false,
                myAccount:account2,
                myBalance:action.Mybalance,
                history:state.history.concat(sellhistory),
                action: ActionTypes.SELL_STOCK_SUCCESS
            };
        case ActionTypes.SELL_STOCK_FAIL:
            return {
                ...state,
                fetching: false,
                action: ActionTypes.SELL_STOCK_FAIL
            };
        case ActionTypes.PLAYER_TRANSACTION:
            return {
                ...state,
                action: ActionTypes.PLAYER_TRANSACTION,
                history:state.history.concat(action.payload)
            };
        case ActionTypes.END_TURN:
            return {
                ...state,
                action: ActionTypes.END_TURN,
                results:state.results.concat(action.payload)
            };
        case ActionTypes.CLEAR:
            return {
                ...state,
                fetching:false,
                action:null
            };
        default:
            return state
    }
};