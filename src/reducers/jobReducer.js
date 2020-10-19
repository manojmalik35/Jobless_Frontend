import {POST_SUCC, POST_FAIL, GET_POSTED_JOBS} from '../actions/types';

const initialState = {
    jobs : []
}


  const jobReducer = (state = initialState, action)=>{
        const {type, payload} = action;

        switch(type){
            case POST_SUCC : 
                return {
                    ...state
                };
            case POST_FAIL:
                return {
                    ...state,
                    jobs : []
                };
            case GET_POSTED_JOBS:
                return {
                    ...state,
                    jobs : payload
                }
            default : 
                return state;
        }
  }

  export default jobReducer;