import React, { Component } from 'react'
import {
    Redirect
} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import axios from 'axios';
import { useHistory } from "react-router-dom";


export default class Register extends Component {
    constructor(props) {
        super(props);
        let done = false
        this.state = {
            account: []
        }

        this.state = {
            id: '',
            usename: '',
            email: '',
            password: '',
            repassword: '',
            done
        }


        this.onChange = this.onChange.bind(this)
        this.onSave = this.onSave.bind(this)

    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value

        this.setState({
            [name]: value
        })



    }

    onSave = (e) => {

        e.preventDefault();
        console.log(this.state)
        var { usename, email, password, repassword } = this.state;
        for (const ten of this.state.account) {
            if (usename === ten.usename) {
                break
            }
            else if (this.state.account[this.state.account.length - 1] === ten) {
                axios.post('https://sever-json.herokuapp.com/accounts', {
                    usename: usename,
                    password: password,
                    email: email
                })
                    .then(res=> {
                        this.setState({
                            done: true
                        });

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                

            }


        }
    }


    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://sever-json.herokuapp.com/accounts',
            data: null
        })
            .then(res => {

                this.setState({
                    account: res.data
                });

            }).catch(function (error) {
                console.log(error);
            });

    }

    render() {
        var { usename, email, password, repassword } = this.state;
        if (this.state.done) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div id="login-reg">
                <div className="nen">
                    <div className="main-w3layouts wrapper">
                        <h1>Đăng ký</h1>
                        <div className="main-agileinfo">
                            <div className="agileits-top">
                                <form action="#" method="post" onSubmit={this.onSave}>
                                    <input className="text" type="text" name="usename" placeholder="Username" value={usename} onChange={this.onChange} required />
                                    <input className="text email" type="email" name="email" placeholder="Email" value={email} onChange={this.onChange} required />
                                    <input className="text w3lpass" type="password" name="password" placeholder="Password" value={password} onChange={this.onChange} required />
                                    <div className="wthree-text">
                                        <label className="anim">
                                            <input type="checkbox" className="checkbox" required />
                                            <span> &ensp; Tôi đồng ý với các Điều Khoản &amp; Điều Kiện</span>
                                        </label>
                                        <div className="clear"> </div>
                                    </div>
                                    <button type="submit" defaultValue="SIGNUP"  >Đăng Ký</button>
                                </form>
                                <p>Bạn đã có tài khoản?&ensp;
                <Link to="/login">Đăng nhập ngay!</Link>
                                </p>
                            </div>
                        </div>
                        {/* copyright */}
                        <div className="colorlibcopy-agile">
                            <p>Copyright © Tix.vn 2021</p>
                        </div>
                        {/* //copyright */}
                        <ul className="colorlib-bubbles">
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>
                </div>
            </div>


        )
    }
}
