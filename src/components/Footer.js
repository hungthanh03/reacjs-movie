import React, { Component } from 'react';

class Footer extends Component{
   render(){
      return (
         <div className="col-xs-12 block ng-scope" id="footer" ng-if="!isHideFooter">
        <div className="mainMaxWidth">
          <div className="row2021">
            <div className="col-sm-4 col-xs-12 test100">
              <p className="title hideOnMobile">TIX</p>
              <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                <a>FAQ</a>
                <a>Brand Guidelines</a>
              </div>
              <div className="col-sm-6 col-xs-12 noPaddingLeft fontSizeP ng-scope" ng-if="!isMobile">
                <a ui-sref="main.term" href="/thoa-thuan-su-dung">Thỏa thuận sử dụng</a>
                <a ui-sref="main.policy" href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 hideOnMobile">
              <p className="title">ĐỐI TÁC</p>
              <div className="row2021 col-sm-12 col-xs-12 linePartner">
                <img className="iconConnect" src="./image/anhtruyen/cgv.png" style={{backgroundColor: '#fff'}} />
                <img className="iconConnect" src="./image/anhtruyen/logo1.png" />
                <img className="iconConnect" src="./image/anhtruyen/galaxycine.png" />
                <img className="iconConnect" src="./image/anhtruyen/logo2.png" />
                <img className="iconConnect" src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" />
              </div>
              <div className="row2021 col-sm-12 col-xs-12 linePartner">
                <img className="iconConnect" src="./image/anhtruyen/logo4.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/1.jpg" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/2.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/3.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/4.jpg" />
              </div>
              <div className="row2021 col-sm-12 col-xs-12 linePartner">
                <img className="iconConnect" src="./image/anhtruyen/doitac/5.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/6.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/7.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/8.jpg" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/9.png" />
              </div>
              <div className="row2021 col-sm-12 col-xs-12 linePartner">
                <img className="iconConnect" src="./image/anhtruyen/doitac/10.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/11.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/12.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/13.png" />
                <img className="iconConnect" src="./image/anhtruyen/doitac/14.png" />
              </div>
            </div>
            <div className="row2021 col-sm-4 col-xs-12">
              <div className="col-xs-6 hideOnMobile textCenter">
                <p className="title">MOBILE APP</p>
                <img className="iconApp" src="./image/anhtruyen/doitac/apple-logo.png" />
                <img className="iconApp" src="./image/anhtruyen/doitac/android-logo.png" />
              </div>
              <div className="col-xs-6 textCenter">
                <p className="title hideOnMobile">SOCIAL</p>
                <img className="iconApp" src="./image/anhtruyen/doitac/facebook-logo.png" />
                <img className="iconApp" src="./image/anhtruyen/doitac/zalo-logo.png" />
              </div>
            </div>
          </div>
          <div className="row2021">
            <div className="col-sm-1 col-xs-12 imgFooter">
              <img className="vngIcon" src="./image/anhtruyen/zion-logo.jpg" style={{borderRadius: '8px'}} />
            </div>
            <div className="col-sm-9 col-xs-12 infoFooter">
              <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
              <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
              <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />đăng ký thay đổi lần&nbsp;thứ&nbsp;30, ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020  do Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp.</span>
              <span>Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436<br />Email: <a href="mailto:support@tix.vn" style={{color: '#FB4226'}}>support@tix.vn</a></span>
            </div>
            <div className="col-sm-2 col-xs-12 imgFooter">
              <img className="imgBoCo" alt="Bộ Công Thương" title src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" />
            </div>
          </div>
        </div>
      </div>

      );
   }
}

export default Footer;


