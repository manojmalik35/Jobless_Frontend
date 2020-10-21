import {deleteJob} from '../../service/adminService';

class AdminDataManager{

    handleDelete(payload){
        return deleteJob(payload);
    }
}

export default AdminDataManager;