
import React,{Component} from 'react';


class Ungdung extends Component{
    render(){
    	return (
      	<div className="ungdung">
        <h4 id="ud" />
        <div className="app col-xs-12 block" id="homeApp">
          <div className="mainMaxWidth">
            <div className="row">
              <div className="col-md-6 left text-left">
                <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                <p className="textLeft">người yêu điện ảnh</p>
                <br />
                <p className="textSmallLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                <br />
                <button className="buttonLeft">App miễn phí - Tải về ngay!</button>
                <p className="textAppUnder">TIX có hai phiên bản
                  <a className="tagA" target="_blank">iOS</a>
                  &amp;&nbsp;<a className="tagA" target="_blank">Android</a>
                </p>
              </div>
              <div className="col-md-6 right">
                <img className="img-responsive phone-img" src="./image/anhtruyen/mobile.png" alt="Loading..." />
                <div id="sliderScreen" className="wrapSlick slick-initialized slick-slider">
                  <div id="carouselExampleControls" className="carousel slide xoay" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src="./image/anhtruyen/app1.jpg" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="./image/anhtruyen/app2.jpg" alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="./image/anhtruyen/app3.jpg" alt="Third slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="./image/anhtruyen/app4.jpg" alt="Third slide" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
}
  
export default Ungdung;
