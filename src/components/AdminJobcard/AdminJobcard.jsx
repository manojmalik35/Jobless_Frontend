
import React from 'react';
import { Card } from 'react-bootstrap';
import AdminDataManager from './dataManager';
import { deleteJobAction } from '../../actions/jobActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AdminJobcard = (props) => {

    let dataManager = new AdminDataManager();
    const dispatch = useDispatch();
    const handleDelete = (job_id) => {
        // console.log(job_id);
        dataManager.handleDelete({ job_id })
            .then(res => {
                console.log(res.data);
                if (res.data.status) {
                    dispatch(deleteJobAction({ job_id }));
                    toast.success("You have successfully deleted the job.", {
                        position: "top-left",
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
                        <button className="job-btn apply" onClick={() => handleDelete(props.job.uuid)}>Delete</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminJobcard;