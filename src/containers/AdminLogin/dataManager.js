import {adminLogin} from "../../service/authService";

class LoginDataManager {
    
    handleLogin(payload) {
        return adminLogin(payload);
    }
}

export default LoginDataManager;