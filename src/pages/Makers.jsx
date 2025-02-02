import React, { useEffect } from "react";
import styled from "styled-components";
import { makers } from "../seasonalData.js";
import AnimatedContainer from "../components/AnimatedContainer";

const Makers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Container>
        <Title>
          <div style={{ display: window.innerWidth <= 700 ? "block" : "flex" }}>
            <span className="bold">멋쟁이사자처럼 숙명여대 홈페이지</span>
            <span>
              를{window.innerWidth <= 700 && <br />} 만든 멋쟁이 개발자들입니다.
            </span>
          </div>
        </Title>
        <Hr />

        <RowProfile>
          {makers[0].members.map((item, index) => (
            <>
              <div style={{ width: "100%" }}>
                <AnimatedContainer key={index} index={index}>
                  <ProfileContainer>
                    <Img src={item.img} alt="profileimg" />
                    <BoxContainer>
                      <ProfileNameText>
                        {item.name} | {item.part}
                      </ProfileNameText>
                      <ProfileText>{item.sooklion}</ProfileText>
                      <ProfileText>{item.major}</ProfileText>
                    </BoxContainer>
                  </ProfileContainer>
                </AnimatedContainer>
              </div>
            </>
          ))}
        </RowProfile>

        <Hr style={{ marginTop: "30px" }} />
        <Title>
          <div className="bold">🛠️ Web-Founders 2nd</div>
        </Title>

        <RowProfile>
          {makers[1].members.map((item, index) => (
            <>
              <div style={{ width: "100%" }}>
                <AnimatedContainer
                  key={index + makers[0].members.length}
                  index={index + makers[0].members.length}
                >
                  <ProfileContainer>
                    <Img src={item.img} alt="profileimg" />
                    <BoxContainer>
                      <ProfileNameText>
                        {item.name} | {item.part}
                      </ProfileNameText>
                      <ProfileText>{item.sooklion}</ProfileText>
                      <ProfileText>{item.major}</ProfileText>
                    </BoxContainer>
                  </ProfileContainer>
                </AnimatedContainer>
              </div>
            </>
          ))}
        </RowProfile>
      </Container>
    </Layout>
  );
};

export default Makers;

const Title = styled.div`
  color: white;
  width: 100%;
  margin: 30px 0;

  div,
  span {
    font-family: "Noto Sans Regular";
    font-size: 30px;
    line-height: 33px;
  }

  .bold {
    font-family: "Noto Sans Bold";
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div,
    span {
      font-family: "Noto Sans Regular";
      font-size: 20px;
      line-height: 23px;
    }
  }

  @media (max-width: 480px) {
    div,
    span {
      font-family: "Noto Sans Regular";
      font-size: 20px;
      line-height: 23px;
    }
  }
`;

const Img = styled.img`
  width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const Layout = styled.div`
  display: flex;
  padding: 50px 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 30px;
  }
`;

const Hr = styled.hr`
  border: 0.5px solid #9e9e9e;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  color: white;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 480px) {
    margin-top: -70px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0px;
  gap: 5%;
  margin-top: 60px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const RowProfile = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileText = styled.div`
  font-size: 20px;
  line-height: 25px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 15px;
    line-height: 20px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 17px;
    margin-left: 10px;
  }
`;

const ProfileNameText = styled.div`
  font-size: 23px;
  line-height: 36px;
  font-weight: 800;
  margin-bottom: 5px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 13px;
    margin-left: 10px;
  }
`;
