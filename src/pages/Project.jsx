import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import axios from "axios";
import { projectsData } from "../projectsData";

const ProjectCard = ({ project, onClick }) => {
  const { bgImg, title, no, year, summary } = project;

  return (
    <Card onClick={() => onClick(project)}>
      {bgImg ? <CardImage src={bgImg} alt={title} /> : <CardImage />}
      <CardContent>
        <CardText fontSize="3.5vw" fontWeight="bolder">
          {title}
        </CardText>
        <CardText
          fontSize="2.5vw"
          fontWeight="bold"
        >{`${no} | ${year}`}</CardText>
        <CardText fontSize="2.3vw" fontWeight="lighter">
          {summary}
        </CardText>
        <Detail>
          상세보기
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/ShowDetail.svg`}
            alt="ShowDetail"
            style={{ width: "40px", height: "auto", marginLeft: "5px" }}
          />
        </Detail>
      </CardContent>
    </Card>
  );
};

const Project = () => {
  // const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const sortedByYearProjects = projectsData.sort((p1, p2) => p2.year - p1.year);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  // `${process.env.REACT_APP_API_ROOT}/api/project`
  //       );
  //       const data = response.data;
  //       setProjects(data.result);
  //       console.log(data.result);
  //     } catch (error) {
  //       console.error("Error fetching project data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
      {sortedByYearProjects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
          onClick={() => openModal(project.title)}
        />
      ))}
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

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -80px;
  }

  @media (max-width: 480px) {
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

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
  }

  @media (max-width: 480px) {
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

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.MobilefontSize};
  }
`;

const BannerTextDiv = styled.div`
  width: 100rem;
  margin-top: 6rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100rem;
    padding-left: 5vw;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    width: 100rem;
    padding-left: 8vw;
    margin-top: 0rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 5vw;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }
`;

const FilterCohort = styled.div`
  border: 5px #ff0000;
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

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 14vw;
    height: 30px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 20px;
    font-size: 8px;
  }
`;

const Card = styled.div`
  flex: 0 0 calc(45% - 3.5vw);
  width: 45%;
  background-color: #f8dbbb;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0.5vw 1.25vw rgba(0, 0, 0, 0.25);
  margin-top: 5.5vw;
  cursor: pointer;
`;

/*
const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  background-color: #EB9537;
`;
*/

const CardImage = styled.img`
  width: 100%;
  height: 20vw;
  object-fit: cover;
  border-radius: 20px;
  background-color: #eb9537;
  max-width: 100%;
  max-height: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 1.8vw;
`;

const CardText = styled.div`
  color: #000000;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: 0.5vw;
  padding: 0.5vw;
  line-height: 2.8vw;
`;

const Detail = styled.div`
  border-radius: 3vw;
  background-color: #eb9537;
  color: #000000;
  font-size: 3vw;
  font-weight: 700;
  text-align: center;
  padding: 1.2vw;
  margin-top: 3vw;

  &:hover {
    background-color: #c66c0a;
    color: #ffffff;
    cursor: pointer;
  }
`;
