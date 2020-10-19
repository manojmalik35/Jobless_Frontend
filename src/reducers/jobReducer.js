import {POST_SUCC, POST_FAIL, GET_JOBS, GET_APPLIED_JOBS} from '../actions/types';

const initialState = {
    count : 0,
    jobs : []
}


  const jobReducer = (state = initialState, action)=>{
        const {type, payload} = action;

        switch(type){
            case POST_SUCC : 
                let arr = state.jobs;
                let oldCount = state.count;
                arr.push(payload);
                return {
                    ...state,
                    jobs : arr,
                    count : oldCount + 1
                };
            case POST_FAIL:
                return {
                    ...state,
                    jobs : [],
                    count : 0
                };
            case GET_JOBS:
                return {
                    ...state,
                    jobs : payload.jobs,
                    count : payload.count
                };
            case GET_APPLIED_JOBS :
                return{
                    ...state,
                    jobs : payload.jobs,
                    count : payload.count
                }
            default : 
                return state;
        }
  }

  export default jobReducer;