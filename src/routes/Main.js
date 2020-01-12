import React from "react";
import Slider from "../component/Slider";
import "./Main.css";

const googleBadge = require("../images/google-play-badge.png");
const appleBadge = require("../images/apple-badge-ko.png");

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Slider />
        <div className="sign__banner">
          <span>모바일 앱으로 폴릭 포토그래퍼를 시작하세요.</span>
          <div className="badge google">
            <a href="https://play.google.com/store/apps/details?id=com.tapicture.author">
              <img src={googleBadge} alt="play store"></img>
            </a>
          </div>
          <div className="badge apple">
            <a href="https://apps.apple.com/kr/app/%ED%8F%B4%EB%A6%AD-polic-%EB%82%B4-%EC%A3%BC%EB%B3%80-%EC%82%AC%EC%A7%84%EC%9E%91%EA%B0%80-%EC%B0%BE%EA%B8%B0/id1482378149">
              <img src={appleBadge} alt="App store"></img>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
