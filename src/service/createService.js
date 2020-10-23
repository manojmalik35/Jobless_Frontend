import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_PATH,
    timeout: 30000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, OPTIONS, PATCH",
        "Access-Control-Allow-Headers":
            "Origin, X-Requested-With,Content-Type, Accept, Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Origin"
    }
});

export default axiosInstance;