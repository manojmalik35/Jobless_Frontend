import React from 'react';
import PostJobImage from "../../assets/post-job.jpg";

function getButton(props) {
    let {role, type} = props;
    if (role == 1) {
        return (
            <React.Fragment>
                <p>Your posted jobs will show here</p>
                <div className="btn-container">
                    <button className="btn" onClick={() => props.handleMenuChange("Post")}>Post a Job</button>
                </div>
            </React.Fragment>
        )
    } else if (type == "Applied") {
        return (
            <React.Fragment>
                <p>Your applied jobs will show here</p>
                <div className="btn-container">
                    <button className="btn" onClick={() => props.handleMenuChange("Jobs")}>See All Jobs</button>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>You have no jobs availabele.</p>
                <div className="btn-container">
                    <button className="btn" onClick={() => props.handleMenuChange("Applied")}>See Applied Jobs</button>
                </div>
            </React.Fragment>
        )

    }
}

const NoJobs = (props) => {
    return (
        <div className="no-jobs">
            <img src={PostJobImage} alt="post a job" className="post-job-img" />
            {getButton(props)}
        </div>
    )
}

export default NoJobs;