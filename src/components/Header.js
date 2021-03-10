import React, { Component } from 'react';
import {
  Link,
  Redirect
} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    this.state = {
      account: []
    }
    let loggedIn = true
    if (token == null) {
      loggedIn = false
    }
    this.state = {
      loggedIn
    }
   

  }

  logout=()=>{
    localStorage.removeItem("token")
    
    this.setState({
        loggedIn: false
    })
}
  render() {
    return (
        <div className="header">
          <div className="topbar">
            <a>
              <img className="webLogo" src="./image/head1.png" />
            </a>
            <div className="topbar-center" id="headMenu">
              <nav id="navbar-example2" className="navbar navbar-light bg-light">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a className="nav-link lcp" href="#lc">Lịch Chiếu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link lcp" href="#cr">Cụm Rạp</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link lcp" href="#tt">Tin Tức</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link lcp" href="#ud">Ứng Dụng</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="topbar-right">
              <div id="accout">
                <div><img className="avatar" width="16px" height="16px" src="./image/avatar.png" /></div>
                <div >
                  {this.state.loggedIn === false ?
                    <div id="tendangnhap">
                    
                        <Link id="tendangnhap" to="/login">Đăng Nhập</Link>
                     
                    </div>
                    :
                    <div>
                      <a>Xin Chào {JSON.parse(localStorage.getItem("usename"))} </a>
                      <button onClick={this.logout}>Đăng xuất</button>
                    </div>
                  }
                </div>
              </div>
              <div className="localhcm" id="idlocal" >
                <div id="iconid"><img id="local" width="16px" height="16px" src="./image/local.png" /></div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hồ Chí Minh </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Hà Nội</a>
                    <a className="dropdown-item" href="#">Đà Nẵng</a>
                    <a className="dropdown-item" href="#">Đaklak</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="quangcao18">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="dog carousel-item active">
                  <img className="cat d-block" src="./image/anhtruyen/anh1.jpg" />
                </div>
                <div className="dog carousel-item">
                  <img className="cat d-block" src="./image/anhtruyen/anh2.jpg" />
                </div>
                <div className="dog carousel-item">
                  <img className="cat d-block" src="./image/anhtruyen/anh3.png" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
