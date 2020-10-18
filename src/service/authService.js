import axiosInstance from "./createService";

const loginUser = (payload) =>{
    return axiosInstance.post("/users/login", payload);
}

const signupUser = (payload)=>{
    return axiosInstance.post("/users/signup", payload);
}

export {loginUser, signupUser};