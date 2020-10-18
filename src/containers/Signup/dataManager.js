import {signupUser} from "../../service/authService";

class SignupDataManager {
    
    handleSignup(payload) {
        return signupUser(payload);
    }
}

export default SignupDataManager;