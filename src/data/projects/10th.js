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

export const tenthProjectsData = [
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
    gitOrgUrl: null,
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
    gitOrgUrl: null,
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
    gitOrgUrl: null,
    gitBeUrl: "https://github.com/Likelion-at-SMWU-10th/Otr-Server",
    gitFeUrl: "https://github.com/Likelion-at-SMWU-10th/OTR_client",
    servLaunch: null,
    no: "10기",
    category: "중앙해커톤",
  },
];
