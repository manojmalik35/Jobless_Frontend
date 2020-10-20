import axiosInstance from "./createService";

const applyJob = (payload) =>{
    return axiosInstance.post("/application/new", payload);
}

const getAppliedJobs = (payload)=>{
    return axiosInstance.get(`/application?page=${payload.page}`);
}

const getApplicants = (payload)=>{
    return axiosInstance.get(`/application/${payload.job_id}`);
}

export {applyJob, getAppliedJobs, getApplicants};