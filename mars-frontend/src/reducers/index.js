import { combineReducers } from 'redux';
import * as userReducer from './user';
import * as actionReducer from './gameActions';

const appReducer = combineReducers({
    user: userReducer.user,
    actions: actionReducer.gameAction
});

const rootReducer = (state,action) => {
    return appReducer(state,action)
}
export default rootReducer;