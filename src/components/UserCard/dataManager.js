import {getAppliedJobsByCandidate, getPostedJobsByRecruiter, deleteUser} from '../../service/adminService';

class UserDataManager{

    getAppliedJobs(payload){
        return getAppliedJobsByCandidate(payload);
    }

    getPostedJobs(payload){
        return getPostedJobsByRecruiter(payload);
    }

    deleteUser(payload){
        return deleteUser(payload);
    }
}

export default UserDataManager;