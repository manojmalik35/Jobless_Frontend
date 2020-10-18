
import React from 'react';
import { Button, Card } from 'react-bootstrap';

function getButton(props) {
    if (!props.buttonHeading) return undefined;
    return (<button className="job-btn" id={props.job.uuid}>{props.buttonHeading}</button>)
}

const JobCard = (props) => {

    // return (
    //     <div className="col-sm-3">
    //         <div className="card">
    //             <h6 className="card-title">{props.job.title}</h6>
    //             <p className="card-text">{props.job.description}</p>
    //             <div className="company-btn-container">
    //                 <span>{props.job.company}</span>
    //                 {getButton(props)}
    //             </div>
    //         </div>
    //     </div>
    // );
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