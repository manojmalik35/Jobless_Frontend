
import React from 'react';
import { Card } from 'react-bootstrap';

function getButton(props) {
    if (props.applied) return undefined;
    return (<button className="job-btn" id={props.job.uuid}>Apply</button>)
}

const JobCard = (props) => {

    return (
        <div className="col-sm-3">
            <Card>
                <Card.Body>
                    <Card.Title>{props.job.title}</Card.Title>
                    <Card.Text>{props.job.description}</Card.Text>
                    <div className="company-btn-container">
                        <span>{props.job.company}</span>
                        {getButton(props)}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default JobCard;