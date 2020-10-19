import {getPostedJobs} from '../../service/jobService';

class GetJobsDataManager{

    getPostedJobs(){
        return getPostedJobs();
    }
}

export default GetJobsDataManager;