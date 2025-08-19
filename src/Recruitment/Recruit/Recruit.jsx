import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Information from "../../components/Information";
import { useNavigate } from "react-router-dom";
import { notionUrl } from "../../data/seasonal/recruit";
import { recruitInfo } from "../../data/seasonal/recruit";
import { getRecruitPhase } from "../../timeConfig";

const Recruit = () => {
  const phase = getRecruitPhase();

  const isDeadlinePassed = phase === "closedoc";

  const textMessage =
    phase === "startdoc"
      ? "멋쟁이사자처럼 숙명여대 리크루팅 페이지에 오신 것을 환영합니다.\n 희망 지원파트에 접속하시어 서류접수를 진행해주세요."
      : "서류 지원이 마감되었습니다.";

  const subMessage =
    phase === "startdoc"
      ? "*예상치 못한 상황(서버 불안정 등)에 대비하여 마감일 전 미리 질문을 확인 및 답변 내용을 따로 백업하신 후,\n지원서를 제출하시기 바랍니다."
      : `1차 서류 심사 중입니다.\n서류 합격자 발표는 ${recruitInfo.passAnnounce_1st}입니다.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handlePartClick = (part) => {
    navigate(`/recruitment/${part}`);
  };

  return (
    <Layout>
      <Container>
        <Img
          src={`${process.env.REACT_APP_IMAGE_URL}/RecruitLion.svg`}
          alt="lion"
        />

        <Text>{textMessage}</Text>
        <ChangeText>{subMessage}</ChangeText>

        {!isDeadlinePassed && (
          <PartContainer>
            <PartBox
              background="linear-gradient(180deg, #FFEF98 33.65%, #FCF6D6 100%, #FCF6D6 100%)"
              onClick={() => handlePartClick("plan")}
            >
              기획 · 디자인
            </PartBox>
            <PartBox
              background="linear-gradient(180deg, #C387FF 5.52%, #E4CFFF 58.65%)"
              onClick={() => handlePartClick("frontend")}
            >
              프론트엔드
            </PartBox>
            <PartBox
              background="linear-gradient(180deg, #98AFFF 23.75%, #DAE1F9 100%)"
              onClick={() => handlePartClick("backend")}
            >
              백엔드
            </PartBox>
          </PartContainer>
        )}

        <NotionBox href={notionUrl} target="_blank">
          숙명여대 멋쟁이사자처럼 리쿠르팅 홍보 노션 확인하기 {">>>"}
        </NotionBox>

        <Information />
      </Container>
    </Layout>
  );
};

export default Recruit;

const Text = styled.div`
  color: white;
  font-size: 43px;
  font-weight: 700;
  line-height: 65px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  white-space: pre-line;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 25px;
    line-height: 38px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const ChangeText = styled.span`
  font-size: 24px;
  font-weight: 300;
  margin: 50px;
  text-align: center;
  white-space: pre-line;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;
    line-height: 20px;
    margin: 20px;
    margin-top: 30px;
  }
`;

const Img = styled.img`
  margin-top: 30px;
  width: 300px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  background-image: url("${process.env.REACT_APP_IMAGE_URL}/Banner.svg");
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -123px;
  }

  @media (max-width: 768px) {
    margin-top: -123px;
  }
`;

const PartContainer = styled.div`
  display: flex;
  gap: 180px;
  margin-top: 50px;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const PartBox = styled.button`
  width: 270px;
  height: 90px;
  border: 2px solid #333;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  background: ${(props) => props.background};
  color: #111111;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 200px;
    height: 55px;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 36px;
    border: 2px solid #333;
    border-radius: 18px;
    padding: 5px;
    font-size: 13px;
    margin-top: -25px;
  }
`;

const NotionBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  font-style: "Noto Sans Regular";
  color: #ffffff;
  margin-top: 70px;
  text-decoration: underline;
  &:hover {
    text-shadow: 1px 1px 8px #f9b56b;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 700px;
    height: 55px;
    font-size: 22px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    width: 340px;
    height: 35px;
    font-size: 12px;
    margin-top: 40px;
  }
`;
