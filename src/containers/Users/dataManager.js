import {getAllUsers} from '../../service/adminService';

class GetUsersDataManager{

    getAllUsers(payload){
        return getAllUsers(payload);
    }
}

export default GetUsersDataManager;