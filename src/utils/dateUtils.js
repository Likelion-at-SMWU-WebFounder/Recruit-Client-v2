/**
 * scheduleData "M.D 요일 HH:mm-HH:mm" 을 ISO 8601 형식으로 변환
 * @param {string} timeString - 변환할 시간 문자열
 * @returns {string|null} 변환된 ISO 8601 문자열 또는 실패 시 null
 */

export function convertToISO(timeString) {
  const match = timeString.match(/(\d{1,2})\.(\d{1,2}).*?(\d{2}):(\d{2})/);
  if (!match) return null;

  const [, month, day, hour, minute] = match;
  const year = 2025;
  const date = new Date(year, month - 1, day, hour, minute);

  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const DD = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");

  return `${YYYY}-${MM}-${DD}T${HH}:${mm}:00+09:00`;
}
