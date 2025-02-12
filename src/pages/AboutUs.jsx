import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "../style/LayoutStyle";
import { generation } from "../seasonalData";
import { imgCard } from "../seasonalData";
import AnimatedContainer from "../components/AnimatedContainer";

const AboutUs = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/recruitment");
    window.scrollTo(0, 0);
  };

  const ReviewClick = () => {
    window.open(
      "https://www.instagram.com/p/DFwgs8nSucu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "_blank"
    );
  };

  const IGClick = () => {
    window.open(
      "https://www.instagram.com/p/DF4Vn2Zymvn/?utm_source=ig_web_copy_link",
      "_blank"
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Layout>
        <S.Container>
          <AnimatedContainer>
            <S.RowBox>
              <Slogan fontSize="40px">
                전국 최대 규모 개발 · 창업 동아리
                <br /> <OrangeText>멋쟁이사자처럼</OrangeText>의 숙명여대
                지부입니다.
                <br /> <br />
                개발, 기획, 디자인의 열정이 가득한
                <br /> 숙명여대 눈송이 여러분을 환영합니다!
              </Slogan>
              <S.ColumnBox>
                <Img
                  src={`${process.env.REACT_APP_IMAGE_URL}/WinkingLion.svg`}
                  alt="lion"
                />
              </S.ColumnBox>
            </S.RowBox>
          </AnimatedContainer>
          <GradDiv background="linear-gradient(180deg,rgba(230, 120, 0, 0.2) 0%, rgba(217, 217, 217, 0) 100%)">
            <AnimatedContainer>
              <BigTextDiv>
                함께 성장하는 기쁨, 숙명여대 멋쟁이사자처럼
              </BigTextDiv>
            </AnimatedContainer>
            <AnimatedContainer>
              <SmallTextDiv className="smalltext1">
                일주일에 한번 진행하는 정기 세미나로 꾸준히 성장하며, <br />
                60여 개 대학과 함께하는 각종 행사에서 더 다양한 기회와 경험을
                얻습니다.
              </SmallTextDiv>
            </AnimatedContainer>
          </GradDiv>
          <ImgGrid>
            {imgCard.map((card, index) => (
              <AnimatedContainer key={index} index={index + 1}>
                <ImgSmwu key={index}>
                  <img src={card.imgUrl} alt={card.title} />
                  <div className="text-overlay">
                    <div className="title">{card.title}</div>
                    <div className="content">{card.content}</div>
                  </div>
                </ImgSmwu>
              </AnimatedContainer>
            ))}
          </ImgGrid>
          <AnimatedContainer>
            <Review onClick={ReviewClick}>
              숙명여대 멋쟁이사자처럼 12기 활동 돌아보기 &gt;&gt;
            </Review>
          </AnimatedContainer>
          <GradDiv background="linear-gradient(180deg, rgba(14, 50, 132, 0.50) 0%, rgba(174, 190, 249, 0.00) 51.35%, rgba(14, 50, 132, 0.50) 100%)">
            <AnimatedContainer>
              <BigTextDiv>
                숙명여대 멋쟁이사자처럼 활동 트랙 및 교육과정
              </BigTextDiv>
            </AnimatedContainer>
            <AnimatedContainer>
              <SmallTextDiv className="smalltext2">
                기획·디자인, 프론트엔드, 백엔드&nbsp;&nbsp;
                <UnderLineText
                  fontSize="35px"
                  marginTop="55px"
                  marginBottom="95px"
                >
                  3가지 트랙에 한해 지원이 가능하며
                </UnderLineText>
              </SmallTextDiv>
              <SmallTextDiv>
                {" "}
                파트별로 특화된 교육과정 및 다양한 강의를 제공합니다.
              </SmallTextDiv>
            </AnimatedContainer>
            <AnimatedContainer>
              <RowBox>
                <TextBox background="rgba(14, 50, 132, 0.4)">
                  <TextDiv
                    transform="rotate(-11.719deg)"
                    width="95px"
                    height="80px"
                    fontSize="60px"
                    position="absolute"
                  >
                    💡
                  </TextDiv>
                  <TextDiv fontSize="35px" marginTop="95px">
                    기획 · 디자인
                  </TextDiv>
                  <TextDiv
                    fontSize="26px"
                    marginTop="50px"
                    lineHeight="50px"
                    fontFamily="Noto Sans Light"
                  >
                    Figma, UI/UX,
                    <br /> 데이터 분석 등
                  </TextDiv>
                  <TextDiv
                    transform="rotate(7.381deg)"
                    width="95px"
                    height="80px"
                    fontSize="60px"
                    position="absolute"
                    right="0px"
                    bottom="20px"
                  >
                    🎨
                  </TextDiv>
                </TextBox>
                <TextBox background="rgba(14, 50, 132, 0.4)">
                  <TextDiv
                    transform="rotate(-11.719deg)"
                    width="95px"
                    height="80px"
                    fontSize="60px"
                    position="absolute"
                  >
                    💻
                  </TextDiv>
                  <TextDiv fontSize="35px" marginTop="95px">
                    프론트엔드
                  </TextDiv>
                  <TextDiv
                    fontSize="26px"
                    marginTop="105px"
                    fontFamily="Noto Sans Light"
                  >
                    Javascript, React 등
                  </TextDiv>
                  <TextDiv
                    transform="rotate(7.381deg)"
                    width="95px"
                    height="80px"
                    fontSize="60px"
                    position="absolute"
                    right="0px"
                    bottom="20px"
                  >
                    🪄
                  </TextDiv>
                </TextBox>
                <TextBox background="rgba(14, 50, 132, 0.4)">
                  <TextDiv
                    transform="rotate(-11.719deg)"
                    width="95px"
                    height="80px"
                    fontSize="60px"
                    position="absolute"
                  >
                    🌐
                  </TextDiv>
                  <TextDiv fontSize="35px" marginTop="95px">
                    백엔드
                  </TextDiv>
                  <TextDiv
                    fontSize="26px"
                    marginTop="105px"
                    fontFamily="Noto Sans Light"
                  >
                    Django, Spring 등
                  </TextDiv>
                  <TextDiv
                    transform="rotate(7.381deg)"
                    width="95px"
                    height="80px"
                    fontSize="60px"
                    position="absolute"
                    right="0px"
                    bottom="20px"
                  >
                    👩🏻‍💻
                  </TextDiv>
                </TextBox>
                <IGBox background="rgba(239, 300, 260, 0.10)">
                  <div>
                    <img
                      src={`${process.env.REACT_APP_IMAGE_URL}/curriculum_thumbnail.svg`}
                    />
                    <IGText
                      fontSize="15px"
                      marginTop="10px"
                      marginLeft="30px"
                      fontFamily="Noto Sans Light"
                      onClick={IGClick}
                    >
                      더보기 &nbsp; &gt;
                    </IGText>
                  </div>
                </IGBox>
              </RowBox>
            </AnimatedContainer>
          </GradDiv>
          <ApplyDiv>
            <SloganB>
              <ImgSquareT
                src={`${process.env.REACT_APP_IMAGE_URL}/top.svg`}
                alt="top"
                top="-60px"
                left="-55px"
              />
              Be the LION,
              <br />
              Rule Your World!
              <ImgSquareB
                src={`${process.env.REACT_APP_IMAGE_URL}/bottom.svg`}
                alt="bottom"
                top="250px"
                left="640px"
              />
            </SloganB>
            <LinkToAboutUsContainer onClick={onClick}>
              <LinkToAboutUs>
                숙명여대 멋쟁이사자처럼
                <BoldText>&nbsp;&nbsp;{generation} </BoldText>
                지원하기
              </LinkToAboutUs>
              <ImgArrow
                src={`${process.env.REACT_APP_IMAGE_URL}/arrow.svg`}
                alt="arrow"
                top="20px"
                right="50px"
              />
            </LinkToAboutUsContainer>
          </ApplyDiv>
        </S.Container>
      </Layout>
    </div>
  );
};

export default AboutUs;

const Layout = styled.div`
  display: flex;
`;

const Slogan = styled.div`
  /* width: 50%; */
  color: #fefefe;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.02px;
  min-width: 800px;

  @media (max-width: 1024px) {
    font-size: 22px;
    margin-left: 0;
    /* text-align: center; */
    word-wrap: keep-all;
    margin-bottom: 50px;
    min-width: auto;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 0;
    /* text-align: center; */
    word-wrap: keep-all;
    margin-bottom: 50px;
    min-width: auto;
    margin-top: -120px;
  }
`;

const OrangeText = styled.span`
  color: #e67800;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.02px;

  @media (max-width: 480px) {
    font-size: 15px;
    word-wrap: keep-all;
  }
`;

const Img = styled.img`
  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 100px;
    margin-top: -130px;
  }
`;

const GradDiv = styled.div`
  border-top: 1px solid #000;
  background: ${(props) => props.background};

  *& .smalltext1 {
    margin-top: 55px;
    margin-bottom: 95px;
    padding: 0;
  }

  *& .smalltext2 {
    margin-top: 55px;
    margin-bottom: 0px;
    padding: 0;
  }
`;

const TextDiv = styled.div`
  position: ${(props) => props.position};
  color: #fefefe;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  font-style: normal;
  font-weight: 600;
  line-height: ${(props) => props.lineHeight || "normal"};
  letter-spacing: -1.313px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  transform: ${(props) => props.transform};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  font-family: ${(props) => props.fontFamily};
  @media (max-width: 1024px) {
    font-size: 30px;
    word-break: keep-all;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    top: 20px;
    font-size: 20px;
  }
`;

const BigTextDiv = styled.div`
  color: #fefefe;
  text-align: center;
  font-size: 55px;
  font-style: normal;
  font-weight: 600;
  line-height: ${(props) => props.lineHeight || "normal"};
  letter-spacing: -1.313px;
  margin-top: 95px;

  @media (max-width: 1024px) {
    font-size: 40px;
    word-break: keep-all;
    word-spacing: 4px;
    min-width: auto;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    word-break: keep-all;
    word-spacing: 4px;
  }
`;

const SmallTextDiv = styled.div`
  color: #fefefe;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: ${(props) => props.lineHeight || "normal"};
  letter-spacing: -1.313px;
  margin-top: 0px;
  margin-bottom: 95px;
  /* min-width: 1200px; */

  @media (max-width: 1024px) {
    font-size: 30px;
    word-break: keep-all;
    word-spacing: 3px;
    min-width: auto;
  }

  @media (max-width: 480px) {
    font-size: 12.5px;
    word-break: keep-all;
    word-spacing: 3px;
    min-width: auto;
  }
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 100px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 0;
  }

  @media (max-width: 786px) {
    flex-direction: column;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 595.3px);
  grid-template-rows: repeat(2, 1fr);
  gap: 50px; /* 그리드 항목 간 간격 */
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    gap: 0;
  }
`;

const Review = styled.div`
  color: #fefefe;
  text-align: right;
  font-size: 25px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-right: 10vw;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;

  @media (max-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 5vw;
    font-size: 25px;
    word-break: keep-all;
    word-spacing: 4px;
    min-width: auto;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 50px;
  }

  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
      0 0 10px rgba(255, 255, 255, 0.6);
  }
`;

const ImgSmwu = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  img {
    height: 371px;
    flex-shrink: 0;
    width: 595.73px;
    object-fit: cover;
    border-radius: 30px;
    opacity: 0.5;
    mix-blend-mode: exclusion;

    @media (max-width: 1024px) {
      height: 300px;
      width: 90%;
      margin-bottom: 20px;
    }
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    width: 90%;
    .title {
      font-weight: 700;
      font-size: 40px;
      @media (max-width: 1024px) {
        font-size: 22px;
      }
      @media (max-width: 480px) {
        font-size: 17px;
      }
    }
    .content {
      line-height: 22px;
      white-space: pre-line;
      margin-top: 10px;
      font-weight: 500;
      font-family: "Noto Sans Light";
      font-size: 18px;
      @media (max-width: 480px) {
        font-size: 12px;
      }
    }
  }
`;

const UnderLineText = styled.span`
  text-decoration: underline;
  color: #fefefe;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.778px;
  margin-top: 55px;

  @media (max-width: 480px) {
    font-size: 15px;
    word-break: keep-all;
    word-spacing: 3px;
  }
`;

const TextBox = styled.div`
  position: relative;
  width: 22%;
  height: 440px;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${(props) => props.background};

  @media (max-width: 1024px) {
    height: auto;
    width: 90%;
    margin-bottom: 20px;
  }
`;

const IGBox = styled.div`
  display: flex;
  width: 22%;
  align-items: center;
  justify-content: center;
  height: 440px;
  flex-shrink: 0;
  border-radius: 30px;
  padding-top: 20px;
  background: ${(props) => props.background};

  @media (max-width: 1024px) {
    height: auto;
    width: 90%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    height: auto;
    width: 90%;
    padding-top: 45px;
    padding-bottom: 25px;
    margin-bottom: 20px;
  }
`;

const IGText = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 16px;
  padding-top: 10px;
  cursor: pointer;
`;

const ApplyDiv = styled.div`
  height: calc(100vh + 100px);
  /* height: 100vh; */
  @media (max-width: 1024px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const SloganB = styled.div`
  position: relative;
  /* width: 50%; */
  color: #fefefe;
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.02px;
  margin-top: 200px;
  margin-bottom: 180px;
  margin-left: 150px;

  @media (max-width: 1024px) {
    font-size: 70px;
    margin-left: 150px;
    word-wrap: keep-all;
    margin-top: 120px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
    margin-left: 30px;
    word-wrap: keep-all;
    margin-top: 120px;
    margin-bottom: 100px;
  }
`;

const ImgSquareT = styled.img`
  position: absolute;
  top: -60px;
  left: -55px;

  @media (max-width: 1024px) {
    top: -30px;
    left: -55px;
    /* width: 30px; */
  }

  @media (max-width: 480px) {
    top: -10px;
    left: -15px;
    width: 30px;
  }
`;

const ImgSquareB = styled.img`
  position: absolute;
  top: 250px;
  left: 640px;

  @media (max-width: 1024px) {
    top: 155px;
    left: 480px;
    /* width: 30px; */
  }

  @media (max-width: 768px) {
    top: 180px;
    left: 502px;
    /* width: 30px; */
  }

  @media (max-width: 480px) {
    top: 55px;
    left: 152px;
    width: 30px;
  }
`;

const ImgArrow = styled.img`
  position: absolute;
  top: 20px;
  right: 50px;

  @media (max-width: 1024px) {
    top: 65px;
  }

  @media (max-width: 480px) {
    top: 0;
    right: 10px;
    width: 550px;
  }
`;

const LinkToAboutUsContainer = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
      0 0 10px rgba(255, 255, 255, 0.6);
  }
`;

const LinkToAboutUs = styled.div`
  color: #fff;
  font-size: 40px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -2.02px;
  font-family: "Noto Sans Thin";
  position: absolute;
  right: 240px;
  white-space: nowrap;

  @media (max-width: 1024px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    font-size: 30px;
    top: 50px;
  }

  @media (max-width: 480px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    font-size: 20px;
    top: 0;
  }

  @media (max-width: 280px) {
    font-size: 15px;
  }
`;

const BoldText = styled.span`
  font-family: "Noto Sans Bold";
  font-size: 40px;

  @media (max-width: 480px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    font-size: 20px;
  }

  @media (max-width: 280px) {
    font-size: 15px;
  }
`;
