import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import axios from "axios";
import { projectsData } from "../projectsData";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = ({ project, onClick }) => {
  const { bgImg, title, no, year, summary } = project;

  return (
    <Card onClick={() => onClick(project)}>
      {bgImg ? <CardImage src={bgImg} alt={title} /> : <CardImage />}
      <CardContent>
        <Detail>
          자세히 보기
          <IoIosArrowForward />
        </Detail>
        <CardTitle>{title}</CardTitle>
        <CardSummary fontSize="10px" fontWeight="lighter">
          {summary}
        </CardSummary>
        <CardTagBox>
          <CardTag>{`${no}`}</CardTag>
          <CardTag>{`${no}`}</CardTag>
        </CardTagBox>
      </CardContent>
    </Card>
  );
};

const Project = () => {
  // const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const sortedByYearProjects = projectsData.sort((p1, p2) => p2.year - p1.year);

  const openModal = (projectTitle) => {
    setSelectedProjectId(projectTitle);

    // 뒷화면 스크롤 막기
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
  };

  const closeModal = () => {
    setSelectedProjectId(null);

    // 화면 스크롤 가능하게
    const scrollY = document.body.style.top;
    document.body.style.cssText = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  return (
    <Container>
      <BannerContainer>
        <BannerTextDiv>
          <Text
            fontSize="7rem"
            MobilefontSize="20px"
            fontWeight="bold"
            marginBottom="2vw"
          >
            내 아이디어를
          </Text>
          <Text
            fontSize="7rem"
            MobilefontSize="20px"
            fontWeight="bold"
            marginBottom="3vw"
          >
            내 손으로 실현한다
          </Text>
          <Text fontSize="3.5rem" MobilefontSize="10px" fontWeight="lighter">
            숙명여대 멋쟁이사자처럼 팀원들의 프로젝트를 둘러보세요.
          </Text>
        </BannerTextDiv>
      </BannerContainer>
      <FlexDiv>
        <FilterCohort>전체</FilterCohort>
        <FilterCohort>9기</FilterCohort>
        <FilterCohort>10기</FilterCohort>
        <FilterCohort>11기</FilterCohort>
        <FilterCohort>12기</FilterCohort>
      </FlexDiv>
      <CardContainer>
        {sortedByYearProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => openModal(project.title)}
          />
        ))}
      </CardContainer>
      {selectedProjectId && (
        <Modal projectId={selectedProjectId} onClose={closeModal} />
      )}
    </Container>
  );
};

export default Project;

const Container = styled.div`
  background-color: #111111;
  justify-content: center;
  font-size: calc(1rem + 1vw);
  margin-top: -40px;

  /* @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -80px;
  } */

  @media (max-width: 1024px) {
    margin-top: -130px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50rem;
  background: linear-gradient(
    180deg,
    rgba(230, 120, 0, 0.2) 0%,
    rgba(217, 217, 217, 0) 100%
  );

  /* background-image: url("${process.env
    .REACT_APP_IMAGE_URL}/ProjectBanner.svg"); */
  /* background-color: #b49191; */

  /* @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
  } */

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
  }
`;

const Text = styled.div`
  color: #ffffff;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  align-items: left;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  /* @media (min-width: 768px) and (max-width: 1024px) {
  } */

  @media (max-width: 1024px) {
    font-size: ${(props) => props.MobilefontSize};
  }
`;

const BannerTextDiv = styled.div`
  width: 100rem;
  margin-top: 6rem;

  /* @media (min-width: 768px) and (max-width: 1024px) {
    width: 100rem;
    padding-left: 5vw;
    margin-top: 3rem;
  } */

  @media (max-width: 1024px) {
    width: 100rem;
    padding-left: 8vw;
    margin-top: 0rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;

  @media (min-width: 486px) and (max-width: 1024px) {
    gap: 25px;
  }

  @media (max-width: 486px) {
    gap: 20px;
  }
`;

const FilterCohort = styled.div`
  border: 2px solid #ffffff;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  color: #ffffff;
  font-size: 20px;
  padding-top: 7px;
  /* background-color: #ffffff; */

  &:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }

  @media (min-width: 486px) and (max-width: 1024px) {
    width: 14vw;
    height: 30px;
    font-size: 15px;
    padding-top: 5px;
  }

  @media (max-width: 486px) {
    width: 50px;
    height: 20px;
    font-size: 8px;
    padding-top: 3px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 5vw;
  padding: 4vw 5vw;
  justify-content: center;

  @media (min-width: 786px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 27vw);
    justify-content: center;
  }

  @media (min-width: 480px) and (max-width: 786px) {
    display: grid;
    grid-template-columns: repeat(2, 40vw);
    justify-content: center;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    gap: 8vw;
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 260px;
  background-color: #3f3f3f;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
  cursor: pointer;
  padding-bottom: 5px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
  // 모바일
  @media (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  // 작은 모바일
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    min-width: 100px;
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  background-color: #3f3f3f;
  border-color: none;
  max-width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const CardContent = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
  }

  @media (max-width: 480px) {
    padding-top: 10px;
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 0px;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
  font-size: 9px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 7px;
  }

  @media (max-width: 480px) {
    font-size: 6px;
  }
`;

const CardTitle = styled.div`
  color: #ffffff;
  font-size: 18px;
  margin-top: 5px;

  @media (min-width: 768px) and (max-width: 1024px) {
    color: #ffffff;
    font-size: 15px;
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-top: 1px;
  }
`;

const CardSummary = styled.div`
  color: #ffffff;
  font-size: 9px;
  font-weight: lighter;
  margin-top: 5px;
  height: 25px;
  line-height: 2;

  @media (min-width: 480px) and (max-width: 1024px) {
    line-height: 10px;
    font-size: 8px;
    height: 15px;
  }

  @media (max-width: 480px) {
    line-height: 10px;
    font-size: 5px;
    height: 15px;
  }
`;

const CardTagBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
  text-align: center;
  gap: 8px;
  margin-top: 10px;

  @media (min-width: 480px) and (max-width: 1024px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    gap: 5px;
    margin-top: 10px;
  }
`;

const CardTag = styled.div`
  width: 40px;
  height: 16px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #000000;
  font-size: 9px;
  margin-top: 5px;
  padding-top: 3px;

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 11px;
    font-size: 5px;
    margin-top: 0px;
    padding-top: 3px;
  }
`;
