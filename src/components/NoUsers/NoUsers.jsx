import React from 'react';
import PostJobImage from "../../assets/post-job.jpg";

function getButton(props) {
    let { role} = props;
    if (role == 1) {
        return (
            <React.Fragment>
                <p>Recruiters will show here</p>
                <div className="btn-container">
                    <button className="btn" onClick={() => props.handleMenuChange("Recruiters")}>View Recruiters</button>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Candidates will show here</p>
                <div className="btn-container">
                    <button className="btn" onClick={() => props.handleMenuChange("Candidates")}>View Candidates</button>
                </div>
            </React.Fragment>
        )

    }
}

const NoUsers = (props) => {
    return (
        <div className="no-jobs">
            <img src={PostJobImage} alt="No jobs" className="post-job-img" />
            {getButton(props)}
        </div>
    )
}

export default NoUsers;