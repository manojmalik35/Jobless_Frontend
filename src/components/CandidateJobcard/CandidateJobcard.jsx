
import React from 'react';
import { Card } from 'react-bootstrap';
import CandidateDataManager from './dataManager';
import { applyJobAction } from '../../actions/applicationActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const JobCard = (props) => {

    let dataManager = new CandidateDataManager();
    const dispatch = useDispatch();
    const handleApply = (job_id) => {
        // console.log(job_id);
        dataManager.handleApply({ job_id })
            .then(res => {
                console.log(res.data);
                if (res.data.status) {
                    dispatch(applyJobAction({ job_id }));
                    toast.success("You have successfully applied for the job.", {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        pauseOnHover: false
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="col-sm-3">
            <Card className="job-card">
                <Card.Body>
                    <Card.Title>{props.job.title}</Card.Title>
                    {props.job.description.length > 38 ?
                        <Card.Text>{props.job.description.substring(0, 38)}...</Card.Text>
                        :
                        <Card.Text>{props.job.description}</Card.Text>
                    }
                    <div className="company-btn-container">
                        <span>{props.job.company}</span>
                        {props.applied ? '' : <button className="job-btn apply" onClick={() => handleApply(props.job.uuid)}>Apply</button>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default JobCard;