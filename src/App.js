import React, { Component } from 'react';
import Header from './components/Header';
import Scheduling from './components/Scheduling';
import Introduction from './components/Introduction';
import Theaters from './components/Theaters';
import News from './components/News';
import Apps from './components/Apps';
import Footer from './components/Footer';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import './reg.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div >
                <Router>
                    <Switch>
                        {/* <Route exact path="/" component={App} /> */}
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />

                        <div className="root">
                            <Header />
                            <div className="container" id="home">
                                <Scheduling />
                                <Introduction />
                                <Theaters />
                                <News />

                            </div>
                            <div>
                            <Apps />
                            <div className="footer">
                                <Footer />

                            </div>
                        </div>
                        </div>
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default App;
