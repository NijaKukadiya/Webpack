import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { userActions,isLoggedIn } from '../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        if (isLoggedIn()) {
            history.push('/');
        }
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }
    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        
        return (
                <div>
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxwidth: '600px'}}>
                            <h5 className="fw-bold text-primary text-uppercase">Registration</h5>
                        </div>
        
                <div className="row g-5">
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <form className="row g-3" onSubmit={this.handleSubmit}>
                                <div className="col-12">
                                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                    <input type="text" className="form-control border-0 bg-light px-4" name="firstName" style={{height: '55px'}} placeholder="First Name" value={user.firstName} onChange={this.handleChange} />
                                        {submitted && !user.firstName &&
                                                <div className="help-block">First Name is required</div>
                                            }
                                    </div> 
                                </div>
                                <div className="col-12">
                                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                        <input type="text" className="form-control border-0 bg-light px-4" name="lastName" style={{height: '55px'}} placeholder="Last Name" value={user.lastName} onChange={this.handleChange} />
                                        {submitted && !user.lastName &&
                                            <div className="help-block">Last Name is required</div>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                        <input type="text" className="form-control border-0 bg-light px-4" name="username" style={{height: '55px'}}  placeholder= "User Name"value={user.username} onChange={this.handleChange} />
                                        {submitted && !user.username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                        <input type="password" className="form-control border-0 bg-light px-4" name="password" style={{height: '55px'}} placeholder="Password" value={user.password} onChange={this.handleChange} />
                                        {submitted && !user.password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button className="btn btn-primary w-100 py-3">Register</button>
                                        {registering && 
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                        <Link to="/login" className="btn btn-link">Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
        {/* <!-- Registration End --> */}

        </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
