
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import JobModal from '../JobModal/jobModal';
import UserDataManager from './dataManager';
import { deleteUserAction } from '../../actions/userActions';
import { toast } from 'react-toastify';
const UserCard = (props) => {

    const [modalShow, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const dataManager = new UserDataManager();
    const handleDelete = (user_id) => {
        dataManager.deleteUser({ user_id })
            .then(res => {
                if (res.data.status) {
                    dispatch(deleteUserAction({ user_id }));
                    toast.success("You have successfully deleted the user.", {
                        position: "top-right",
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
                    <Card.Title>{props.user.name}</Card.Title>
                    <Card.Text>{props.user.email}</Card.Text>
                    <Card.Text>{props.user.phone}</Card.Text>
                    <div className="company-btn-container">
                        <button className="job-btn" id={props.user.uuid} onClick={()=>handleDelete(props.user.uuid)}>Delete</button>
                        {props.user.role == 1 ?
                            <button className="job-btn application" id={props.user.uuid} onClick={handleShow}>View Posted Jobs</button>
                            :
                            <button className="job-btn application" id={props.user.uuid} onClick={handleShow}>View Applied Jobs</button>
                        }
                        <JobModal key={props.user.uuid} show={modalShow} onHide={handleClose} user={props.user} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard;