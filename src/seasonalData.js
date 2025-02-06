// ABOUTUS 탭 - 지원하기 버튼 텍스트 (AboutUs 컴포넌트)
export const generation = "13기"; // 모집 기수

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

// RECRUIT 탭 - 홍보 노션 url (NonRecruit, Recruit 컴포넌트)
export const notionUrl =
  "https://cold-ton-68c.notion.site/13-at-Sookmyung-171696b3a71380ddb46bd80dafe87890?pvs=74";

// RECRUIT 탭 - 모집 일정 (Information 컴포넌트)
export const recruitInfo = {
  docSubmissionDate: "2025.02.14(금) - 02.21(금)", // 서류 접수 일정
  passAnnounce_1st: "2025.02.25(화)", // 1차 합격자 발표
  interview: "2025.02.27(목) - 02.28(금)", // 면접 일정
  passAnnounce_final: "2025.03.02(일)", // 최종 합격자 발표
};

// CONTACT 탭 - 문의처 링크 (Contact 컴포넌트)
export const contactInfo = {
  instagram: "https://www.instagram.com/sookmyung_likelion/", // 인스타그램 링크
  kakaotalk: "https://open.kakao.com/o/sCwHovch", // 카카오톡 오픈채팅 링크
  kakaoCode: "likelion", // 카카오톡 오픈채팅 참여코드
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=sookmyung@likelion.org", // email 작성 링크
};

// Contact 탭 - FAQ 리스트 (FAQList 컴포넌트)
export const faqData = [
  {
    question:
      "Q. 꼭 컴퓨터 관련 전공이어야만 하나요? 기초가 갖추어지지 않은 비전공자의 경우에는 지원이 힘든가요?",
    answer:
      "멋쟁이사자처럼은 비전공자와 전공자 모두를 대상으로 모집합니다. 기초를 갖춘 상태에서 동아리에 가입한 사람들도 있는 한편, 동아리 가입 후 코딩을 아예 처음 시작한 사람들도 있습니다. 코딩 경험이 없으시더라도 웹 서비스 또는 IT 관련 창업에 관심이 많으시고, 자기소개서와 면접을 통해 활동 의지와 열정을 충분히 보여주신다면 누구든지 활동 가능합니다.",
  },
  {
    question: "Q. 전체, 파트 별 모집 인원이 궁금해요!",
    answer:
      "올해 전체 모집 인원은 대략 16~20명 내외 모집 예정이며, 파트 별 모집 인원은 기획/디자인 : 프론트엔드 : 백엔드 비율을 1:2:2로 예상하고 있습니다. 상황에 따라 변동이 있을 수 있습니다.",
  },
  {
    question: "Q. 고학년, 저학년 비율이 궁금해요!",
    answer: "작년 12기 기준으로는 2~4학년에 걸쳐 다양했습니다.", // 기수
  },
  {
    question: "Q. 면접에서 코딩 테스트를 보나요?",
    answer:
      "별도의 코딩 테스트는 보지 않습니다. 저희 동아리에서는 웹 개발 기초부터 차근차근 함께 학습합니다.",
  },
  {
    question: "Q. 정기 세션은 대면으로 진행하나요?",
    answer:
      "정기 세션은 매주 화요일 19시~21시에 대면을 원칙으로 진행하며, 동아리 기본 활동 시간이므로 모두 필참입니다.",
  },
  {
    question: "Q. 2학기에도 신입 아기 사자를 모집하나요?",
    answer:
      "멋쟁이사자처럼 활동은 1년을 기준으로 하며, 상반기 + 하반기 연속으로 활동하셔야 합니다. 매년 2월 말 ~ 3월 초에만 신입 아기 사자를 모집하고 있습니다.",
  },
  {
    question: "Q. 시험 기간에도 정기 세션이 열리나요?",
    answer:
      "시험 기간에는 정기 세션을 잠시 멈췄다가, 시험 기간 이후 다시 진행합니다. 따라서 학기 중에도 부담 없이 활동하실 수 있습니다.",
  },
  {
    question: "Q. 수료 조건이 어떻게 되나요?",
    answer:
      "중앙 멋쟁이사자처럼 수료 조건: 정기 세션, 중앙 아이디어톤, 중앙 해커톤 참여 \n 숙명여대 멋쟁이사자처럼 수료 조건: 중앙 멋쟁이사자처럼 수료 조건 + 연합 해커톤 및 파이널 프로젝트 참여",
  },
];

// FinalResult 컴포넌트 (최종 합격 발표 페이지)
export const finalResult = {
  deadline: "금일 17시", // 최종 합격 확인 구글폼 제출 기한
  googleformUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe91tUYRMvMRiK3nAviXnNePDDpS3JhRfudOBphni011pwneg/viewform", // 최종 합격 확인 구글폼 url
};

// 홈페이지 개발자들 데이터 배열 (Makers 컴포넌트 - Footer 통해 진입)
export const makers = [
  {
    generation: 1, // 1기
    members: [
      {
        name: "소희수",
        part: "기획/디자인",
        img: `${process.env.REACT_APP_IMAGE_URL}/heesu.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 10기",
        major: "숙명여대 중어중문학부 • IT공학전공",
      },
      {
        name: "나유진",
        part: "프론트엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/yujin.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 10기",
        major: "숙명여대 컴퓨터과학전공",
      },
      {
        name: "배지윤",
        part: "프론트엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/jiyoon.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 10기",
        major: "숙명여대 수학과 • IT공학전공",
      },
      {
        name: "양은수",
        part: "프론트엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/eunsu.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 10기",
        major: "숙명여대 컴퓨터과학전공",
      },
      {
        name: "이수민",
        part: "백엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/sumin.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 10기",
        major: "숙명여대 컴퓨터과학전공",
      },
      {
        name: "임아현",
        part: "백엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/ahyun.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 10기",
        major: "숙명여대 IT공학전공",
      },
      {
        name: "박소윤",
        part: "백엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/soyoon.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 10기",
        major: "숙명여대 IT공학전공",
      },
    ],
  },
  {
    generation: 2, // 2기
    members: [
      {
        name: "강주은",
        part: "기획/디자인",
        img: `${process.env.REACT_APP_IMAGE_URL}/jooeun.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 11기",
        major: "숙명여대 경영학부 • 컴퓨터과학전공",
      },
      {
        name: "이선아",
        part: "프론트엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/seonah.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 11기",
        major: "숙명여대 IT공학전공",
      },
      {
        name: "이예지",
        part: "프론트엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/yeji.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 11기",
        major: "숙명여대 IT공학전공",
      },
      {
        name: "조성하",
        part: "프론트엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/sungha.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 11기",
        major: "숙명여대 IT공학전공",
      },
      {
        name: "김원희",
        part: "백엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/wonhee.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 11기",
        major: "숙명여대 IT공학전공",
      },
      {
        name: "윤서희",
        part: "백엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/seohee.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 11기",
        major: "숙명여대 소프트웨어융합전공 • 통계학과",
      },
      {
        name: "이서현",
        part: "백엔드",
        img: `${process.env.REACT_APP_IMAGE_URL}/seohyun.svg`,
        sooklion: "멋쟁이사자처럼 숙명여대 11기",
        major: "숙명여대 소프트웨어융합전공 • 통계학과",
      },
    ],
  },
];
