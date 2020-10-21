import {getAllJobs, getPostedJobsByRecruiter, getAllUsers, getAppliedJobsByCandidate, deleteUser, deleteJob} from '../../service/adminService';

class AdminDataManager{

    getAllJobs(payload){
        return getAllJobs(payload);
    }

    getAppliedJobs(payload){
        return getAppliedJobsByCandidate(payload);
    }

    getPostedJobs(payload){
        return getPostedJobsByRecruiter(payload);
    }

    getAllUsers(payload){
        return getAllUsers(payload);
    }

    deleteJob(payload){
        return deleteJob(payload);
    }

    deleteUser(payload){
        return deleteUser(payload);
    }
}

export default AdminDataManager;