import {getJobs, getAppliedJobs} from '../../service/jobService';

class GetJobsDataManager{

    getJobs(){
        return getJobs();
    }

    getAppliedJobs(){
        return getAppliedJobs();
    }
}

export default GetJobsDataManager;