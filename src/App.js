import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from "./helpers";
import { PrivateRoute } from "./components";
import { alertActions } from "./actions";
import { connect } from 'react-redux';

import { HomePage } from './HomePage';
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import {Header} from "./Header";
import {Footer} from "./Footer";
import { Slider } from "./Slider";


class App extends React.Component{
    constructor(props){
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    };
    render(){
        const { alert } = this.props;
        return(
                <div>
                    <Header />
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/slider" component={Slider} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    <Footer /> 
            </div>
        );
    }
}
    function mapState(state) {
        const { alert } = state;
        return { alert };
    }
    
    const actionCreators = {
        clearAlerts: alertActions.clear
    };

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
