import { Modal, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import NoApplicants from '../NoApplicants/NoApplicants';
import ApplicantCard from '../ApplicantCard/ApplicantCard';
import RecruiterDataManager from '../Modal/dataManager';

function getCards(applicants, rowNo) {
    let si = rowNo * 2;
    let ei = si + 2;
    let cards = [];

    while (si < applicants.length && si < ei) {
        cards.push(<ApplicantCard key={applicants[si].uuid} applicant={applicants[si]}></ApplicantCard>);
        si++;
    }

    return cards;
}

function getRows(applicants) {

    let totalApplicants = applicants.length;
    if (totalApplicants == 0) {
        return (
            <NoApplicants></NoApplicants>
        )
    }

    let noOfRows = (totalApplicants % 2) == 0 ? totalApplicants / 2 : (totalApplicants / 2) + 1;
    let rows = []
    for (let i = 0; i < noOfRows; i++) {
        rows.push(
            <Row>
                {getCards(applicants, i)}
            </Row>
        );
    }

    return (
        <Container>
            {rows}
        </Container>
    );
}

function ApplicantsModal(props) {


    const [applicants, setApplicants] = useState({
        count: 0,
        applicants: []
    });
    const dataManager = new RecruiterDataManager();

    useEffect(() => {
        dataManager.handleGetApplicants({ job_id: props.job.uuid })
            .then(res => {
                if (res.data.status) {
                    setApplicants({
                        count: res.data.data.length,
                        applicants: res.data.data
                    });
                }
            })
            .catch(err => {
            })

    }, []);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            dialogClassName="modal-50vh"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Applicants for this job
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Total {applicants.count} applications</h4>
                {getRows(applicants.applicants)}
            </Modal.Body>
        </Modal>
    );
}

export default ApplicantsModal;