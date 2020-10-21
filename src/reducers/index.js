
import {combineReducers} from 'redux';
import authReducer from './authReducer'
import jobReducer from './jobReducer';
import userReducer from './userReducer';
const allReducers = combineReducers({
    auth : authReducer,
    jobs : jobReducer,
    users : userReducer
});

export default allReducers;