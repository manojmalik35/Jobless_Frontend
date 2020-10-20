import { resetPassword } from "../../service/authService";

class ResetPasswordManager {

    handleReset(payload) {
        return resetPassword(payload);
    }
}

export default ResetPasswordManager;