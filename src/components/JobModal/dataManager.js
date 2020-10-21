import {getAppliedJobsByCandidate, getPostedJobsByRecruiter} from '../../service/adminService';

class ModalDataManager{
    getAppliedJobs(payload){
        return getAppliedJobsByCandidate(payload);
    }

    getPostedJobs(payload){
        return getPostedJobsByRecruiter(payload);
    }
}

export default ModalDataManager;