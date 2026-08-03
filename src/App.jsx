import React from "react";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router";
import "./App.css"; // 작성한 CSS 파일 불러오기

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        {/* 상단 영역 */}
        <header className="header">
          <h1>홈페이지 프로젝트</h1>
        </header>

        {/* 하단 영역 (1:3 비율 레이아웃) */}
        <div className="content-body">
          {/* 하단 - 좌측: 메뉴 (1 비율) */}
          <nav className="sidebar">
            <div className="menu-list">
              <Link to="/home" className="menu-item">
                home
              </Link>
              <Link to="/study" className="menu-item">
                study
              </Link>
            </div>
          </nav>

          {/* 하단 - 우측: 내용 (3 비율) */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<h2>반갑습니다.</h2>} />
              <Route path="/study" element={<h2>React 학습 중입니다.</h2>} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
