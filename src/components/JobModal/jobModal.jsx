import { Modal, Button, Container, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import NoApplicants from '../NoApplicants/NoApplicants';
import ModalJobCard from '../ModalJobcard/ModalJobcard';
import Paginate from '../Pagination/Pagination';
import ModalDataManager from "./dataManager";

class JobModal extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new ModalDataManager();
        this.state = {
            page: 1,
            jobs: [],
            count: 0
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.page != this.state.page){
            if (this.props.user.role == 1) {
                this.dataManager.getPostedJobs({ recruiter_id: this.props.user.uuid, page: this.state.page }).then(res => {
                    if (res.data.status) {
                        this.setState({
                            jobs : res.data.data,
                            count : res.data.metadata.resultset.count
                        })
                    }
                }).catch(err => { })
            } else {
                this.dataManager.getAppliedJobs({ candidate_id: this.props.user.uuid, page: this.state.page }).then(res => {
                    if (res.data.status) {
                        this.setState({
                            jobs : res.data.data,
                            count : res.data.metadata.resultset.count
                        })
                    }
                }).catch(err => { })
            }
        }
    }

    componentDidMount() {

        if (this.props.user.role == 1) {
            this.dataManager.getPostedJobs({ recruiter_id: this.props.user.uuid, page: this.state.page }).then(res => {
                if (res.data.status) {
                    this.setState({
                        jobs : res.data.data,
                        count : res.data.metadata.resultset.count
                    })
                }
            }).catch(err => { })
        } else {
            this.dataManager.getAppliedJobs({ candidate_id: this.props.user.uuid, page: this.state.page }).then(res => {
                if (res.data.status) {
                    this.setState({
                        jobs : res.data.data,
                        count : res.data.metadata.resultset.count
                    })
                }
            }).catch(err => { })
        }
    }

    getCards = (jobs, rowNo) =>{
        let si = rowNo * 2;
        let ei = si + 2;
        let cards = [];
    
        while (si < jobs.length && si < ei) {
            cards.push(<ModalJobCard key={jobs[si].uuid} job={jobs[si]} />);
            si++;
        }
    
        return cards;
    }
    
    getRows = (jobs) =>{
    
        let totalJobs = jobs.length;
        if (totalJobs == 0) {
            return (
                <NoApplicants></NoApplicants>
            )
        }
    
        let noOfRows = (totalJobs % 2) == 0 ? totalJobs / 2 : (totalJobs / 2) + 1;
        let rows = []
        for (let i = 0; i < noOfRows; i++) {
            rows.push(
                <Row>
                    {this.getCards(jobs, i)}
                </Row>
            );
        }
    
        return (
            <Container>
                {rows}
            </Container>
        );
    }

    handlePageChange = (newPage) => {
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
                dialogClassName="modal-50vh"
                centered
            >
                <Modal.Header closeButton>
                    {
                        this.props.user.role == 1 ?
                            <Modal.Title id="contained-modal-title-vcenter">Posted Jobs</Modal.Title>
                            :
                            <Modal.Title id="contained-modal-title-vcenter">Applied Jobs</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    <h4>Total {this.state.count} jobs</h4>
                    {this.getRows(this.state.jobs)}
                </Modal.Body>
                <Modal.Footer>
                    <Paginate totalJobs={this.state.count} active={this.state.page} handlePageChange={this.handlePageChange}></Paginate>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default JobModal;