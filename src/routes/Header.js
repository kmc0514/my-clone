import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

let detailIsOpen = false;
let detailID = null;

class Header extends React.Component {
  openDetailMenu(id) {
    const detailBox = document.getElementById("detail__box");
    const menuBox = document.getElementById("menu__box");

    if (!detailIsOpen) {
      detailIsOpen = true;
      detailBox.classList.remove("detail__close");
      detailBox.classList.add("detail__open");
      detailID = id;
      menuBox.innerHTML = this.showMenu(detailID);
    } else if (id !== detailID) {
      detailID = id;
      menuBox.innerHTML = this.showMenu(detailID);
    } else if (id === detailID) {
      this.closeDetailMenu();
    }
  }

  closeDetailMenu() {
    const detailBox = document.getElementById("detail__box");
    detailIsOpen = false;
    detailBox.classList.remove("detail__open");
    detailBox.classList.add("detail__close");
  }

  showMenu(id) {
    switch (id) {
      case 0:
        return `<div class="detail__menu">
              <a href="#">Polic 사용법</a>
              <a href="#">Polic 수수료 및 정산</a>
            </div>
            <div class="detail__menu">
              <a href="#">수수료 제로 프로그램</a>
              <a href="#">Polic Pro 도전하기</a>
            </div>
            <div class="detail__menu">
              <a href="#">Polic 판매취소 서비스</a>
              <a href="#">Polic 분쟁해결</a>
              <a href="#">Polic 확장 앱</a>
            </div>`;
        break;
      case 1:
        return `<div class="detail__menu">
                <a href="#">비즈니스를 위한 Polic</a>
                <a href="#">클라우드 확장하기</a>
              </div>
              <div class="detail__menu">
                <a href="#">기획전 도전하기</a>
                <a href="#">설정 값 변경하기</a>
              </div>
              <div class="detail__menu">
                <a href="#">Polic 계정 연동하는 법</a>
                <a href="#">Polic 업체 수수료</a>
                <a href="#">Polic 안전거래</a>
              </div>`;
        break;
      case 2:
        return `<div class="detail__menu">
                  <a href="#">초상권 수집 방법</a>
                  <a href="#">클라우드 자동 구독</a>
                </div>
                <div class="detail__menu">
                  <a href="#">통합을 위한 개발자센터</a>
                  <a href="#">Polic 파트너를 통한 지원</a>
                </div>
                <div class="detail__menu">
                  <a href="#">Polic 판매취소 서비스</a>
                  <a href="#">Polic 분쟁해결</a>
                  <a href="#">Polic 확장 앱</a>
                </div>`;
        break;
      default:
        console.log("load menu fail");
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__bar">
          <div className="header__box">
            <img
              className="header__logo"
              src={require("../images/logo_horizon.png")}
              alt="logo"
            />
            <ul className="header__menu">
              <li
                className="header__menu-items"
                onClick={() => {
                  this.openDetailMenu(0);
                }}
              >
                <span>개인</span>
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </li>
              <li
                className="header__menu-items"
                onClick={() => {
                  this.openDetailMenu(1);
                }}
              >
                <span>비즈니스</span>
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </li>
              <li
                className="header__menu-items"
                onClick={() => {
                  this.openDetailMenu(2);
                }}
              >
                <span>비즈니스 지원</span>
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </li>
            </ul>
            <div className="header__btn-box">
              <button>로그인</button>
              <button>회원가입</button>
            </div>
          </div>
        </div>
        <div id="detail__box" className="detail__close">
          <div id="menu__box" className="menu__box"></div>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              marginTop: "30px",
              width: "25px",
              height: "25px",
              cursor: "pointer"
            }}
            onClick={() => {
              this.closeDetailMenu();
            }}
          />
        </div>
      </header>
    );
  }
}

export default Header;
