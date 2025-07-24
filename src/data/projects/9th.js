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

export const ninthProjectsData = [
  {
    bgImg: `${s3URL}/meet.svg`,
    title: "Meet Wizard",
    teamName: "Manna",
    teamMember: "김소은 문다연 박혜준 장한빛",
    summary: "한 번의 클릭으로 약속 정하기",
    content:
      "2인 이상의 그룹 내의 구성원들은 각자의 가용시간과 출발위치를 입력합니다. 타임 테이블에 색의 농도에 따라 구별된 가용 시간을 표기하고, 이를 바탕으로 최적의 만남 시간을 추천합니다. 그룹원들의 출발 위치를 기반으로 중간위치에 가장 가까운 지하철 역을 추천하며, 해당 역 주변의 만남 장소들을 유형별로 추천합니다.",
    servIntro: null,
    gitOrgUrl: null,
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
    gitOrgUrl: null,
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
    gitOrgUrl: null,
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
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/LikeLion-snowball",
    gitFeUrl: null,
    servLaunch: null,
    no: "9기",
    category: "중앙해커톤",
  },
];
