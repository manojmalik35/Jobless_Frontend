import { LOGIN_SUCC, SIGNUP_SUCC, LOGOUT } from '../actions/types';
import axiosInstance from '../service/createService';

const initialState = {
    isUserLoggedIn: false,
    user: {}
}


const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCC:
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${action.payload.authToken}`;
            return {
                isUserLoggedIn: true,
                user: payload
            };
        case SIGNUP_SUCC:
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${action.payload.authToken}`;
            return {
                isUserLoggedIn: true,
                user: payload
            };
        case LOGOUT :
            axiosInstance.defaults.headers.common["Authorization"] = undefined;
            return {
                isUserLoggedIn : false,
                user : {}
            };
        case 'persist/REHYDRATE':
            // Check if Payload Exists
            if (action.payload) {
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${action.payload.auth.user.authToken}`;
            }
            return state;
        default:
            return state;
    }
}

export default authReducer;