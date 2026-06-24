import React from "react";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router";

function App() {
  return (
    <HashRouter>
      {/* 전체를 감싸는 틀 */}
      <div style={{ width: "100%" }}>
        {/* =========================================================
            1. 상단 영역 (조건 1, 2)
            ========================================================= */}
        {/* (1)번 CSS 구현 필요: 상단 바 높이 설정 및 텍스트 가운데 정렬 필요 */}
        <header style={{ display: "block", width: "100%" }}>
          <h1>홈페이지 프로젝트</h1>
        </header>
        <hr /> {/* 구역 확인용 선 */}
        {/* =========================================================
            2. 하단 영역 (조건 1, 3)
            ========================================================= */}
        {/* (2)번 CSS 구현 필요: 좌측 메뉴와 우측 본문을 1:3 비율로 가로 배치(Flexbox 등) 필요 */}
        <div style={{ display: "block", width: "100%" }}>
          {/* [하단 - 좌측 영역: 메뉴] (조건 4) */}
          {/* (3)번 CSS 구현 필요: 전체 너비 중 25%(1의 비율)만큼 차지하고, 링크들을 세로 배열하는 스타일링 필요 */}
          <nav style={{ display: "block" }}>
            <div style={{ margin: "10px 0" }}>
              <Link to="/home">home</Link>
            </div>
            <div style={{ margin: "10px 0" }}>
              <Link to="/study">study</Link>
            </div>
          </nav>

          {/* [하단 - 우측 영역: 내용] (조건 5) */}
          {/* (4)번 CSS 구현 필요: 전체 너비 중 75%(3의 비율)만큼 차지하는 스타일링 필요 */}
          <main style={{ display: "block" }}>
            <Routes>
              {/* 첫 진입 시 /home으로 리다이렉트 */}
              <Route path="/" element={<Navigate to="/home" replace />} />

              {/* 주소에 따른 컴포넌트 마운트 */}
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
