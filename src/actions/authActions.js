import { LOGIN_SUCC } from './types';

export const loginAction = (payload) => (dispatch) => {

    dispatch({
        type: LOGIN_SUCC,
        payload
    })

}