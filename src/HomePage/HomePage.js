import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import {Slider} from '../Slider';
import {Header} from "../Header";

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }
    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }
    render() {
        const { user, users } = this.props;
        return (
                <div>
                    <Header />
                    <Slider />
                    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="section-title position-relative pb-3 mb-5">
                                    <h5 className="fw-bold text-primary text-uppercase">Home</h5>
                                    <h1 className="mb-0">Hi {user.firstName}!</h1>
                                    <h3 className="mb-0">you're logged in with React!!</h3>
                                    <h2 className="mb-0">All registered users:</h2>
                                </div>
                                {users.loading && <em>Loading users...</em>}
                                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                                {users.items &&
                                    <ul>
                                        {users.items.map((user, index) =>
                                            <li key={user.id}>
                                                {user.firstName + ' ' + user.lastName}
                                                {
                                                    user.deleting ? <em> - Deleting...</em>
                                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                    : <span> - <a className="btn btn-link" onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                                }
                                            </li>
                                        )}
                                    </ul>
                                }
                                {/* <p>
                                    <Link to="/login">Logout</Link>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );

    }
}
function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
