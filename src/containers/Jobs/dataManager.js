import {getJobs} from '../../service/jobService';
import {getAppliedJobs} from '../../service/applicationService';

class GetJobsDataManager{

    getJobs(payload){
        return getJobs(payload);
    }

    getAppliedJobs(payload){
        return getAppliedJobs(payload);
    }
}

export default GetJobsDataManager;