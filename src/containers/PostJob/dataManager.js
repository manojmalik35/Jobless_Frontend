import {postJob} from "../../service/jobService";

class PostJobDataManager {
    
    handlePostJob(payload) {
        return postJob(payload);
    }
}

export default PostJobDataManager;