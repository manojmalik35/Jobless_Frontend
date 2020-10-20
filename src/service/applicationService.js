import axiosInstance from "./createService";

const applyJob = (payload) =>{
    return axiosInstance.post("/application/new", payload);
}

const getAppliedJobs = ()=>{
    return axiosInstance.get("/application");
}

const getApplicants = (payload)=>{
    return axiosInstance.get(`/application/${payload.job_id}`);
}

export {applyJob, getAppliedJobs, getApplicants};