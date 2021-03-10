
import React,{Component} from 'react';


class Theaters extends Component{
    render(){
    	return (
      	<div className="cumrap">
        <h4 id="cr" />
        <div className="nav flex-column nav-pills cot1" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active khung" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
            <img className="logorap" src="./image/anhtruyen/logo1.png" />
          </a>
          <a className="nav-link khung" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
            <img className="logorap" src="./image/anhtruyen/logo2.png" />
          </a>
          <a className="nav-link khung" id="v-pills-logo3-tab" data-toggle="pill" href="#v-pills-logo3" role="tab" aria-controls="v-pills-logo3" aria-selected="false">
            <img className="logorap" src="./image/anhtruyen/logo3.png" />
          </a>
          <a className="nav-link khung" id="v-pills-logo4-tab" data-toggle="pill" href="#v-pills-logo4" role="tab" aria-controls="v-pills-logo4" aria-selected="false">
            <img className="logorap" src="./image/anhtruyen/logo4.png" />
          </a>
          <a className="nav-link khung" id="v-pills-logo5-tab" data-toggle="pill" href="#v-pills-logo5" role="tab" aria-controls="v-pills-logo5" aria-selected="false">
            <img className="logorap" src="./image/anhtruyen/logo5.jpg" />
          </a>
          <a className="nav-link khung" id="v-pills-logo6-tab" data-toggle="pill" href="#v-pills-logo6" role="tab" aria-controls="v-pills-logo6" aria-selected="false">
            <img className="logorap" src="./image/anhtruyen/logo6.png" />
          </a>
        </div>
        <div className="tab-content cot2" id="v-pills-tabContent" style={{height: '705px', width: '848px'}}>
          <div className="tab-pane fade show active cumrap1" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div className="nav flex-column nav-pills tenrap" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active danhsachrap" id="v-pills-home1-tab" data-toggle="pill" href="#v-pills-home1" role="tab" aria-controls="v-pills-home1" aria-selected="true">
                <img src="./image/anhtruyen/rap1.jpg" className="cinema-img" style={{display: 'inline-block'}} />  
                <span className="diachi">
                  <span className="nameMovieCinema ng-binding ng-scope">
                    <span className="colorCinema BHD Star">BHD Star</span>
                    - Bitexco</span>
                  <span className="infoMovieCinema ng-binding">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                  <span className="redDetail showingDetailCinema" data-id={28}>[chi tiết]
                  </span>
                </span>
              </a>
              <a className="nav-link danhsachrap" id="v-pills-profile1-tab" data-toggle="pill" href="#v-pills-profile1" role="tab" aria-controls="v-pills-profile1" aria-selected="false">
                <img src="./image/anhtruyen/rap2.jpg" className="cinema-img" />
                <span className="diachi">
                  <span className="nameMovieCinema ng-binding ng-scope">
                    <span className="colorCinema BHD Star">BHD Star</span>
                    - Vincom Thảo Điền</span>
                  <span className="infoMovieCinema ng-binding">L5-Megamall, 159 XL Hà Nội, Q.2</span>
                  <span className="redDetail showingDetailCinema" data-id={28}>[chi tiết]
                  </span>
                </span>
              </a>
              <a className="nav-link danhsachrap" id="v-pills-rap3-tab" data-toggle="pill" href="#v-pills-rap3" role="tab" aria-controls="v-pills-profile1" aria-selected="false">
                <img src="./image/anhtruyen/rap3.jpg" className="cinema-img" />
                <span className="diachi">
                  <span className="nameMovieCinema ng-binding ng-scope">
                    <span className="colorCinema BHD Star">BHD Star</span>
                    - Vincom 3/2</span>
                  <span className="infoMovieCinema ng-binding">L5-Vincom 3/2, 3C Đường 3/2, Q.10</span>
                  <span className="redDetail showingDetailCinema" data-id={28}>[chi tiết]
                  </span>
                </span>
              </a>
              <a className="nav-link danhsachrap" id="v-pills-rap4-tab" data-toggle="pill" href="#v-pills-rap4" role="tab" aria-controls="v-pills-profile1" aria-selected="false">
                <img src="./image/anhtruyen/rap4.jpg" className="cinema-img" />
                <span className="diachi">
                  <span className="nameMovieCinema ng-binding ng-scope">
                    <span className="colorCinema BHD Star">BHD Star</span>
                    - Phạm Hùng</span>
                  <span className="infoMovieCinema ng-binding">L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh</span>
                  <span className="redDetail showingDetailCinema" data-id={28}>[chi tiết]
                  </span>
                </span>
              </a>
              <a className="nav-link danhsachrap" id="v-pills-rap5-tab" data-toggle="pill" href="#v-pills-rap5" role="tab" aria-controls="v-pills-profile1" aria-selected="false">
                <img src="./image/anhtruyen/rap5.jpg" className="cinema-img" />
                <span className="diachi">
                  <span className="nameMovieCinema ng-binding ng-scope">
                    <span className="colorCinema BHD Star">BHD Star</span>
                    - Vincom Lê Văn Việt</span>
                  <span className="infoMovieCinema ng-binding">L4-Vincom Plaza, 50 Lê Văn Việt, Q.9</span>
                  <span className="redDetail showingDetailCinema" data-id={28}>[chi tiết]
                  </span>
                </span>
              </a>
              <a className="nav-link danhsachrap" id="v-pills-rap6-tab" data-toggle="pill" href="#v-pills-rap6" role="tab" aria-controls="v-pills-profile1" aria-selected="false">
                <img src="./image/anhtruyen/rap6.jpg" className="cinema-img" />
                <span className="diachi">
                  <span className="nameMovieCinema ng-binding ng-scope">
                    <span className="colorCinema BHD Star">BHD Star</span>
                    - Vincom Quang Trung</span>
                  <span className="infoMovieCinema ng-binding">B1-Vincom QT, 190 Quang Trung, Gò Vấp</span>
                  <span className="redDetail showingDetailCinema" data-id={28}>[chi tiết]
                  </span>
                </span>
              </a>
            </div>
            <div className="tab-content lichchieufilm" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home1" role="tabpanel" aria-labelledby="v-pills-home1-tab">
                <div className="movie">
                  <div>
                    <img src="./image/anhtruyen/movie1.png" className="movieImage" />
                    <div className="wrapInfo">
                      <p>
                        <span className="ng-binding ageType">
                          C13
                        </span>
                        <span className="movieTitle ng-binding">Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 </span>
                      </p>
                      <p className="ng-binding">100 phút - TIX 7.2 - IMDb 0</p>
                    </div>
                  </div>
                  <div className="movieTime">
                    <div className="typeTime">
                      <div className="type">2D Digital</div>
                      <div className="session">
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">22:05</span> ~ 23:45
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="movie">
                  <div>
                    <img src="./image/anhtruyen/movie2.png" className="movieImage" />
                    <div className="wrapInfo">
                      <p>
                        <span className="ng-binding ageType">
                          C13
                        </span>
                        <span className="movieTitle ng-binding">Cuộc Sống Nhiệm Màu - Soul - </span>
                      </p>
                      <p className="ng-binding">100 phút - TIX 9 - IMDb 8</p>
                    </div>
                  </div>
                  <div className="movieTime">
                    <div className="typeTime">
                      <div className="type">2D Digital</div>
                      <div className="session">
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">21:05</span>~ 22:45
                        </a>
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">22:50</span> ~ 00:30
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="movie">
                  <div>
                    <img src="./image/anhtruyen/movie3.png" className="movieImage" />
                    <div className="wrapInfo">
                      <p>
                        <span className="ng-binding ageType">
                          C18
                        </span>
                        <span className="movieTitle ng-binding">Chị Mười Ba: 3 Ngày Sinh Tử </span>
                      </p>
                      <p className="ng-binding">100 phút - TIX 8 - IMDb 0</p>
                    </div>
                  </div>
                  <div className="movieTime">
                    <div className="typeTime">
                      <div className="type">2D Digital</div>
                      <div className="session">
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">21:05</span>~ 22:45
                        </a>
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">23:59</span>  ~ 01:39
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-profile1" role="tabpanel" aria-labelledby="v-pills-profile1-tab">
                <div className="movie">
                  <div>
                    <img src="./image/anhtruyen/movie2.png" className="movieImage" />
                    <div className="wrapInfo">
                      <p>
                        <span className="ng-binding ageType">
                          C13
                        </span>
                        <span className="movieTitle ng-binding">Cuộc Sống Nhiệm Màu - Soul - </span>
                      </p>
                      <p className="ng-binding">100 phút - TIX 9 - IMDb 8</p>
                    </div>
                  </div>
                  <div className="movieTime">
                    <div className="typeTime">
                      <div className="type">2D Digital</div>
                      <div className="session">
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">21:05</span>~ 22:45
                        </a>
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">22:50</span> ~ 00:30
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="movie">
                  <div>
                    <img src="./image/anhtruyen/movie3.png" className="movieImage" />
                    <div className="wrapInfo">
                      <p>
                        <span className="ng-binding ageType">
                          C18
                        </span>
                        <span className="movieTitle ng-binding">Chị Mười Ba: 3 Ngày Sinh Tử </span>
                      </p>
                      <p className="ng-binding">100 phút - TIX 8 - IMDb 0</p>
                    </div>
                  </div>
                  <div className="movieTime">
                    <div className="typeTime">
                      <div className="type">2D Digital</div>
                      <div className="session">
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">21:05</span>~ 22:45
                        </a>
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">23:59</span>  ~ 01:39
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-rap3" role="tabpanel" aria-labelledby="v-pills-rap3-tab">
                <div className="movie">
                  <div>
                    <img src="./image/anhtruyen/movie2.png" className="movieImage" />
                    <div className="wrapInfo">
                      <p>
                        <span className="ng-binding ageType">
                          C13
                        </span>
                        <span className="movieTitle ng-binding">Cuộc Sống Nhiệm Màu - Soul - </span>
                      </p>
                      <p className="ng-binding">100 phút - TIX 9 - IMDb 8</p>
                    </div>
                  </div>
                  <div className="movieTime">
                    <div className="typeTime">
                      <div className="type">2D Digital</div>
                      <div className="session">
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">21:05</span>~ 22:45
                        </a>
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">22:50</span> ~ 00:30
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="movie">
                  <div>
                    <img src="./image/anhtruyen/movie3.png" className="movieImage" />
                    <div className="wrapInfo">
                      <p>
                        <span className="ng-binding ageType">
                          C18
                        </span>
                        <span className="movieTitle ng-binding">Chị Mười Ba: 3 Ngày Sinh Tử </span>
                      </p>
                      <p className="ng-binding">100 phút - TIX 8 - IMDb 0</p>
                    </div>
                  </div>
                  <div className="movieTime">
                    <div className="typeTime">
                      <div className="type">2D Digital</div>
                      <div className="session">
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">21:05</span>~ 22:45
                        </a>
                        <a className="sessionTime">
                          <span className="s-start-time ng-binding">23:59</span>  ~ 01:39
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-rap4" role="tabpanel" aria-labelledby="v-pills-rap4-tab">
              </div>
              <div className="tab-pane fade" id="v-pills-rap5" role="tabpanel" aria-labelledby="v-pills-rap5-tab">
              </div>
              <div className="tab-pane fade" id="v-pills-rap6" role="tabpanel" aria-labelledby="v-pills-rap6-tab">
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-logo3" role="tabpanel" aria-labelledby="v-pills-logo3-tab">test2</div>
          <div className="tab-pane fade" id="v-pills-logo4" role="tabpanel" aria-labelledby="v-pills-logo4-tab">test3</div>
        </div>
      </div>
  );
  }
}
  
export default Theaters;
