
import React,{Component} from 'react';


class Scheduling extends Component{
    render(){
    	return (
      	<div className="datlich">
               <div id="homeTools" className="hideOnMobile">
                  <div className="w30p widthByPercent dropdown selectFilm" id="selectMoive">
                     <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown" aria-expanded="false">Phim</div>
                     <ul className="dropdown-menu selectScroll">
                        <li ng-repeat="film in toolFilms" className="ng-scope">
                           <a ng-click="chooseMovie($event)" data-id="1981" data-name="Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)" className="ng-binding">Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)</a>
                        </li>
                        <li ng-repeat="film in toolFilms" className="ng-scope">
                           <a ng-click="chooseMovie($event)" data-id="2517" data-name="Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)" className="ng-binding">Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)</a>
                        </li>
                        <li ng-repeat="film in toolFilms" className="ng-scope">
                           <a ng-click="chooseMovie($event)" data-id="2524" data-name="Nghề Siêu Khó - Extreme Job (C18)" className="ng-binding">Nghề Siêu Khó - Extreme Job (C18)</a> 
                     	</li>
                     </ul>
                  </div>
                  <div className="smallBlock widthByPercent dropdown selectCinema">
                     <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown" aria-expanded="false">Rạp</div>
                     <ul className="dropdown-menu" >
                        <li ng-if="!isChoseMovie" className="ng-scope"><a className="ng-binding">Vui lòng chọn phim</a></li>
                     </ul>
                  </div>
                  <div className="smallBlock widthByPercent dropdown selectDate">
                     <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown">Ngày xem</div>
                     <ul className="dropdown-menu">
                        <li ng-if="!isChoseCinema" className="ng-scope"><a>Vui lòng chọn phim và rạp</a></li>
                     </ul>
                  </div>
                  <div className="smallBlock widthByPercent dropdown selectSession">
                     <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown">Suất chiếu</div>
                     <ul className="dropdown-menu">
                        <li ng-if="!isChoseDate" className="ng-scope"><a>Vui lòng chọn phim, rạp và ngày xem</a></li>
                     </ul>
                  </div>
                  <div className="smallBlock widthByPercent">
                     <div className="after-btn"></div>
                     <div className="before-btn"></div>
                     <button ng-click="buyTicket()" type="button" className="btn btn-primary" id="btnBuy" >MUA VÉ NGAY</button>
                  </div>
               </div>
            </div>
  );
  }
}
  
export default Scheduling;
