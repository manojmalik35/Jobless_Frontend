import { GET_RECRUITERS, GET_CANDIDATES, DELETE_USER} from './types';

export const getRecruitersAction = (payload) =>(dispatch)=>{

    dispatch({
        type : GET_RECRUITERS,
        payload
    })
}

export const getCandidatesAction = (payload) =>(dispatch)=>{

    dispatch({
        type : GET_CANDIDATES,
        payload
    })
}

export const deleteUserAction = (payload) =>(dispatch)=>{

    dispatch({
        type : DELETE_USER,
        payload
    })
}


