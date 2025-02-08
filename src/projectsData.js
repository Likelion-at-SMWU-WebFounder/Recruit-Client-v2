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

export const projectsData = [
  {
    bgImg: `${s3URL}/meet.svg`,
    title: "Meet Wizard",
    teamName: "Manna",
    teamMember: "김소은 문다연 박혜준 장한빛",
    summary: "한 번의 클릭으로 약속 정하기",
    content:
      "2인 이상의 그룹 내의 구성원들은 각자의 가용시간과 출발위치를 입력합니다. 타임 테이블에 색의 농도에 따라 구별된 가용 시간을 표기하고, 이를 바탕으로 최적의 만남 시간을 추천합니다. 그룹원들의 출발 위치를 기반으로 중간위치에 가장 가까운 지하철 역을 추천하며, 해당 역 주변의 만남 장소들을 유형별로 추천합니다.",
    servIntro: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU/meetwizard",
    gitFeUrl: null,
    servLaunch: null,
    no: "9기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/oneeat.svg`,
    title: "일인분",
    teamName: "인덕션",
    teamMember: "김정운 이민정 박경나 이연수",
    summary:
      "나의 냉장고에 있는 재료들로 할 수 있는 요리 레시피를 알려주는 서비스",
    content: `- 자취생 혹은 1인가구의 경우 집에서 직접 요리를 해먹을 때, 가지고 있는 재료로 할 수 있는 요리 레시피를 찾아봅니다. 그러나 이 재료 조합으로 할 수 있는 요리 자체를 생각해내는 것도 어려울 뿐더러, 시중에 나와있는 레시피는 대부분 우리에게 없는 재료까지 포함하는 경우가 많습니다. 따라서 저희 인덕션팀은 사용자가 가지고 있는 음식 재료를 선택하면 해당 재료만으로 만들 수 있는 음식과 해당 재료를 포함한 음식 및 레시피를 보여주는 서비스를 기획하였습니다.
-  또한, 음식에 대한 다양한 정보 공유와 소통의 장을 마련하기 위해 커뮤니티, 전문가 일인분과 같은 기능을 구현하기도 하였습니다.
`,
    servIntro:
      "https://drive.google.com/file/d/1SjbNFRp78t4AY0AQiZiAEqVz3xqyIEhu/view?usp=sharing",
    gitBeUrl: null,
    gitFeUrl: null,
    servLaunch: null,
    no: "9기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/fm.svg`,
    title: "FM (Find Medical)",
    teamName: "FM",
    teamMember: "강연우 김서영 안현주 황서경",
    summary:
      "간단한 증상 체크를 통해 발병 가능한 암 확인 및 정보를 제공하는 서비스",
    content:
      "증상 관련 설문 조사를 통해 발병 가능성이 있는 암의 종류를 확인할 수 있고 이에 대한 정보도 제공 받을 수 있다. 이외에도 사용자 주변의 병원 위치도 신속하게 확인 가능하고 커뮤니티 기능을 통해 사용자 간에 병원 혹은 투병 후기를 공유할 수 있다.",
    servIntro:
      "https://drive.google.com/file/d/1lbUF10pj_AgKTYjOAjLOs1Rl9TvFYfQ7/view?usp=sharing",
    gitBeUrl: null,
    gitFeUrl: null,
    servLaunch: null,
    no: "9기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/roadmap.svg`,
    title: "RoadMap",
    teamName: "눈덩이",
    teamMember: "김유진 노은성 오예림 조원아",
    summary: "개발정보확인 & 포트폴리오 관리",
    content: `개발직군 채용공고를 확인하고 포트폴리오를 관리할 수 있는 서비스 RoadMap입니다. 

1. 채용공고를 스크랩하고, 글 좋아요를 남길 수 있습니다. 
2. 마이페이지에서 사용자 맞춤 원스톱 서비스를 사용가능하고, 작성이력 및 스크랩이력을 열람할 수 있습니다. 
3. 게시글 검색 및 공고 검색 기능이 활용가능합니다. 
4. 포트폴리오 공개/비공개 설정이 가능하며 수정/삭제 또한 가능합니다. `,
    servIntro: null,
    gitBeUrl: "https://github.com/LikeLion-snowball",
    gitFeUrl: null,
    servLaunch: null,
    no: "9기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/myhealing.svg`,
    title: "마이힐링 (MY Healing)",
    teamName: "MY Healing",
    teamMember: "양지원 양은수 이수민 조은비 최예진",
    summary: "나만의 힐링 플레이스 공유 사이트",
    content:
      "MY_Healing은 힐링플레이스 검색 서비스로, 힐링 장소를 찾을 때 검색 시간을 단축하고 힐링 장소 선정에 편리함을 주는 서비스입니다. 여러 키워드를 제공하며, 가이드(ex. 비오는 날 가기 좋은 장소)를 제공하여 장소에 대한 구체적인 후기를 남길 수 있고, 추억도 남길 수 있습니다.",
    servIntro:
      "https://web-myhealing-cloud-3y5ng24l70c1iqe.gksl1.cloudtype.app/home",
    gitBeUrl: "https://github.com/Likelion-at-SMWU-10th/MYHEALING-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-10th/MYHEALING-Client",
    servLaunch: null,
    no: "10기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/rememb.svg`,
    title: "rememB",
    teamName: "rememB",
    teamMember: "고두영 나유진 박소윤 이수민",
    summary: "한 번 뿐인 생일을 더욱 특별하게, 마음을 전하는 rememB",
    content: `내 생일파티에 초대할게! 내 파티룸을 꾸며줘💖

1. 생일축하 편지 쓰고 파티룸 꾸미기 🎉
2. 밸런스게임으로 내 선물취향 티내기 🎁
3. 받은 축하편지 롤링페이퍼로 저장 🔖
4. 애매한 사이의 지인에게 간단하게 익명으로 마음 표현하기 💌

일 년에 한 번 뿐인 생일을 더욱 기대하고, 추억하게 만들 수 있는 서비스!
마음을 전하는 rememBirthday 🍰🎂`,
    servIntro:
      "https://drive.google.com/drive/folders/1Fak_bh57c6TCeAZvCqwL8_C9f0yrcZXz",
    gitBeUrl: null,
    gitFeUrl: null,
    servLaunch: null,
    no: "10기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/otr.svg`,
    title: "Otr.",
    teamName: "Otr.",
    teamMember: "김지수 김희원 배지윤 소희수 임아현",
    summary: "유서 작성 및 문답을 통한 디지털 임종 체험 서비스 Otr.",
    content:
      "죽음에 대한 생각을 정리할 수 있도록 도와줌으로써 삶을 다시 돌아볼 수 있게 해주는 디지털 임종 체험 서비스입니다. 서비스명인 'Otr.'은 'Over the rainbow'와 'Off the record'의 줄임말로, 죽음에 대해 생각해보며 나의 진솔한 생각을 돌아보자는 의미를 지닙니다. 7일간 죽음에 대해 생각해 볼 수 있는 문답을 작성하면, 이를 바탕으로 유서를 작성하여 스스로를 되돌아보고 궁극적으로 웰다잉을 추구하도록 돕습니다.",
    servIntro: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-10th/Otr-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-10th/OTR_client",
    servLaunch: null,
    no: "10기",
    category: "중앙해커톤",
  },
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
    gitBeUrl: "https://github.com/Songyee-Challenge/Server",
    gitFeUrl: "https://github.com/Songyee-Challenge/FE",
    servLaunch: null,
    no: "11기",
    category: "미니프로젝트",
  },
  {
    bgImg: `${s3URL}/sendmyheart.svg`,
    title: "전하기(SendMyHeart)",
    teamName: "전하기",
    teamMember:
      "박연빈, 서연경, 한다인, 강주은, 이예지, 김원희, 윤서희, 이예린",
    summary: "내 주변 소중한 사람들에게 안부 전하는 서비스",
    content: `당신은 소중한 사람에게 안부 인사를 자주 건네고 있나요?

안부를 보낼 친구(엄마, 외할머니, 할아버지 등)를 설정 및 선택하고, 안부 종류를 선택하여, 나만의 언어로 수정하고 마음을 전할 수 있는 서비스입니다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-11th/SendMyHeart-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-11th/SendMyHeart-Client",
    servLaunch: null,
    no: "11기",
    category: "미니프로젝트",
  },
  {
    bgImg: `${s3URL}/voyage.svg`,
    title: "VOYAGE",
    teamName: "VOYAGE",
    teamMember: "박우현 성윤정 장유빈 정지윤 유채민",
    summary:
      "현대인 심리 건강 개선을 위한 중장년층과 청년층의 세대통합 멘토링 서비스",
    content:
      "현대인의 심리적 건강을 위해 중장년층의 자기효능감과 청년층의 자기확신감 증대를 목표로 기획된 서비스로, 중장년층과 청년층이 서로의 멘토이자 멘티가 되어 도움을 주는 서비스. 멘토는 멘티의 고민에 해답을 제시하고, 채팅을 통한 멘토링을 진행할 수 있으며, 커뮤니티 칼럼 작성 및 스크랩이 가능하다. 한편, 멘티는 한 줄 고민 작성, 관심 멘토 설정, 자동 멘토 매칭 및 멘토링에 참여하는 등 고민을 해결하는 데에 도움을 얻을 수 있다.",
    servIntro: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-12th/CheongpaGamja-Client",
    gitFeUrl: null,
    servLaunch: null,
    no: "12기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/bbangutbbangood.svg`,
    title: "빵긋빵굿",
    teamName: "빵긋빵굿",
    teamMember: "김보미 강주은 최현서 이효림 홍상희",
    summary: "웰니스 빵 정보(상품 및 레시피)를 제공하는 서비스",
    content:
      "‘빵돌이’, ‘빵순이의 일상’과 같은 키워드처럼 다이어트나 건강을 생각하는 사람들 사이에서도 빵을 포기하지 못하는 소비자들을 위해 건강빵을 통해 맛있게 먹으면서도 건강을 관리할 수 있는 플랫폼을 만들고자 기획한 서비스 (빵 유형 테스트, 웰니스 빵, 레시피, 기록 등)",
    servIntro: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-12th/DreamPatissier-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-12th/DreamPatissier-Client",
    servLaunch: null,
    no: "12기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/hancare.svg`,
    title: "한케어",
    teamName: "한케어",
    teamMember: "오시은 유동은 이현정 경민서 서문지",
    summary: "한의학 기반 맞춤형 건강관리 서비스",
    content:
      "한의학/한의원 정보 및 식습관 기반 건강관리 서비스를 제공하여 현대인의 신체적 건강 문제를 해결하기 위해 기획. 한의원 찾기나 한의학 관련 칼럼 제공, 또는 캘린더에 한의원 예약 기록이나 일정을 관리할 수 있는 서비스를 제공한다. ",
    servIntro: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-12th/Hanappun-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-12th/Hanappun-Client",
    servLaunch: null,
    no: "12기",
    category: "중앙해커톤",
  },
  {
    bgImg: `${s3URL}/prog.svg`,
    title: "P-ROG",
    teamName: "PTN",
    teamMember: "이현정(FE) 외 5명",
    summary: "평가가 아닌 성장의 기회, 대학생 프로젝트를 위한 피드백 플랫폼",
    content: `문제해결능력과 피드백은 필요충분조건이라는 것을 비롯하여 기획된 서비스입니다.

기존의 공유 플랫폼은 대학생 프로젝트를 진행할 때에 성장 과정에 맞지 않는 구조이거나, 직접적인 조언을 얻기 어려운 경우이므로 발전 방향을 찾기 어렵다는 한계점을 가집니다. 이를 극복하고자 P-ROG은 다양한 시각에서의 피드백을 중점으로 받아 프로젝트를 한층 더 성장시키는 과정을 제공하고자 합니다. 따라서 별점, 좋아요, 랭킹 등의 평가적인 요소를 최대한 없애고, 프로젝트에 대한 설명과 함께 고민 부분들도 같이 작성하여 프로젝트를 등록할 수 있습니다. 이용자는 게시된 프로젝트를 보고 피드백 작성을 할 수 있으며,  채택될 경우 포인트를 받을 수 있습니다. 또한 Ai 피드백 정리 보고서 기능도 구현하여, 적립한 포인트로 다량의 피드백을 손쉽게 정리할 수 있습니다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/mmig01/Line4-Hackathon-backend-team1.git",
    gitFeUrl: "https://github.com/Line4thon-PROG",
    servLaunch: "https://p-rog.netlify.app/",
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/joinus.svg`,
    title: "조인어스",
    teamName: "같이",
    teamMember: "유동은(FE) 외 5명",
    summary: "공유를 통해 환경보호를 실천하고자 하는 서비스",
    content: `지속적으로 증가하는 지구의 온실가스로 나날이 심해지는 기후위기에 관심을 가지고 공유하고자 기획한 서비스입니다.  환경 보호를 위한 작은 행동들을 사진으로 찍어 글과 함께 올리고, 원하는 프레임을 선택하면 나만의 실천 카드를 만들어 공유할 수 있습니다. 만든 실천카드는 월별로 한번에 모아볼 수 있으며, 내 랭킹과 어스 랭킹 1~3위를 볼 수 있으며, 다른 테마를 구매해 적용도 가능합니다.

실천 카드를 통해 모인 작은 행동들과 공유를 통해 만들어지는 작은 관심들이 기후와 환경을 향한 큰 관심이 되고, 모인 관심이 세상을 조금 더 푸르게 만들 것입니다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/2024-line4-earth/gachi_BE",
    gitFeUrl: "https://github.com/2024-line4-earth/Join_us_FE",
    servLaunch: "https://fe-tostar-turtle0204s-projects.vercel.app/login",
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/nugu.svg`,
    title: "누구 (NUGU)",
    teamName: "누구세요",
    teamMember: "유채민(BE), 정지윤(BE) 외 4명",
    summary: "함께 만들어가는 트렌디한 자기소개 서비스",
    content: `“나보다 나를 더 잘 아는 친구가 나를 대신 소개한다면?”

여러분, 갑작스러운 자기소개 시간이 부담스럽거나 새로운 사람을 만날 때 나를 어떻게 표현해야 할지 고민해본 적 있으신가요? “누구”는 이러한 고민을 덜어드리고, 자신을 더욱 편하게 소개할 수 있도록 돕는 자기소개 플랫폼입니다.

<주요 기능>

나의 자기소개, 누구(나만의 프로필 생성(MBTI, 한 줄 소개, 키워드 등), 공유)

친구가 작성하는, 누구 소개(친구들이 나를 표현하는 키워드 투표, 간단 소개 작성, 상위 3개 키워드 확인 가능)

다함께 즐기는, 누구 테스트(소유자와 접속자가 서로를  더 잘 알 수 있는 퀴즈)`,
    servIntro: null,
    gitBeUrl: "https://github.com/Line4Thon-Nugu/Nugu-Backend",
    gitFeUrl: "https://github.com/Line4Thon-Nugu/Nugu-Frontend",
    servLaunch: "https://nugu-line4.vercel.app/",
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/pyeonshulleng.svg`,
    title: "편슐랭",
    teamName: "청룡열차",
    teamMember: "이효림(BE) 외 5명",
    summary: "편의점 꿀조합 모음 서비스",
    content: `사용자들이 다양한 편의점 상품을 조합하여 자신만의 꿀 조합을 만들고, 공유할 수 있는 웹 애플리케이션

높아지는 물가에 편의점 음식으로 식사를 해결하는 사람이 많아지고, 그에 따라 여러 맛있는 조합도 인스타와 페이스북 등 여러 SNS에 퍼지고 있음.하지만 그 레시피들을 모아서 볼 수 있는 어플이나 사이트가 없고 자신의 레시피를 추천하고 공유하고자 하는 사람들의 커뮤니티 어플도 존재하지 않음.따라서 편의점에서 자신만의 맛있는 조합을 만들고, 그 아이디어를 공유하고 또 다른 사용자의 레시피도 함께 보면서 편의점에서 간단히 식사를 해결하는 것만이 아닌 편의점 식사에서의 즐거움을 제공하고자 하는데 목적을 둠`,
    servIntro: null,
    gitBeUrl: "https://github.com/4-18/BACKEND.git",
    gitFeUrl: "https://github.com/4-18/frontend",
    servLaunch: null,
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/tostar.svg`,
    title: "별이에게",
    teamName: "유니버스",
    teamMember: "김보미(PM) 외 5명",
    summary: "펫로스 증후군을 겪는 반려인들을 위한 따뜻한 위로의 공간",
    content: `별이에게는 반려동물의 상실로 인한 아픔을 치유하고 추억을 되새길 수 있도록 돕습니다.

펫로스 커뮤니티💬 :반려동물을 잃은 사람들이 모여 소통하고 위로받을 수 있는 공간입니다. 실시간 소켓 기능을 통해 감정을 나누고 공감할 수 있습니다.

편지 쓰기 및 답장 기능💌 :떠나보낸 반려동물에게 편지를 쓰고, AI가 생성한 답장을 받는 기능입니다. 이를 통해 마음을 정리하고 추억을 되새길 수 있습니다.

게시물 등록 및 친구 추가🐶 :사용자가 서로의 게시물을 공유하고 친구를 추가하며 더 깊은 교류를 할 수 있습니다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/Likelion-To-Star/BE",
    gitFeUrl: "https://github.com/Likelion-To-Star/FE",
    servLaunch: "https://fe-tostar-turtle0204s-projects.vercel.app/login",
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/2gather.svg`,
    title: "2GATHER",
    teamName: "숙스러운 서성한",
    teamMember: "최현서(FE) 외 5명",
    summary: "AI 기반 타임라인 마케팅 전략 제안 플랫폼",
    content: `대부분의 대학생, 사회초년생들은 제한된 자원과 네트워크의 한계로 인해 팀원을 찾는 것에 어려움을 겪고 있음. 기존의 제한적인 홍보 방법 등을 볼 때 능력있는 사람들이 기회를 찾고 네트워크를 넓히는 데 한계가 있다고 느껴 기획한 서비스

<사회초년생의 성공적인 프로젝트와 창업을 위한 든든한 지원군>

매년 새로운 사용자를 유입하고, 졸업 후 3년, 또는 창업 . 후5년이 경과한 전문가들은 순환 구조에 따라 플랫폼을 떠나게 하여 신선한 크리에이터가 지속적으로 유입되는 시스템을 유지하도록 했다. AIDA 모델을 기반으로 인공지능을 학습시켜 한정된 자금 내에서 최대 효과를 내는 홍보 전략 및 마케팅 플랜을 짤 수 있다. 또한 예산에 맞는 크리에이터 추천이나 직관적인 결과를 제시해준다는 장점도 있다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/Line4thon-Gather/gather_back_end.git",
    gitFeUrl: "https://github.com/Line4thon-Gather/gather_Front_End.git",
    servLaunch: null,
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/line4thonservice.svg`,
    title: "4호선톤 사이트",
    teamName: "채널십오역",
    teamMember: "홍상희(BE) 외 5명",
    summary: "멋쟁이들을 위한 4호선톤 축제",
    content: `해커톤을 참가해도 서비스를 홍보하기에 어려움을 느꼈거나, 서비스 배포 이후 실제 사용자 리뷰를 받을 수 없어서 아쉬웠던 점을 극복하고자 기획한 서비스이자 4호선톤 참가자들이 자유롭게 서비스를 업로드하고, 평가할 수 있는 웹 플랫폼
    서비스 홍보 / 경험 / 리뷰를 한 번에 모아볼 수 있는 서비스를 구현`,
    servIntro: null,
    gitBeUrl: "https://github.com/line4thon-team15/back-repo",
    gitFeUrl: "https://github.com/line4thon-team15/front-repo",
    servLaunch: null,
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/timi.svg`,
    title: "Timi",
    teamName: "티미핑",
    teamMember: "장유빈(FE) 외 4명",
    summary: "가장 간편한 그룹 시간 조율 서비스",
    content: `모바일 환경 최적화 - 공유가 편리한 그룹 시간 관리 서비스

간편한 일회성 서비스 - 이름만 입력하여도 로그인 가능

시간 입력 방식 다양화 - 드래그 시간 입력 + 직접 시간 입력 방식

시간 별 상세 코멘트 가능 - 설명이 필요한 시간이 있는 경우 코멘트 작성

파악하기 쉬운 최적 시간 - 색상으로 모든 팀원이 가능한 시간을 한 눈에 파악

최종 확정 시간 표시 - 그룹의 최종 확정 시간과 만남 장소를 확정지어 팀원 모두 확인 가능`,
    servIntro: null,
    gitBeUrl: "https://github.com/4LineThon/Timi-Server.git",
    gitFeUrl: "https://github.com/4LineThon/Frontend.git",
    servLaunch: null,
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/decemo.svg`,
    title: "DECEMO",
    teamName: "12월의 기적",
    teamMember: "강주은(FE) 외 5명",
    summary:
      "한 해의 마지막, 12월 한 달간 추억을 소중하게 기록할 수 있는 회고 서비스",
    content: `DECEMBER + MEMO : 12월 한달간 질문에 답변하며 한 해를 되돌아볼 수 있는 서비스

종을 클릭하여 매일매일 달라지는 31가지의 질문에 답변하고 저장할 수 있는 기능을 구현하였고, 진행률을 확인가능하다. 여기에서 작성했던 답변은 1월 1일부터 재열람이 가능하며 2024년 연말의 추억과 다짐을 되돌아볼 수 있는 기능을 기획 및 개발했습니다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/2024-LINE4THON/DECEMO",
    gitFeUrl: "https://github.com/2024-LINE4THON/DECEMO",
    servLaunch: null,
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/planpal.svg`,
    title: "플랜팔",
    teamName: "플랜팔",
    teamMember: "박우현(PM), 경민서(BE) 외 4명",
    summary: "혼자 그리고 함께 체계적으로 관리하는 일정",
    content: `오늘날 협업의 필요성은 점차 커지고 있습니다. 개인의 일정관리만큼이나 중요한 것은 서로의 일정을 공유, 조율하여 계획을 함께 실현하는 능력입니다. PlanPal은 이러한 협업 시대에 맞춰 탄생한 캘린더 서비스로, 친구, 가족, 동료와 함께 일정과 약속을 보다 간편하게 관리할 수 있는 솔루션을 제공합니다.

각자의 바쁜 일정을 한눈에 파악하고 가용시간을 기반으로 최적의 약속시간을 자동 추천하여협업과 소통의 효율성을 극대화하는 서비스로 단순한 일정관리 도구를 넘어, 서로의 계획을 함께 실현하는 파트너로 자리 잡을 수 있도록 설계되었습니다.`,
    servIntro: null,
    gitBeUrl:
      "https://github.com/2024-4LINETHON-PlanPal/2024-4LINETHON-PlanPal-Server",
    gitFeUrl:
      "https://github.com/2024-4LINETHON-PlanPal/2024-4LINETHON-PlanPal-Front",
    servLaunch: null,
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/moatravel.svg`,
    title: "MOA(모아)",
    teamName: "16팀",
    teamMember: "서문지(BE), 성윤정(FE) 외 3명",
    summary: "👭함께 떠날 여행 메이트를 모아주는 여행 동행 서비스",
    content: `여행을 계획 중인 사용자가 자신의 여행 스타일을 진단하여 유사한 여행 스타일을 가진 사람들과 동행할 수 있도록 매칭해주는 플랫폼

사용자의 여행 타입을 진단하여, 개인의 여행 스타일에 맞는 여행 유형을 추천하는 기능을 제공합니다. 각 화면을 통해 사용자는 퀴즈 형식으로 여행 취향과 스타일을 탐색할 수 있으며, 결과에 따라 자신의 여행 성향을 시각적으로 확인할 수 있습니다. 또한 검색 및 필터링 기능이나 여행 정보 게시물을 모아 볼 수 있는 커뮤니티 기능도 구현하였습니다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/TEAM-4line/4line_backend.git",
    gitFeUrl: "https://github.com/TEAM-4line/4line_frontend.git",
    servLaunch: null,
    no: "12기",
    category: "4호선톤",
  },
  {
    bgImg: `${s3URL}/yourstory.svg`,
    title: "당신의 이야기",
    teamName: "MEMBERS",
    teamMember: "오시은, 강주은, 성윤정, 이효림, 정지윤",
    summary:
      "이타적 자서전을 통해 세대를 연결하는 사회적 가치 창출 공공 웹서비스",
    content: `봉사자와 사회복지 센터 간 연계로 홀몸 어르신 말벗 활동과 동시에 이타적 자서전 대필 봉사 활동 웹서비스를 통한 봉사 프로그램 구축 및 시스템화

센터(사회복지사/홀몸 어르신)과 지자체(도서관/출판사), 그리고 개인(봉사자/웹 방문자)가 상호작용하며 20~30대 청년층과 60~80대의 어르신과의 만남을 통한 세대 간 연결을가능하게 하는 사회적 가치 창출 공공 웹서비스입니다.`,
    servIntro:
      "https://drive.google.com/file/d/1tJtNxVIRZYni0SjoBAYVcGeBMHToD4zY/view?usp=share_link",
    gitBeUrl: "https://github.com/MINIPROJECT-yourstory",
    gitFeUrl: null,
    servLaunch: null,
    no: "12기",
    category: "미니프로젝트",
  },
  {
    bgImg: `${s3URL}/imfine.svg`,
    title: "아임파인",
    teamName: "아임파인",
    teamMember: "박우현, 최현서, 이현정, 경민서, 유채민",
    summary: "어린이 금융교육 플랫폼",
    content: `
아이들이 건강하고 올바른 경제관념을 가질 수 있도록 금융 경제 상식을 교육하고 더 나아가 아이들이 현명한 소비자이자 생산자로 성장하여 경제적인 사회 구성원이 될 수 있도록 지원하고자 합니다.

지속적이고 쉽게 접근 가능한 어린이들을 위한 금융교육을 제공하기 위해 전 날의 경제 뉴스를 요약하여 제공하고, 해당 내용 기반 퀴즈 기능을 구현하였습니다.`,
    servIntro: null,
    gitBeUrl: "https://github.com/LikeLion-mini-project-IMFINE",
    gitFeUrl: null,
    servLaunch: null,
    no: "12기",
    category: "미니프로젝트",
  },
  {
    bgImg: `${s3URL}/erumi.svg`,
    title: "이루미",
    teamName: "소망",
    teamMember: "김보미, 유동은, 장유빈, 서문지, 홍상희",
    summary: "나라는 꿈을 이뤄가는 공간 : 버킷리스트 아카이브 서비스",
    content: `카테고리 별 장기적인 버킷리스트를 작성하고 관리하고 싶은 사용자, 또는 자기 개발과 꿈을 이루고 싶은 사용자 등을 주요 타겟으로 한 버킷리스트 아카이브 서비스

주요 기능으로는 버킷리스트 작성, 버킷리스트 목록 확인, 버킷리스트 커뮤니티가 있습니다.`,
    servIntro:
      "https://drive.google.com/file/d/1rXjWqIex1wTXJ8yrdO0OE4cNU39y0qry/view?usp=share_link",
    gitBeUrl: "https://github.com/miniproject-likelion12th",
    gitFeUrl: null,
    servLaunch: null,
    no: "12기",
    category: "미니프로젝트",
  },
];
