import {applyJob} from '../../service/applicationService';

class CandidateDataManager{

    handleApply(payload){
        return applyJob(payload);
    }
}

export default CandidateDataManager;