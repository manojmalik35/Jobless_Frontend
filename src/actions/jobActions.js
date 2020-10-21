import { POST_SUCC, GET_JOBS, CLEAR_JOBS, DELETE_JOB} from './types';

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

export const clearJobsAction = () =>(dispatch)=>{

    dispatch({
        type : CLEAR_JOBS
    })
}

export const deleteJobAction = (payload) =>(dispatch)=>{

    dispatch({
        type : DELETE_JOB,
        payload
    })
}


