import axiosInstance from "./createService";

const postJob = (payload) =>{
    return axiosInstance.post("/jobs", payload);
}

const getJobs = ()=>{
    return axiosInstance.get("/jobs");
}

export {postJob, getJobs};