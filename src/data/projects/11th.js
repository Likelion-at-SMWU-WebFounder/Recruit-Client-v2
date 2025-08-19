/* 
  프로젝트 데이터 관리 방식 변화
    [2024]
     - 백의 project API를 통해 조회, 생성, 수정
     - 프론트에서 formData 형식으로 백 api에 데이터 전송
    [2025]
    - 2024 방식의 문제상황 파악
      i. 이전 개발DB를 물려받지 않는 이상 새로 생성된 DB에 역대 데이터를 처음부터 다시 입력해야 함
      ii. 이전 DB를 물려받는 것이 비용과 aws계정 문제로 불가
    - 이미 개발된 API를 활용하기 위해 매 기수마다 DB에 역대 데이터를 전부 입력해야 하는 뻘짓보단  
      json 문서 형식으로 물려주어 새로운 데이터만 수기 입력하는 것이 낫다 판단
    - 백틱(`)을 통한 텍스트 형태 유지, 반복되어 사용되는 s3 url을 텍스트 문자열로 사용하기 위해 파일 형식 js 사용
*/

const s3URL = process.env.REACT_APP_IMAGE_URL + "/project";

export const eleventhProjectsData = [
  {
    bgImg: `${s3URL}/bridge.svg`,
    title: "Bridge",
    teamName: "러브브릿지",
    teamMember: "서연경 문유진 손민재 이예린 이예지",
    summary: "발달장애인을 위한 지원서비스 통합신청 웹사이트",
    content:
      "디지털 격차 ,정보의 분산으로 인해 이용하지 못했던 기관별 지원프로그램을 한눈에 볼 수 있도록 통합하여 제공하고, 기존 4-5 단계의 복잡하고 불편한 심사와 신청자격에 관한 단계를 생략하여 마이페이지에 심사결과를 한 번만 등록하면 쉽게 웹사이트에서 프로그램을 지원하실 수 있습니다. 보호자와 가정 뿐 아니라, 발달장애인분들도 직접 신청할 수 있도록 편안한 ui제공 및 추후 챗봇 지원예정입니다.",
    servIntro:
      "https://drive.google.com/file/d/1eN87dwYzK3rDrvE4HJbXMvNINs7TyhSt/view?usp=sharing",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-11th/LoveBridge-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-11th/LoveBridge-Client",
    servLaunch: null,
    no: "11기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/draw.svg`,
    title: "D:raw",
    teamName: "D:raw",
    teamMember: "박연빈 강주은 박상아 이서현 윤서희",
    summary:
      "디지털 이용에 어려움을 겪는 시각장애인 및 고령층에게 디지털 안내사를 무료로 매칭해주는 자원봉사 플랫폼",
    content:
      "데이터 시각화/언택트 서비스가 활발히 이용되면서 시각 장애인과 고령층의 정보에 대한 접근이 더욱 어려워졌습니다. D:raw에서는 이러한 디지털 격차를 해소하기 위해 디지털 안내사를 1:1 매칭하여 불편함을 덜고자 했습니다. D:raw는 자원봉사 플랫폼으로, 봉사시간이 필요한 청소년과 대학생이 안내사 활동의 메인 타겟층입니다. 이용자는 D:raw 안내사 매칭을 통해 간단한 금융처리, 전자상거래, 공공 서비스 업무까지 직접적인 도움을 받을 수 있습니다.",
    servIntro:
      "https://drive.google.com/file/d/1mved5wqRSKIu-DNp76A4colDqqeue52o/view?usp=sharing",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-11th/D_raw-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-11th/D_raw-Client",
    servLaunch: null,
    no: "11기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/banzak.svg`,
    title: "반짝",
    teamName: "반짝",
    teamMember: "한다인 이선아 조성하 김원희 이예나",
    summary: "유기동물 입양 서비스",
    content:
      "유기 동물 보호소의 디지털 격차를 줄여 전국 사설보호소 입양을 활성화하고, 긍정적인 입양문화 확대까지 기대할 수 있는 우리 서비스는 나의 반려동물 짝꿍을 찾는다는 의미에서 '반짝'이라는 이름을 지닌다.",
    servIntro:
      "https://drive.google.com/file/d/1sjHZyZGayUTJyrpaueF-D06Fb7JF7VdG/view?usp=sharing",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-11th/BanJjak-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-11th/BanJjak-Client",
    servLaunch: null,
    no: "11기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/awards.svg`,
    title: "올해의 마이 어워즈",
    teamName: "에어드롭",
    teamMember: "강주은(FE), 조성하(FE) 외 4명",
    summary:
      "연말을 맞이하며 혼자, 연인과, 친구들과 함께 할 수 있는 소소한 콘텐츠",
    content: `우리가 ‘빠더너스'라는 브랜드의 인하우스 서비스 기획팀이 된다면?

브랜드 오너가 오프라인으로 즐겨하던 콘텐츠를 온라인 웹 서비스로 구현해보자

한 해를 돌아보며 나의 순간들을 기록하고, 온라인 상에서는 같은 가치를 공유하고 있는

타인과, 오프라인으로는 나와 내면적 교감을 하고 있는 지인과 나눌 수 있는 서비스입니다.

프로덕트 핵심 기능은 한 해의 추억 기록, 인사이트 아카이빙 및 카테고리 검색,

오프라인 모임 시 게임 툴 제공입니다.`,
    servIntro:
      "https://drive.google.com/file/d/14SARSOnEt43esqkatEWruxNWOiaX8XES/view?usp=share_link",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/BDNS-AWARDS/BDNS-server",
    gitFeUrl: "https://github.com/BDNS-AWARDS/BDNS-client",
    servLaunch: null,
    no: "11기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/farewell.svg`,
    title: "Farewell, 2023",
    teamName: "Farewell, 2023",
    teamMember: "이예지(FE), 박상아(FE) 외 4명",
    summary: "한 해 회고 서비스",
    content: `한해를 마무리하는 열쇠, Farewell  2023

프로덕트 핵심 기능

✅ 매일 받는 질문에 답함을 통해 나의 2023년을 돌아보고, 12/31에 이것을 모아 회고록 생성

✅ 남이 나의 2023년에 관한 다양한 질문에 대신 답해주어,

타인이 나의 회고록 또한 작성해줄 수 있는 기능 구현`,
    servIntro:
      "https://drive.google.com/file/d/1fX-choQyXCq_GL9RGOtD8J-nWtjj5qIm/view?usp=share_link",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/FAREWELL2023/Farewell_BE",
    gitFeUrl: "https://github.com/FAREWELL2023/Farewell_FE",
    servLaunch: null,
    no: "11기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/coffeeing.svg`,
    title: "Coffeeing",
    teamName: "커핑",
    teamMember: "소희수(PM), 서연경(PM), 이예린(BE), 윤서희(BE) 외 2명",
    summary: "‘커핑’ 모임 매칭 서비스",
    content: `‘커핑’은 커피를 맛보며 파악하는 행위로, 커피를 좋아하는 사람들이 모여 다양한 원두를 맛 보며 커피를 즐기는 문화입니다. 모임 참여자를 모집하는 방식으로는 주로 네이버 카페에 글을 올려 수요를 확인하는 것이 일반적이었습니다. 글을 올려 사람들의 반응을 기다리고 모임을 주최하기까지 시간이 많이 소요되는 것을 보고, 사용자가 원하는 장소와 시간대에 참여할 수 있는 모임을 신청하면 신청자와 모임이 매칭되는 서비스를 구상하게 되었습니다.`,
    servIntro:
      "https://drive.google.com/file/d/1FqGGZH48UDZCuqTL-cX2CS11zwhxbIIn/view?usp=share_link",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Coffee-ing",
    gitFeUrl: "",
    servLaunch: null,
    no: "11기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/photo.svg`,
    title: "포토꾸러미",
    teamName: "산리오",
    teamMember: "김원희(BE), 문유진(BE) 외 3명",
    summary: "너와 나만의 추억 사진, 포토꾸러미",
    content: `1. 나만의 포토꾸러미 URL 다른 인증 절차 없이 쉽고 간단한 로그인으로 나만의 URL 생성

2. 추억을 나누는 포토꾸러미 함께 추억하고 공유하고 싶은 사진 6장과 메시지 전송 가능

3. 나만 볼 수 있는 포토꾸러미 받은 포토꾸러미는 수신자만 열람 가능

4. 한눈에 보는 포토꾸러미 보낸 6장의 사진을 자동으로 콜라주 해서 한눈에 볼 수 있도록 제공  5. 유해한 사진 검사 혹시나 유해한 사진이 보내지는 불상사를 막기 위해 전송 전에 유해한

사진을 검사하여 클린한 포토꾸러미 사용 가능`,
    servIntro:
      "https://drive.google.com/file/d/1yrvWHVGUTgXjOQyUNdOIG0CNCrgJ7TYd/view?usp=share_link",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Kureomi/Server",
    gitFeUrl: "https://github.com/Kureomi/Kureomi_FE",
    servLaunch: null,
    no: "11기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/mbting.svg`,
    title: "MBTING",
    teamName: "떡잎방범대",
    teamMember: "박연빈(PM), 한다인(PM) 외 4명",
    summary: "개발자 협업 MBTI 소개팅 모바일 웹 서비스",
    content: `🤖 짱구 등장인물로 보는 나의 개발 유형!

간이 MBTI 테스트를 통해 나의 개발 유형과 잘 어울리는 개발 언어 알기

❤️ 나와 잘 맞는 개발자 유형 제공, 프로필 보러가기!

테스트 결과에 함께 제공될 ‘나와 잘 맞는 개발자 유형’ 2 TYPE을 확인하고,

실제로 어떤 사람들이 있는지 확인하러 가기

💌 오픈채팅 링크를 통해 매칭 성사하기!

여러 프로필 중 마음에 드는 사람을 선택해 상세 프로필을 확인하고,

제공된 오픈채팅 링크로 연결해 적극적으로 협업 제안 해보기`,
    servIntro:
      "https://drive.google.com/file/d/1D7luOGAXKu3nVFsZsHnku0ObyEb03og-/view?usp=share_link",
    gitOrgUrl: null,
    gitBeUrl: "",
    gitFeUrl: "",
    servLaunch: null,
    no: "11기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/whiskeylikey.svg`,
    title: "Whiskey Likey",
    teamName: "I am 위잘알이에요",
    teamMember: "손민재(FE), 이선아(FE) 외 4명",
    summary: "나에게 맞는 위스키 추천 테스트",
    content: `💘 입문 위스키 추천 테스트 기능

이제는 위스키시대! 도전해보고 싶지만 너무 어려울때 <Whiskey Likey>에서 간단한 질문에 답하고 나에게 꼭 맞는 입문 위스키를 추천받아보세요.

🎁 결과 저장 및 공유 기능

결과를 저장하고 바에 갔을때, 구매를 할때 참고하세요. 또, 친구들과 함께 공유하고 친구의 취향도 알아보세요! 연말에 으른답게 위스키 선물, 어때요? 😎

📝 결과 관련 매거진 열람 기능

결과와 관련된 다양한 매거진을 볼 수 있어요. 어디가서 어떻게 사야할지, 어떻게 마셔야할지, 무엇이랑 마셔야할지 고민할 필요 없어요!!`,
    servIntro:
      "https://drive.google.com/file/d/1-l3SsM3uqtPEzDqU2G7x-E0shq80Ei7U/view?usp=share_link",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/WhiskeyLikey/WhiskeyLikey-BE",
    gitFeUrl: "https://github.com/WhiskeyLikey/WhiskeyLikey-Client",
    servLaunch: null,
    no: "11기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/songyeechallenge.svg`,
    title: "송이의 숲",
    teamName: "송이의 숲",
    teamMember:
      "박연빈, 서연경, 한다인, 강주은, 이예지, 조성하, 문유진, 이서현",
    summary: "숙명 눈송이만을 위한 챌린지 쉐어 플랫폼",
    content: `숙명인들이 원하는 챌린지를 쉽게 생성하고 꾸준히 실천해 나갈 수 있도록 도움을 주기 위해 기획한 서비스입니다.

<주요 기능>

나만의 챌린지 생성 (개설하고 싶은 스터디를 자유롭게 생성, 미션 내용 및 날짜 입력 등)

미션 수행 (참가한 스터디 미션 수행, 체크리스트로 미션 관리)

소감 남기기 (자유롭게 스터디 소감 작성, 공감 기능을 통한 유대감 형성)`,
    servIntro: "https://github.com/Songyee-Challenge",
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Songyee-Challenge/Server",
    gitFeUrl: "https://github.com/Songyee-Challenge/FE",
    servLaunch: null,
    no: "11기",
    category: "파이널프로젝트",
  },
  {
    bgImg: `${s3URL}/sendmyheart.svg`,
    title: "전하기(SendMyHeart)",
    teamName: "전하기",
    teamMember:
      "박연빈, 서연경, 한다인, 박상아, 이선아, 김원희, 윤서희, 이예린",
    summary: "내 주변 소중한 사람들에게 안부 전하는 서비스",
    content: `당신은 소중한 사람에게 안부 인사를 자주 건네고 있나요?

안부를 보낼 친구(엄마, 외할머니, 할아버지 등)를 설정 및 선택하고, 안부 종류를 선택하여, 나만의 언어로 수정하고 마음을 전할 수 있는 서비스입니다.`,
    servIntro: null,
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-11th/SendMyHeart-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-11th/SendMyHeart-Client",
    servLaunch: null,
    no: "11기",
    category: "파이널프로젝트",
  },
];
