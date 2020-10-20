import {getApplicants} from '../../service/applicationService';

class RecruiterDataManager{

    handleGetApplicants(payload){
        return getApplicants(payload);
    }
}

export default RecruiterDataManager;