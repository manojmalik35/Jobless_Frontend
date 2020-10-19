import { LOGIN_SUCC, SIGNUP_SUCC } from './types';

export const loginAction = (payload) => (dispatch) => {

    dispatch({
        type: LOGIN_SUCC,
        payload
    })

}

export const signupAction = (payload) => (dispatch) => {

    dispatch({
        type: SIGNUP_SUCC,
        payload
    })

}

