import {LOGIN_SUCC, LOGIN_FAIL} from '../actions/types';
import axiosInstance from '../service/createService';

const initialState = {
    isUserLoggedIn : false,
    user : {}
}


  const authReducer = (state = initialState, action)=>{
        const {type, payload} = action;

        switch(type){
            case LOGIN_SUCC : 
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${action.payload.authToken}`;
                return {
                    ...state,
                    isLoggedIn : true,
                    user : payload
                };
            case LOGIN_FAIL:
                return {
                    ...state,
                    isLoggedIn : false,
                    user : {}
                }
            default : 
                return state;
        }
  }

  export default authReducer;