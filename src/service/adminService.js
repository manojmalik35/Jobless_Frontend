import axiosInstance from "./createService";

const getAllUsers = (payload) =>{
    return axiosInstance.get(`/users?role=${payload.role}&page=${payload.page}`, payload);
}

const getAllJobs = (payload)=>{
    return axiosInstance.get(`/jobs?page=${payload.page}`);
}

const deleteJob = (payload)=>{
    return axiosInstance.delete(`/jobs/${payload.job_id}`);
}

const deleteUser = (payload)=>{
    return axiosInstance.delete(`/users/${payload.user_id}`);
}

const getAppliedJobsByCandidate = (payload)=>{
    return axiosInstance.get(`/application/admin/${payload.candidate_id}?page=${payload.page}`);
}

const getPostedJobsByRecruiter = (payload)=>{
    return axiosInstance.get(`/jobs/admin/${payload.recruiter_id}?page=${payload.page}`);
}


export {getAllJobs, getAllUsers, deleteJob, deleteUser, getAppliedJobsByCandidate, getPostedJobsByRecruiter};