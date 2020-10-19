
import {combineReducers} from 'redux';
import authReducer from './authReducer'
import jobReducer from './jobReducer';
const allReducers = combineReducers({
    auth : authReducer,
    jobs : jobReducer
});

export default allReducers;