import React, { Component } from 'react';
import NoUsers from '../../components/NoUsers/NoUsers';
import UserCard from '../../components/UserCard/UserCard';
import GetUsersDataManager from './dataManager';
import { getCandidatesAction, getRecruitersAction } from '../../actions/userActions';
import { connect } from 'react-redux';
import Paginate from '../../components/Pagination/Pagination';

class Users extends Component {
    constructor(props) {
        super(props);
        this.dataManager = new GetUsersDataManager();
        this.state = {
            page: 1
        }

    }

    componentDidUpdate(prevProps, prevState) {
        document.title = this.props.role == 1 ? "Jobless | Recruiters" : "Jobless | Candidates";
        if (prevState.page != this.state.page || prevProps.users.count != this.props.users.count || prevProps.role != this.props.role) {
            this.dataManager.getAllUsers({ page: this.state.page, role: this.props.role })
                .then(res => {
                    if (res.data.status) {
                        if (this.props.role == 1)
                            this.props.getRecruitersAction({ users: res.data.data, count: res.data.metadata.resultset.count });
                        else
                            this.props.getCandidatesAction({ users: res.data.data, count: res.data.metadata.resultset.count });
                    }
                })
                .catch(err => {
                })
        }
    }

    componentDidMount() {
        document.title = this.props.role == 1 ? "Jobless | Recruiters" : "Jobless | Candidates";
        this.dataManager.getAllUsers({ page: this.state.page, role: this.props.role })
            .then(res => {
                if (res.data.status) {
                    if (this.props.role == 1)
                        this.props.getRecruitersAction({ users: res.data.data, count: res.data.metadata.resultset.count });
                    else
                        this.props.getCandidatesAction({ users: res.data.data, count: res.data.metadata.resultset.count });
                }
            })
            .catch(err => {
            })

    }

    handlePageChange = (newPage) => {
        this.setState({
            page: newPage
        });
    }

    getHeading = () => {
        let { role } = this.props;
        if (role == 1) {
            return (<h1>All recruiters</h1>)
        }
        return (<h1>All Candidates</h1>)
    }

    getCards = (rowNo) => {
        let { role } = this.props;
        let users = this.props.users.users;
        let si = rowNo * 4;
        let ei = si + 4;
        let cards = [];

        while (si < users.length && si < ei) {
            cards.push(<UserCard role={role} key={users[si].uuid} user={users[si]} />);
            si++;
        }

        return cards;
    }

    getRows = () => {
        let { role, handleMenuChange } = this.props;
        let users = this.props.users.users;
        let totalUsers = users.length;
        if (totalUsers == 0) {
            return (
                <NoUsers role={role} handleMenuChange={handleMenuChange} />
            )
        }

        let noOfRows = (totalUsers % 4) == 0 ? totalUsers / 4 : (totalUsers / 4) + 1;
        let rows = []
        for (let i = 0; i < noOfRows; i++) {
            rows.push(
                <div className="row" key={i}>
                    {this.getCards(i)}
                </div>
            );
        }

        return (
            <div className="jobs">
                {rows}
            </div>
        );
    }

    render() {
        return (
            <div className="jobs-container">
                {this.getHeading()}
                {this.getRows()}
                {this.props.users.count == 0 ? '' :
                    <Paginate totalJobs={this.props.users.count} active={this.state.page} handlePageChange={this.handlePageChange}></Paginate>
                }
            </div>
        );
    }
}


const mapStateToProps = state => {
    const { users } = state;
    return {
        users
    }
}

const mapDispatchToProps = {
    getRecruitersAction, getCandidatesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);