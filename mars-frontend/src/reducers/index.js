import { combineReducers } from 'redux';
import * as userReducer from './user';

const appReducer = combineReducers({
    user: userReducer.user
});

const rootReducer = (state,action) => {
    return appReducer(state,action)
}
export default rootReducer;