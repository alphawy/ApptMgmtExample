import React, { Component } from "react";
import { AppDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AppConnector } from "./app/AppConnector";

export default class App extends Component {
    render() {
        return <Provider store={ AppDataStore }>
            <Router>
                <Switch>
                    <Route path="/appointment" component={ AppConnector } />
                    <Redirect to="/appointment" />
                </Switch>
            </Router>
        </Provider>
    }
}
