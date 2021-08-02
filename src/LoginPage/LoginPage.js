import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userActions} from '../actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                
            
            {/* <!-- Login Start --> */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxwidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Login</h5>
                    </div>

                    <div className="row g-5">
                            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                                <form className="row g-3" onSubmit={this.handleSubmit}>
                                    <div className="col-12">
                                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <input type="text" className="form-control border-0 bg-light px-4" placeholder="User Name" name="username" style={{height: '55px'}} value={username} onChange={this.handleChange} />
                                            {submitted && !username &&
                                                <div className="help-block">Username is required</div>
                                            }
                                        </div> 
                                    </div>
                                    <div className="col-12">
                                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                            <input type="password" className="form-control border-0 bg-light px-4" placeholder="Enter Password" name="password" style={{height: '55px'}} value={password} onChange={this.handleChange} />
                                            {submitted && !password &&
                                                <div className="help-block">Password is required</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <button className="btn btn-primary w-100 py-3">Login</button>
                                            {loggingIn &&
                                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                            <Link to="/register" className="btn btn-link">Register</Link>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            {/* <!-- Login End --> */}

            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };

