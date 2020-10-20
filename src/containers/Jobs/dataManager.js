import {getJobs} from '../../service/jobService';
import {getAppliedJobs} from '../../service/applicationService';

class GetJobsDataManager{

    getJobs(){
        return getJobs();
    }

    getAppliedJobs(){
        return getAppliedJobs();
    }
}

export default GetJobsDataManager;