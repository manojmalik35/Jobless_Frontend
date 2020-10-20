
import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import ApplicantsModal from '../Modal/Modal';
import RecruiterDataManager from './dataManager';

const JobCard = (props) => {

    const [modalShow, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [applicants, setApplicants] = useState({
        count : 0,
        applicants : []
    });
    const dataManager = new RecruiterDataManager();

    useEffect(()=>{
        dataManager.handleGetApplicants({job_id : props.job.uuid})
        .then(res=>{
            console.log(res.data);
            if(res.data.status){
                setApplicants({
                    count : res.data.data.length,
                    applicants : res.data.data
                });
            }
        })
        .catch(err=>{
            console.log(err);
        })

    },[]);

    return (
        <div className="col-sm-3">
            <Card className="job-card">
                <Card.Body>
                    <Card.Title>{props.job.title}</Card.Title>
                    <Card.Text>{props.job.description}</Card.Text>
                    <div className="company-btn-container">
                        <span>{props.job.company}</span>
                        <button className="job-btn" id={props.job.uuid} onClick={handleShow}>View All Applications</button>
                        <ApplicantsModal key={props.job.uuid} show={modalShow} onHide={handleClose} count={applicants.count} applicants={applicants.applicants}></ApplicantsModal>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default JobCard;