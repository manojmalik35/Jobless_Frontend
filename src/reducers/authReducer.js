import {LOGIN_SUCC, LOGIN_FAIL, SIGNUP_SUCC, SIGNUP_FAIL} from '../actions/types';
import axios from 'axios';
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
            case LOGIN_FAIL:
                return {
                    isUserLoggedIn : false,
                    user : {}
                };
            case SIGNUP_SUCC:
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${action.payload.authToken}`;
                return {
                    isUserLoggedIn : true,
                    user : payload
                }
            case SIGNUP_FAIL:
                return {
                    isUserLoggedIn : false,
                    user : {}
                }
            default : 
                return state;
        }
  }

  export default authReducer;