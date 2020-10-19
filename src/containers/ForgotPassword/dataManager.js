import { forgotPassword } from "../../service/authService";

class ForgotPasswordManager {

    handleForgot(payload) {
        return forgotPassword(payload);
    }
}

export default ForgotPasswordManager;