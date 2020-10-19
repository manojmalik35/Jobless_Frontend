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

export {loginUser, signupUser, forgotPassword};