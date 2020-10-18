import {LOGIN_SUCC, LOGIN_FAIL} from '../actions/types';

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


  const authReducer = (state = initialState, action)=>{
        const {type, payload} = action;

        switch(type){
            case LOGIN_SUCC : 
                return {
                    ...state,
                    isLoggedIn : true,
                    user : payload.user
                };
            case LOGIN_FAIL:
                return {
                    ...state,
                    isLoggedIn : false,
                    user : null
                }
            default : 
                return state;
        }
  }

  export default authReducer;