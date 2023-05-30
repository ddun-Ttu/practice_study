/* eslint-disable */

import star from "./img/star.svg";
import map from "./img/map.svg";
import miniLogo from "./img/miniLogo.svg";
import myInfo from "./img/myInfo.svg";
import reservation from "./img/reservation.svg";

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "자바스크립트 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    따봉변경(따봉 + 1);
  }

  function a() {
    let copy = [...글제목];
    copy[0] = "여자옷 추천";
    글제목변경(copy);
  }

  return (
    <div className="styleConteiner">
      <div className="aaa"></div>
      <button className="styleButton">추가하기</button>

      <div className="aaa"></div>
      <nav className="styleNavBar">
        <ul className="styleUl">
          <li>
            <a href="#">
              <img className="navImg" src={reservation} alt="star" />
              <p>예약현황</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img className="navImg" src={map} alt="star" />
              <p>병원찾기</p>
            </a>
          </li>
          <li className="navMiniLogo">
            <a href="#">
              <img src={miniLogo} alt="star" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="navImg" src={star} alt="star" />
              <p>즐겨찾기</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img className="navImg" src={myInfo} alt="star" />
              <p>내정보</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    // <div className="App">
    //   <div className="black-nav">
    //     <h4 style={{ color: "red", fontSize: "16px" }}>블로그</h4>
    //   </div>
    //   <div className="list">
    //     <h4>
    //       {글제목[0]} <span onClick={함수}>좋아요🥰</span> {따봉}
    //     </h4>
    //     <p>2월 17일 발행</p>
    //   </div>
    //   <div className="list">
    //     <h4>{글제목[1]}</h4>
    //     <p>2월 17일 발행</p>
    //   </div>
    //   <div className="list">
    //     <h4>{글제목[2]}</h4>
    //     <p>2월 17일 발행</p>
    //   </div>
    //   <button onClick={a}>클릭</button>
    // </div>
  );
}

export default App;
