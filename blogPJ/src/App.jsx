import React from "react";
import "./App.css";

// 메인 화면
// 중요함
function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>홈페이지 프로젝트</h1>
        <p style={styles.subtitle}>반갑습니다</p>
      </header>
      <main style={styles.main}>
        <p>리액트 기반의 깃허브 블로그 프로젝트가 성공적으로 시작되었습니다!</p>
      </main>
    </div>
  );
}

// 간단한 인라인 스타일 정의
const styles = {
  container: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    textAlign: "center",
    padding: "40px 20px",
    color: "#333",
  },
  header: {
    backgroundColor: "#f4f6f9",
    padding: "30px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0 0 10px 0",
    color: "#0070f3",
  },
  subtitle: {
    fontSize: "1.5rem",
    margin: 0,
    color: "#666",
  },
  main: {
    marginTop: "30px",
    fontSize: "1.1rem",
  },
};

export default App;
