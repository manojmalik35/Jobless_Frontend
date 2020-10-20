

import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ApplicantCard = (props) => {

    return (
        <Col md={6}>
            <Card className="applicant-card">
                <Card.Body>
                    <Card.Title>{props.applicant.name}</Card.Title>
                    <Card.Text>{props.applicant.email}</Card.Text>
                    <Card.Text>{props.applicant.phone}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ApplicantCard;