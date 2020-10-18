import {LOGIN_SUCC, LOGIN_FAIL} from './types';
import authService from '../service/authService';

export const login = (email, password) => (dispatch) =>{
    return authService.loginUser({email, password}).then(
        (data)=>{

            dispatch({
                type : LOGIN_SUCC,
                payload : {user : data}
            })
            return Promise.resolve();
        },
        (error)=>{

            dispatch({
                type : LOGIN_FAIL
            })
            return Promise.reject();
        }
        
        
    )
}