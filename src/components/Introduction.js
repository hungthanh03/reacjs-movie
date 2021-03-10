
import React,{Component} from 'react';


class Introduction extends Component{
    render(){
    	return (
         <div className="gioithieu">
        <h4 id="lc" />
        <div className="gioithieutong col-xs-12" id="gioithieutongg">
          <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
            <li className="nav-item" style={{marginRight: '5px'}}>
              <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Đang chiếu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Sắp chiếu</a>
            </li>
          </ul>
          <div className="tab-content danhsachchieu" id="pills-tabContent">
            <div className="tab-pane fade show active danhsachchieu1" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div id="carouselExampleControls" className="carousel slide danhsachchieu1" data-ride="carousel" data-interval="false">
                <div className="carousel-inner danhsachchieu1">
                  <div className="carousel-item active danhsachchieu1">
                    <div className="w-100 danhsachchieu1">
                      <div className="hang1">
                        <div className="film" style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau1.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">8.9</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general">P</span>
                              Gia Đình Croods: Kỷ Nguyên Mới - The Croods: New Age (P)
                            </div>
                            <div className="info-time">95 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau2.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">8.5</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C18</span>
                              Tiệc Trăng Máu - Blood Moon Party (C18)
                            </div>
                            <div className="info-time">100 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau3.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">8</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general">P</span>
                              Cuộc Chiến Hủy Diệt - Skylines (C18)
                            </div>
                            <div className="info-time">114 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau4.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">7</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C16</span>
                              Tội Ác Thinh Lặng - Stone Skipping (C16)
                            </div>
                            <div className="info-time">107 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="hang2">
                        <div className="film" style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau5.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">8</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C13</span>
                              Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)
                            </div>
                            <div className="info-time">100 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau6.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">7</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C13</span>
                              Thanh Gươm Diệt Quỷ - Chuyến Tàu Vô Tận (C13)
                            </div>
                            <div className="info-time">117 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau7.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">8.6</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C18</span>
                              Nghề Siêu Khó - Extreme Job (C18)
                            </div>
                            <div className="info-time">111 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau8.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">9</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C18</span>
                              Chị Mười Ba: 3 Ngày Sinh Tử (C18)
                            </div>
                            <div className="info-time">100 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="w-100 danhsachchieu1">
                      <div className="hang2">
                        <div className="film" style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau5.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">8</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C13</span>
                              Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)
                            </div>
                            <div className="info-time">100 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau6.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">7</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C13</span>
                              Thanh Gươm Diệt Quỷ - Chuyến Tàu Vô Tận (C13)
                            </div>
                            <div className="info-time">117 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau7.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">8.6</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C18</span>
                              Nghề Siêu Khó - Extreme Job (C18)
                            </div>
                            <div className="info-time">111 phút</div>
                          </div>
                        </div>
                        <div className="film " style={{width: '25%', display: 'inline-block'}}>
                          <a href="#">
                            <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau8.png)'}}>
                              <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                                <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                              </div>
                              <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                                <p className="txtPoint ng-binding">9</p>
                                <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                  <img className="smallStar" src="./image/anhtruyen/star1.png" />
                                </p></span></div>
                          </a>
                          <div className="info">
                            <div className="info-name">
                              <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C18</span>
                              Chị Mười Ba: 3 Ngày Sinh Tử (C18)
                            </div>
                            <div className="info-time">100 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="film" style={{width: '25%', display: 'inline-block'}}>
                      <a href="#">
                        <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau5.png)'}}>
                          <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                            <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                          </div>
                        </div>
                      </a>
                      <div className="info">
                        <div className="info-name">
                          <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C13</span>
                          Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)
                        </div>
                        <div className="info-time">100 phút</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only" />
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only" />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="hang1">
                <div className="film" style={{width: '25%', display: 'inline-block'}}>
                  <a href="#">
                    <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau1.png)'}}>
                      <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                        <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                      </div>
                      <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                        <p className="txtPoint ng-binding">8.9</p>
                        <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                        </p></span></div>
                  </a>
                  <div className="info">
                    <div className="info-name">
                      <span className="ng-binding ageType ageType-general">P</span>
                      Gia Đình Croods: Kỷ Nguyên Mới - The Croods: New Age (P)
                    </div>
                    <div className="info-time">95 phút</div>
                  </div>
                </div>
                <div className="film " style={{width: '25%', display: 'inline-block'}}>
                  <a href="#">
                    <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau2.png)'}}>
                      <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                        <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                      </div>
                      <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                        <p className="txtPoint ng-binding">8.5</p>
                        <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                        </p></span></div>
                  </a>
                  <div className="info">
                    <div className="info-name">
                      <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C18</span>
                      Tiệc Trăng Máu - Blood Moon Party (C18)
                    </div>
                    <div className="info-time">100 phút</div>
                  </div>
                </div>
                <div className="film " style={{width: '25%', display: 'inline-block'}}>
                  <a href="#">
                    <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau3.png)'}}>
                      <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                        <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                      </div>
                      <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                        <p className="txtPoint ng-binding">8</p>
                        <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                        </p></span></div>
                  </a>
                  <div className="info">
                    <div className="info-name">
                      <span className="ng-binding ageType ageType-general">P</span>
                      Cuộc Chiến Hủy Diệt - Skylines (C18)
                    </div>
                    <div className="info-time">114 phút</div>
                  </div>
                </div>
                <div className="film " style={{width: '25%', display: 'inline-block'}}>
                  <a href="#">
                    <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau4.png)'}}>
                      <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                        <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                      </div>
                      <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                        <p className="txtPoint ng-binding">7</p>
                        <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                        </p></span></div>
                  </a>
                  <div className="info">
                    <div className="info-name">
                      <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C16</span>
                      Tội Ác Thinh Lặng - Stone Skipping (C16)
                    </div>
                    <div className="info-time">107 phút</div>
                  </div>
                </div>
              </div>
              <div className="hang2">
                <div className="film" style={{width: '25%', display: 'inline-block'}}>
                  <a href="#">
                    <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau5.png)'}}>
                      <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                        <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                      </div>
                      <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                        <p className="txtPoint ng-binding">8</p>
                        <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                        </p></span></div>
                  </a>
                  <div className="info">
                    <div className="info-name">
                      <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C13</span>
                      Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)
                    </div>
                    <div className="info-time">100 phút</div>
                  </div>
                </div>
                <div className="film " style={{width: '25%', display: 'inline-block'}}>
                  <a href="#">
                    <div className="mauphim" style={{backgroundImage: 'url(./image/anhtruyen/mau6.png)'}}>
                      <div className="hoverInfo showHover showingDetail test" data-id={2351} data-slug="2351-tiec-trang-mau">
                        <button className="playTrailer ng-scope" type="button" tabIndex={0}><img className="buttonplay" src="./image/anhtruyen/play.png" /></button>
                      </div>
                      <span ng-if="film.avg_point !== 0" className="avgPoint ng-scope">
                        <p className="txtPoint ng-binding">7</p>
                        <p ng-bind-html="setStar(film.avg_point)" className="ng-binding">
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                          <img className="smallStar" src="./image/anhtruyen/star1.png" />
                        </p></span></div>
                  </a>
                  <div className="info">
                    <div className="info-name">
                      <span className="ng-binding ageType ageType-general" style={{backgroundColor: 'red', color: '#ddd'}}>C13</span>
                      Thanh Gươm Diệt Quỷ - Chuyến Tàu Vô Tận (C13)
                    </div>
                    <div className="info-time">117 phút</div>
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
  
export default Introduction;
