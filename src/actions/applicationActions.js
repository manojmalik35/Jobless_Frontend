import { GET_APPLIED_JOBS, APPLY_JOB } from './types';

export const getAppliedJobsAction = (payload) => (dispatch) => {

    dispatch({
        type: GET_APPLIED_JOBS,
        payload
    })
}

export const applyJobAction = (payload) => (dispatch) => {

    dispatch({
        type: APPLY_JOB,
        payload
    })
}