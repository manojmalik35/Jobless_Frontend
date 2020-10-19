import axiosInstance from "./createService";

const postJob = (payload) =>{
    return axiosInstance.post("/jobs", payload);
}

const getJobs = ()=>{
    return axiosInstance.get("/jobs");
}

const getAppliedJobs = ()=>{
    return axiosInstance.get("/application");
}

export {postJob, getJobs, getAppliedJobs};