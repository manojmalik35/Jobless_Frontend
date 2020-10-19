import { POST_SUCC, GET_JOBS, GET_APPLIED_JOBS} from './types';

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

export const getAppliedJobsAction = (payload) => (dispatch)=>{

    dispatch({
        type : GET_APPLIED_JOBS,
        payload
    })
}