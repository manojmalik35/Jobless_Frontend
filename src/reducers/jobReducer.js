import {POST_SUCC, GET_JOBS, GET_APPLIED_JOBS, APPLY_JOB, CLEAR_JOBS, DELETE_JOB} from '../actions/types';

const initialState = {
    count : 0,
    jobs : [],
    type : "Jobs"
}


  const jobReducer = (state = initialState, action)=>{
        const {type, payload} = action;

        let arr = state.jobs;
        let oldCount = state.count;
        switch(type){
            case POST_SUCC : 
                arr.push(payload);
                return {
                    ...state,
                    jobs : arr,
                    count : oldCount + 1
                };
            case GET_JOBS:
                return {
                    ...state,
                    jobs : payload.jobs,
                    count : payload.count,
                    type : "Jobs"
                };
            case GET_APPLIED_JOBS :
                return{
                    ...state,
                    jobs : payload.jobs,
                    count : payload.count,
                    type : "Applied"
                };
            case APPLY_JOB :
                arr = state.jobs;
                arr = arr.filter(job=>{
                    return job.uuid != payload.job_id;
                })
                return{
                    ...state,
                    jobs : arr,
                    count : oldCount - 1
                };
            case CLEAR_JOBS :
                return {
                    ...state,
                    jobs : [],
                    count : 0
                };
            case DELETE_JOB :
                arr = state.jobs;
                arr = arr.filter(job=>{
                    return job.uuid != payload.job_id;
                })
                return {
                    ...state,
                    jobs : arr,
                    count : oldCount - 1
                }
            default : 
                return state;
        }
  }

  export default jobReducer;