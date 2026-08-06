import React, { useState } from "react";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router";
import "./App.css"; // 작성한 CSS 파일 불러오기

function App() {
  // study 서브메뉴의 열림/닫힘 상태 관리 (기본값: false - 닫힘)
  const [isStudyOpen, setIsStudyOpen] = useState(false);

  // study 메뉴 클릭 시 토글 함수
  const toggleStudyMenu = (e) => {
    // 클릭 시 study 경로로 바로 이동하지 않고 서브메뉴만 열고 싶다면 아래 주석을 해제할 수 있습니다.
    // e.preventDefault();
    setIsStudyOpen((prev) => !prev);
  };

  return (
    <HashRouter>
      <div className="app-container">
        {/* 상단 영역 */}
        <header className="header">
          <h1>홈페이지 프로젝트</h1>
        </header>

        {/* 하단 영역 (1:3 비율 레이아웃) */}
        <div className="content-body">
          {/* 하단 - 좌측: 메뉴 */}
          <nav className="sidebar">
            <div className="menu-list">
              {/* Home 메뉴 */}
              <div className="menu-group">
                <Link to="/home" className="menu-item main-menu">
                  home
                </Link>
              </div>

              {/* 메인 메뉴 사이 구분선 */}
              <div className="menu-divider" />

              {/* Study 메뉴 및 서브메뉴 */}
              <div className="menu-group">
                <div
                  className="menu-item main-menu study-header"
                  onClick={toggleStudyMenu}
                >
                  <span>study</span>
                  <span className={`arrow ${isStudyOpen ? "open" : ""}`}>
                    ▼
                  </span>
                </div>

                {/* isStudyOpen이 true일 때만 서브메뉴 출력 */}
                {isStudyOpen && (
                  <div className="sub-menu-list">
                    <Link to="/study/1" className="menu-item sub-menu">
                      study1
                    </Link>
                    <Link to="/study/2" className="menu-item sub-menu">
                      study2
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* 하단 - 우측: 내용 */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<h2>반갑습니다.</h2>} />

              {/* Study 메인 및 서브 라우트 */}
              <Route
                path="/study"
                element={<h2>React 학습 중입니다. (Study 메인)</h2>}
              />
              <Route
                path="/study/1"
                element={<h2>Study 1: 기본 개념 학습</h2>}
              />
              <Route
                path="/study/2"
                element={<h2>Study 2: 고급 기능 학습</h2>}
              />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
