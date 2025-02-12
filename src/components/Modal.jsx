import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { projectsData } from "../projectsData";
import { IoClose } from "react-icons/io5";

const Modal = ({ projectId, onClose }) => {
  // const [project, setProject] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_ROOT}/api/project/${projectId}`
  //       );
  //       const data = response.data;
  //       setProject(data.result);
  //       console.log(data.result);
  //     } catch (error) {
  //       console.error("Error fetching project data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [projectId]);

  // if (loading) {
  //   return <LoadingMessage>Loading...</LoadingMessage>;
  // }

  const project = projectsData.find((project) => project.title === projectId);

  if (!project) {
    return <ErrorMessage>Cannot find project data.</ErrorMessage>;
  }

  const {
    bgImg,
    title,
    teamName,
    teamMember,
    summary,
    content,
    servIntro,
    gitOrgUrl,
    gitBeUrl,
    gitFeUrl,
    servLaunch,
    no,
    category,
  } = project;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>
        {bgImg ? (
          <ModalImage src={bgImg} alt={title} />
        ) : (
          <ModalImage
            src={`${process.env.REACT_APP_IMAGE_URL}/NullImage.svg`}
            alt={title}
          />
        )}
        <ModalHeader>
          <TitleWrapper>
            <ModalTitle>{title}</ModalTitle>
            <TagWrapper>
              <ModalTag>{`${no}`}</ModalTag>
              <ModalTag>{`${category}`}</ModalTag>
            </TagWrapper>
          </TitleWrapper>
          <ModalSubtitle>{`${teamName} | ${teamMember}`}</ModalSubtitle>
        </ModalHeader>

        <ModalText>{summary}</ModalText>
        <Hr />
        <ModalBody>
          <ModalText marginTop="1vw">{content}</ModalText>
        </ModalBody>

        <ButtonWrapper>
          {servIntro && (
            <ModalButton
              as="a"
              href={servIntro}
              target="_blank"
              rel="noopener noreferrer"
            >
              서비스 소개
            </ModalButton>
          )}
          {gitOrgUrl && (
            <ModalButton
              as="a"
              href={gitOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </ModalButton>
          )}
          {gitBeUrl && (
            <ModalButton
              as="a"
              href={gitBeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github (BE)
            </ModalButton>
          )}
          {gitFeUrl && (
            <ModalButton
              as="a"
              href={gitFeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github (FE)
            </ModalButton>
          )}
          {servLaunch && (
            <ModalButton
              as="a"
              href={servLaunch}
              target="_blank"
              rel="noopener noreferrer"
            >
              서비스 주소
            </ModalButton>
          )}
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 2vw;
  padding: 2vw;
  width: 80vw;
  max-width: 700px;
  max-height: 95vh;
  overflow-y: none;
  position: relative;
  color: #000000;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
  font-size: 2.5vw;
  cursor: pointer;
  color: #bbbbbb;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ModalHeader = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5vw;
  font-weight: 700;
  padding-top: 1vw;
  padding-bottom: 1vw;

  @media (max-width: 480px) {
    padding-top: 1.5vw;
    padding-bottom: 0.5vw;
    font-size: 15.5px;
  }
`;

const ModalSubtitle = styled.p`
  font-size: 1.2vw;
  color: #000;
  font-weight: 700;
  padding-bottom: 1vw;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
  text-align: center;
  gap: 8px;
  padding-bottom: 10px;
`;

const ModalTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 30px;
  border-radius: 20px;
  background-color: #ffffff;
  border: 2px solid #333333;
  color: #333333;
  font-size: 1vw;
  font-weight: bold;
  margin-top: 5px;
  padding-left: 15px;
  padding-right: 15px;
  white-space: nowrap;

  @media (max-width: 1024px) {
    width: auto;
    height: 20px;
    font-size: 8px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 2vw;
  margin: auto;
  border: none;
  padding: 1vw;
  display: block;
  height: auto;
`;

const ModalBody = styled.div`
  max-height: 18vh;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const ModalText = styled.p`
  font-size: 0.9vw;
  margin-bottom: 1vw;
  font-weight: lighter;
  margin-top: ${(props) => props.marginTop};
  line-height: 1.2vw;
  white-space: pre-line;

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 13px;
  }
`;

const Hr = styled.hr`
  width: 100%;
`;

const LoadingMessage = styled.p`
  font-size: 1vw;
  margin-bottom: 1vw;
  color: #666;
`;

const ErrorMessage = styled.p`
  font-size: 1vw;
  margin-bottom: 1vw;
  color: red;
`;

const ModalButton = styled.button`
  border-radius: 0.6vw;
  border: 3px solid #eb9537;
  background-color: #fff5ea;
  color: #eb9537;
  font-size: 1vw;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0.5vw 0.5vw;
  margin: 0.5vw;
  width: 9vw;

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 5px 10px;
    margin: 5px;
    width: 80px;
    border-radius: 5px;
  }

  &:hover {
    background-color: #eb9537;
    color: #fefefe;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
`;

export default Modal;
