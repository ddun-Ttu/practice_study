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
  let [title, b] = useState(["남자 코드 추천", "강남 맛집", "데이트 명소"]);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
