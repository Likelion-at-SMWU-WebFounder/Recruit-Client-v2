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

import { ninthProjectsData } from './9th';
import { tenthProjectsData } from './10th';
import { eleventhProjectsData } from './11th';
import { twelfthProjectsData } from './12th';

export const allProjectsData = [
  ...ninthProjectsData,
  ...tenthProjectsData,
  ...eleventhProjectsData,
  ...twelfthProjectsData,
];
