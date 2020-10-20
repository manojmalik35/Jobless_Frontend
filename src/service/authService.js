import axiosInstance from "./createService";

const loginUser = (payload) =>{
    return axiosInstance.post("/users/login", payload);
}

const signupUser = (payload)=>{
    return axiosInstance.post("/users/signup", payload);
}

const forgotPassword = (payload)=>{
    return axiosInstance.patch("users/forgot-password", payload);
}

const resetPassword = (payload)=>{
    return axiosInstance.patch("users/reset-password", payload);
}

const adminLogin = (payload)=>{
    return axiosInstance.post("/users/login/admin", payload);
}

export {loginUser, signupUser, forgotPassword, resetPassword, adminLogin};