
import React,{Component} from 'react';


class News extends Component{
    render(){
    	return (
      	<div className="tintuc">
        <h4 id="tt" />
        <div className="trang">
          <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="pills-home1-tab" data-toggle="pill" href="#pills-home1" role="tab" aria-controls="pills-home1" aria-selected="true">Điện Ảnh 24h</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-profile1-tab" data-toggle="pill" href="#pills-profile1" role="tab" aria-controls="pills-profile1" aria-selected="false">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-contact1-tab" data-toggle="pill" href="#pills-contact1" role="tab" aria-controls="pills-contact1" aria-selected="false">Khuyến Mãi</a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home1-tab">
              <div className="tin1">
                <div className="row1">
                  <div className="hinhnen">
                    <img src="./image/anhtruyen/tin1.jpg" />
                  </div>
                  <p className="newsTitle ng-binding">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                  <p className="newsDescription ng-binding ng-scope">Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng! </p>
                  <div className="blockIconFacebook ng-scope">
                    <div className="wrapIcon like">
                      <img className="iconFacebook postLike" src="./image/anhtruyen/like.png" />
                      <p className="amount like ng-binding">1</p>
                    </div>
                    <div className="wrapIcon comment">
                      <img src="./image/anhtruyen/comment.png" className="iconFacebook postCmt" />
                      <p className="amount comment ng-binding">0</p>
                    </div>
                  </div>
                </div>
                <div className="row1 row1-1">
                  <div className="hinhnen">
                    <img src="./image/anhtruyen/tin2.png" />
                  </div>
                  <p className="newsTitle ng-binding">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                  <p className="newsDescription ng-binding ng-scope">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. </p>
                  <div className="blockIconFacebook ng-scope">
                    <div className="wrapIcon like">
                      <img className="iconFacebook postLike" src="./image/anhtruyen/like.png" />
                      <p className="amount like ng-binding">1</p>
                    </div>
                    <div className="wrapIcon comment">
                      <img src="./image/anhtruyen/comment.png" className="iconFacebook postCmt" />
                      <p className="amount comment ng-binding">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tin2" id="abc" >
                <div className="tin1">
                  <div className="row12">
                    <div className="hinhnen12">
                      <img className="hinhanh12" src="./image/anhtruyen/tin3.jpg" />
                    </div>
                    <p className="newsTitle ng-binding anhnho">“NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</p>
                    <p className="newsDescription ng-binding ng-scope anhnho">Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60 triệu đồng. </p>
                    <div className="blockIconFacebook ng-scope anhnho">
                      <div className="wrapIcon like">
                        <img className="iconFacebook postLike" src="./image/anhtruyen/like.png" />
                        <p className="amount like ng-binding">1</p>
                      </div>
                      <div className="wrapIcon comment">
                        <img src="./image/anhtruyen/comment.png" className="iconFacebook postCmt" />
                        <p className="amount comment ng-binding">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="row12 row123">
                    <div className="hinhnen12">
                      <img className="hinhanh12" src="./image/anhtruyen/tin4.png" />
                    </div>
                    <p className="newsTitle ng-binding anhnho">[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</p>
                    <p className="newsDescription ng-binding ng-scope anhnho">Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante</p>
                    <div className="blockIconFacebook ng-scope anhnho">
                      <div className="wrapIcon like">
                        <img className="iconFacebook postLike" src="./image/anhtruyen/like.png" />
                        <p className="amount like ng-binding">1</p>
                      </div>
                      <div className="wrapIcon comment">
                        <img src="./image/anhtruyen/comment.png" className="iconFacebook postCmt" />
                        <p className="amount comment ng-binding">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="row12 row1234">
                    <div className="hinhnen12">
                      <img className="hinhanh12" src="./image/anhtruyen/tin5.jpg" />
                    </div>
                    <p className="newsTitle ng-binding anhnho">Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</p>
                    <p className="newsDescription ng-binding ng-scope anhnho" />
                    <div className="blockIconFacebook ng-scope anhnho">
                      <div className="wrapIcon like">
                        <img className="iconFacebook postLike" src="./image/anhtruyen/like.png" />
                        <p className="amount like ng-binding">1</p>
                      </div>
                      <div className="wrapIcon comment">
                        <img src="./image/anhtruyen/comment.png" className="iconFacebook postCmt" />
                        <p className="amount comment ng-binding">0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile1-tab">
              <div className="tin1">
                <div className="row1">
                  <div className="hinhnen">
                    <img src="./image/anhtruyen/tin1.jpg" />
                  </div>
                  <p className="newsTitle ng-binding">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                  <p className="newsDescription ng-binding ng-scope">Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng! </p>
                  <div className="blockIconFacebook ng-scope">
                    <div className="wrapIcon like">
                      <img className="iconFacebook postLike" src="./image/anhtruyen/like.png" />
                      <p className="amount like ng-binding">1</p>
                    </div>
                    <div className="wrapIcon comment">
                      <img src="./image/anhtruyen/comment.png" className="iconFacebook postCmt" />
                      <p className="amount comment ng-binding">0</p>
                    </div>
                  </div>
                </div>
                <div className="row1">
                  <div className="hinhnen">
                    <img src="./image/anhtruyen/tin2.png" />
                  </div>
                  <p className="newsTitle ng-binding">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                  <p className="newsDescription ng-binding ng-scope">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. </p>
                  <div className="blockIconFacebook ng-scope">
                    <div className="wrapIcon like">
                      <img className="iconFacebook postLike" src="./image/anhtruyen/like.png" />
                      <p className="amount like ng-binding">1</p>
                    </div>
                    <div className="wrapIcon comment">
                      <img src="./image/anhtruyen/comment.png" className="iconFacebook postCmt" />
                      <p className="amount comment ng-binding">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab">
            </div>
            <div className="wrapButtonSeeMoreNews">
              <button className="btnViewMore ng-scope">XEM THÊM</button>
            </div>
          </div>
        </div>
      </div>
  );
  }
}
  
export default News;
