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


export default class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            accountIs: []
        }

        this.state = {
            usename: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const { usename, password } = this.state;
        const { accountIs } = this.state;



        for (const ten of accountIs) {
            if (
                usename === ten.usename && password === ten.password

            ) {
                const tendn = usename
                localStorage.setItem("token", "ajdlajdsajsldkjsald")
                localStorage.setItem("usename", JSON.stringify(usename))


                this.setState({
                    loggedIn: true
                }
                )


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
                    accountIs: res.data
                });
                console.log(res.data)

            }).catch(function (error) {
                console.log(error);
            })
            
        }
    

    render() {
        var { accountIs } = this.state;


        if (this.state.loggedIn) {
            return (
                <Redirect to="/"></Redirect>


            )

        }


        return (
            <div id="login-reg">
                <div className="nen">
                    <div className="main-w3layouts wrapper">
                        <h1>Đăng Nhập</h1>
                        <div className="main-agileinfo">
                            <div className="agileits-top">
                                <form action="#" method="post" onSubmit={this.submitForm}>
                                    <input className="text" type="text" placeholder="Usename" name="usename" value={this.state.usename} onChange={this.onChange} required /><br />
                                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required /><br />
                                    <div className="wthree-text">
                                        <label className="anim">
                                            <input type="checkbox" className="checkbox" />
                                            <span> &ensp; Lưu mật khấu</span>
                                        </label>
                                        <div className="clear"> </div>
                                    </div>
                                    <button type="submit" className="fadeIn fourth" defaultValue="Log In" >Đăng Nhập</button>
                                </form>
                                <p>Bạn chưa có tài khoản?&ensp;
                <Link to="/register">Đăng ký ngay!</Link>
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
