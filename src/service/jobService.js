import axiosInstance from "./createService";

const postJob = (payload) =>{
    return axiosInstance.post("/jobs", payload);
}

const getJobs = (payload)=>{
    return axiosInstance.get(`/jobs?page=${payload.page}`);
}

export {postJob, getJobs};