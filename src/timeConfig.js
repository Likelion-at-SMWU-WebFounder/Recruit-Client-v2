// 타임라인에 따라 렌더링해줘야 하는 부분 관련 date 객체 관리
// (서류 모집 전, 서류 모집 중, 서류 마감 ~ 합격 발표 전, 서류 합격 발표, 최종 합격 발표)
// 기간에 따라 수작업으로 직접 렌더링 변화를 줘야했던 이전 코드를 개선 -> 각 일정의 date 이전/이후에 따라 렌더링이 자동으로 바뀌도록 함
// ❗️ 정해진 시각보다 1시간 혹은 30분 이전으로 설정해놓는 것을 권장합니다. (미리 렌더링 바뀌어도 사용자들은 재배포되는 시간에 맞춰 확인)
// ❗️ date 선언 시 ISO 8601 문자열 방식("YYYY-MM-DDTHH:mm:ss+09:00")으로 선언할 것을 권장합니다.

// 서류 모집 시작
export const recruitStartTime = new Date("2025-08-19T19:50:00+09:00");

// 서류 마감 시간
export const docDeadlineTime = new Date("2025-08-19T20:50:00+09:00");

// 서류 합격 발표
export const firstResultTime = new Date("2025-08-19T21:50:00+09:00");

// 최종 합격 발표
export const finalResultTime = new Date("2025-08-19T22:50:00+09:00");

export const getRecruitPhase = () => {
  const now = new Date();

  if (now < recruitStartTime) return "nonrecruit"; // 리쿠르팅 전
  if (now < docDeadlineTime) return "startdoc"; // 서류 접수 중
  if (now < firstResultTime) return "closedoc"; // 서류 마감 ~ 합격 발표 전
  if (now < finalResultTime) return "firstresult"; // 서류 합격 발표
  return "finalresult"; // 최종 발표 후
};
