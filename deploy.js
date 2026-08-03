import ghpages from "gh-pages";

// 현재 날짜와 시간을 yyyy.MM.dd HH:mm 포맷으로 생성
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
const commitMessage = `Deploy ${formattedDate}`;

console.log(`🚀 배포 시작! 커밋 메시지: "${commitMessage}"`);

// gh-pages 배포 실행
ghpages.publish(
  "dist",
  {
    message: commitMessage,
  },
  function (err) {
    if (err) {
      console.error("❌ 배포 중 오류 발생:", err);
    } else {
      console.log("✅ 성공적으로 gh-pages 브랜치에 배포되었습니다!");
    }
  },
);
