import React from "react";
import "./Slider.css";

const images = [
  {
    title: "사진활동을 시작하셨나요?",
    contents: "폴릭과 함께 풍부한 사진활동을 창의적으로 진행하세요.",
    url: require("../images/wallpaper.jpg"),
    button: "무료로 가입하기"
  },
  {
    title: "편하게 집중하세요.",
    contents:
      "잦은 고객응대와 불필요한 행정처리도 간편하게 처리할 수 있습니다.",
    url: require("../images/camera.jpg"),
    button: "지금 가입하기"
  }
];

const gradientLayer = `-webkit-linear-gradient(
  top,
  rgba(0, 0, 0, 0.65) 0%,
  rgba(0, 0, 0, 0) 100%
)`;

const loadSlideContents = e => {
  return (
    <li key={e.title} style={{ background: `${gradientLayer}, url(${e.url})` }}>
      <div className="slider__contents">
        <h1>{e.title}</h1>
        <p>{e.contents}</p>
        <a href="https://www.policweb.com">
          <span>{e.button}</span>
        </a>
      </div>
    </li>
  );
};

class Slider extends React.Component {
  render() {
    return <ul className="slider__box">{images.map(loadSlideContents)}</ul>;
  }
}

export default Slider;
