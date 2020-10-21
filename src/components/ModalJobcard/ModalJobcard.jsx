

import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ModalJobCard = (props) => {

    return (
        <Col md={6}>
            <Card className="applicant-card">
                <Card.Body>
                    {props.job.title.length > 20 ?
                        <Card.Title>{props.job.title.substring(0, 20)}...</Card.Title>
                        :
                        <Card.Title>{props.job.title}</Card.Title>
                    }
                    {props.job.description.length > 20 ?
                        <Card.Text>{props.job.description.substring(0, 20)}...</Card.Text>
                        :
                        <Card.Text>{props.job.description}</Card.Text>
                    }
                    <Card.Text>{props.job.company}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ModalJobCard;