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

const s3URL = process.env.REACT_APP_IMAGE_URL;

export const projectsData = [
  {
    year: 2023,
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
  },
  {
    year: 2023,
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
  },
  {
    year: 2023,
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
  },
  {
    year: 2022,
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
  },
  {
    year: 2022,
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
  },
  {
    year: 2022,
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
  },
  {
    year: 2021,
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
  },
  {
    year: 2021,
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
  },
  {
    year: 2021,
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
  },
  {
    year: 2021,
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
  },
  {
    year: 2024,
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
  },
  {
    year: 2024,
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
  },
  {
    year: 2024,
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
  },
];
