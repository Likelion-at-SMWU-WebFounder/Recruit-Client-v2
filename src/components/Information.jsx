import React from "react";
import styled from "styled-components";
import { recruitInfo } from "../seasonalData";

const Information = () => {
  const steps = [
    { title: "서류 접수", date: recruitInfo.docSubmissionDate },
    { title: "서류 합격자 발표", date: recruitInfo.passAnnounce_1st },
    { title: "면접", date: recruitInfo.interview },
    { title: "최종 합격자 발표", date: recruitInfo.passAnnounce_final },
  ];
  return (
    <Wrapper>
      <FormContainer>
        <Line />
        <Text>
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/emoji_eye.svg`}
            alt="eye"
          />
          <div>숙명여대 멋쟁이사자처럼은 이런 사람을 찾습니다!</div>
        </Text>
        <SmallContainer>
          <SmallText>
            • 코딩을 배워보고 싶은 <BoldText>왕초보</BoldText>
          </SmallText>
          <SmallText>
            • 나만의 아이디어를 <BoldText>웹 서비스로 구현 및 배포</BoldText>{" "}
            해보고 싶은 사람
          </SmallText>
          <SmallText>
            • 혼자 공부는 그만! 사람들과{" "}
            <BoldText>함께 웹 개발을 공부</BoldText>
            하고, <BoldText>개발 인적 네트워킹을 형성</BoldText>하고 싶은 사람
          </SmallText>
          <SmallText>
            • 1년 간 멋쟁이사자처럼에서 활동하고 여름방학 동안 진행하는{" "}
            <BoldText>장기 해커톤</BoldText>에 참가할 수 있는 사람
          </SmallText>
          <SmallText>
            • <BoldText>매주 화요일 저녁 7시 ~ 9시</BoldText>에 동아리에 참여할
            수 있는 사람
          </SmallText>
          <SmallText>
            • 포기하지 않고 <BoldText>도전하는 사람</BoldText>
          </SmallText>
          <SmallText>
            • 모르는 것을 창피해 하지 않는 사람 모른다고 숨는 사람보다는{" "}
            <BoldText>적극적으로 질문하고 성장</BoldText>하려는 사람
          </SmallText>
          <SmallText>
            • 완성형인 사람보다 <BoldText>함께 성장하고자 하는 사람</BoldText>
          </SmallText>
        </SmallContainer>

        <Line />
        <Text>
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/emoji_calendar.svg`}
            alt="calendar"
          />
          <div>모집일정</div>
          <WarnText>*최종 합격 시, 활동 기간 1년을 준수해야 합니다. </WarnText>
        </Text>
        <TimelineContainer>
          <TimelineWrapper>
            <TimelineLine />
            <TimelineSteps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <Marker />
                  <Title>
                    {step.title}{" "}
                    {step.title === "면접" && <span>*대면 원칙</span>}
                  </Title>
                  <DivLine />
                  <Date>
                    <p>{step.date}</p>
                  </Date>
                </Step>
              ))}
            </TimelineSteps>
          </TimelineWrapper>
        </TimelineContainer>
      </FormContainer>
    </Wrapper>
  );
};

export default Information;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  padding: 0 100px;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 30px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Line = styled.hr`
  width: 100%;
  border: none;
  height: 0.5px;
  background-color: #fff;
  margin: 100px 0;
`;

const Text = styled.div`
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  div,
  img {
    font-size: 35px;
    font-weight: 700;
    height: 35px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div,
    img {
      font-size: 28px;
      height: 28px;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    div,
    img {
      font-size: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    div,
    img {
      font-size: 13px;
      height: 13px;
    }
  }
`;

const SmallText = styled.div`
  color: white;
  line-height: 1.5;
  margin-top: 15px;
  font-size: 20px;
  font-family: "Noto Sans Light";
  word-break: keep-all;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

const BoldText = styled.span`
  font-family: "Noto Sans Bold";
  font-size: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

const WarnText = styled.span`
  font-family: "Noto Sans Thin";
  font-size: 13px;
  height: 100%;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 15px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  margin-left: ${(props) => props.marginLeft};
`;

const TimelineContainer = styled.div`
  color: white;
  padding: 50px 0;
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  height: 3px;
  background-color: #ff6b00;
  z-index: 1;
  border-radius: 2px;

  @media (max-width: 768px) {
    top: 7.5px;
  }

  &::after {
    content: "";
    position: absolute;
    right: 6px;
    top: 51%;
    transform: translateY(-43%) rotate(40deg); /* 꺾쇠 방향 */
    width: 30px; /* 꺾쇠 크기 */
    height: 30px;
    border-top: 3px solid #ff6b00;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
  }
`;

const TimelineSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  position: relative;
  z-index: 2;
  gap: 5%;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Marker = styled.div`
  width: 20px;
  aspect-ratio: 1/1;
  background-color: #e67800;
  border: 2px solid #fff5ea;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 15px;
  }
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: 500;
  margin-top: 20px;
  white-space: nowrap;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const DivLine = styled.hr`
  border: none;
  height: 1px;
  background-color: #ffc88c;
  width: 100%;
  filter: blur(1px);
  margin: 10px 0;
`;

const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* 내부 div를 가운데 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  text-align: right;

  p {
    font-size: 25px;
    font-family: "Noto Sans Light";
    width: fit-content;
    margin: 0 auto;
    white-space: pre-line;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 10px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;
