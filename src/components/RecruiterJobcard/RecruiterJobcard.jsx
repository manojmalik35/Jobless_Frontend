
import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import ApplicantsModal from '../Modal/Modal';

const JobCard = (props) => {

    const [modalShow, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let applicants = [
        {
            "uuid": "229dd89f-3754-411b-9dae-a3751640ba23",
            "name": "Sharma",
            "email": "seek@gmail.com",
            "role": 2,
            "phone": 989676676
        },
        {
            "uuid": "687d861d-0b5e-4c1c-8d87-d60eabacbde5",
            "name": "Prateek",
            "email": "tprateek@gmail.com",
            "role": 2,
            "phone": null
        },
        {
            "uuid": "a226820f-6a7e-46d1-afbd-bd682b71fd0d",
            "name": "Jenil",
            "email": "jenil@gmail.com",
            "role": 2,
            "phone": 7865345612
        },{},{},{},{}
    ];

    let count = 3;

    return (
        <div className="col-sm-3">
            <Card className="job-card">
                <Card.Body>
                    <Card.Title>{props.job.title}</Card.Title>
                    <Card.Text>{props.job.description}</Card.Text>
                    <div className="company-btn-container">
                        <span>{props.job.company}</span>
                        <button className="job-btn" id={props.job.uuid} onClick={handleShow}>View All Applications</button>
                        <ApplicantsModal key={props.job.uuid} show={modalShow} onHide={handleClose} count={count} applicants={applicants}></ApplicantsModal>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default JobCard;