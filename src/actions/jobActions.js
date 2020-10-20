import { POST_SUCC, GET_JOBS } from './types';

export const postAction = (payload) => (dispatch) => {

    dispatch({
        type: POST_SUCC,
        payload
    })

}

export const getJobsAction = (payload) =>(dispatch)=>{

    dispatch({
        type : GET_JOBS,
        payload
    })
}

