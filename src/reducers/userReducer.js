import { GET_RECRUITERS, GET_CANDIDATES, CLEAR_USERS, DELETE_USER} from '../actions/types';

const initialState = {
    count: 0,
    users: [],
    type: ""
}


const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    let arr = state.users;
    switch (type) {
        case GET_RECRUITERS:
            return {
                ...state,
                users: payload.users,
                count: payload.count,
                type: "Recruiters"
            };
        case GET_CANDIDATES:
            return {
                ...state,
                users: payload.users,
                count: payload.count,
                type: "Candidates"
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                count: 0,
                type : ""
            };
        case DELETE_USER:
            arr = state.users;
            arr = arr.filter(user => {
                return user.uuid != payload.user_id;
            })
            return {
                ...state,
                users: arr,
                count: state.count - 1
            };
        default:
            return state;
    }
}

export default userReducer;