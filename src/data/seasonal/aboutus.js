// ABOUTUS 탭 - 지원하기 버튼 텍스트 (AboutUs 컴포넌트)
export const generation = "13기"; // 모집 기수
export const year = "2025"; // 년도

// ABOUTUS 탭 - 활동 소개 그리드 (AboutUs 컴포넌트)
export const imgCard = [
  {
    title: "정기 세미나",
    content:
      "프론트엔드, 백엔드, 기획·디자인 트랙으로 나뉘어\n주 1회 정기 세미나를 진행합니다.",
    imgUrl: `${process.env.REACT_APP_IMAGE_URL}/smwu1_seminar.svg`,
  },
  {
    title: "해커톤",
    content:
      "무박 2일로 진행되는 중앙해커톤을 비롯한\n각종 비정기 해커톤이 개최됩니다.",
    imgUrl: `${process.env.REACT_APP_IMAGE_URL}/smwu2_hackathon.svg`,
  },
  {
    title: "선배와의 대화",
    content:
      "다양한 IT 분야의 재직 중인\n현직자 선배님의 강연과 조언을 얻을 수 있습니다.",
    imgUrl: `${process.env.REACT_APP_IMAGE_URL}/smwu3_talkWithSenior.svg`,
  },
  {
    title: "그 외 친목 활동",
    content:
      "MT, 스터디, 회식 등 친목활동을 통해\n교내 각 전공의 다양한 사람들과 더욱 돈독한 관계를 \n형성할 수 있습니다.",
    imgUrl: `${process.env.REACT_APP_IMAGE_URL}/smwu4_friendship.svg`,
  },
];