import { POST_SUCC, GET_POSTED_JOBS } from './types';

export const postAction = (payload) => (dispatch) => {

    dispatch({
        type: POST_SUCC,
        payload
    })

}

export const getPostedJobsAction = (payload) =>(dispatch)=>{

    dispatch({
        type : GET_POSTED_JOBS,
        payload
    })
}