
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ApplicantsModal from '../Modal/Modal';

const JobCard = (props) => {

    const [modalShow, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <button className="job-btn application" id={props.job.uuid} onClick={handleShow}>View Applications</button>
                        {modalShow && <ApplicantsModal key={props.job.uuid} show={modalShow} onHide={handleClose} job={props.job}></ApplicantsModal>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default JobCard;