import axiosInstance from "./createService";

const postJob = (payload) =>{
    return axiosInstance.post("/jobs", payload);
}

const getPostedJobs = ()=>{
    return axiosInstance.get("/jobs");
}

export {postJob, getPostedJobs};