import React, { Component } from 'react';
import Header from './components/Header';
import Datlich from './components/Datlich';
import Gioithieu from './components/Gioithieu';
import Cumrap from './components/Cumrap';
import Tintuc from './components/Tintuc';
import Ungdung from './components/Ungdung';
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
import './App.css';
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
                                <Datlich />
                                <Gioithieu />
                                <Cumrap />
                                <Tintuc />

                            </div>
                            <div>
                            <Ungdung />
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
