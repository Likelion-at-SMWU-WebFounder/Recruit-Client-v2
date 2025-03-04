import React from "react";
import { ThemeProvider, styled } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import theme from "./style/theme";

import NonRecruit from "./Recruitment/Recruit/NonRecruit";
import Recruit from "./Recruitment/Recruit/Recruit";

import SubmitSuccess from "./Recruitment/Result/SubmitSuccess";
import SubmitFail from "./Recruitment/Result/SubmitFail";

import FirstRecruit from "./Recruitment/Recruit/FirstRecruit";
import FirstVerification from "./Recruitment/Verification/FirstVerification";
import FirstResult from "./Recruitment/Result/FirstResult";

import FinalRecruit from "./Recruitment/Recruit/FinalRecruit";
import FinalVerification from "./Recruitment/Verification/FinalVerification";
import FinalResult from "./Recruitment/Result/FinalResult";

import NavBar from "./components/Common/NavBar";
import Footer from "./components/Common/Footer";
import Makers from "./pages/Makers";
import AboutUs from "./pages/AboutUs";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import ApplyPage from "./pages/ApplyPage";
import Project from "./pages/Project";

const Div = styled.div`
  margin-top: 120px;
  min-height: 100vh;
`;
function App() {
  const LayOut = (Component) => (
    <>
      <NavBar />
      <Div>
        <Component />
      </Div>
      <Footer />
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <div>
            <Routes>
              <Route path="*" element={LayOut(NotFound)} />
              <Route path="/" element={LayOut(Landing)} />
              <Route path="/home" element={LayOut(AboutUs)} />
              <Route path="/project" element={LayOut(Project)} />
              <Route
                path="/recruitment"
                element={LayOut(FinalRecruit) /*[--] Recruit 앞 부분 수정*/}
              />
              {/* Recruit(리쿠르팅 중) or NonRecruit(리쿠르팅 기간 X) or FirstRecruit(1차 서류 발표 이후) or FinalRecruit(최종 발표 이후) 변경 */}
              {/* <Route path="/recruitment/:part" element={<ApplyPage />} />
              <Route
                path="/recruitment/submit-success"
                element={<SubmitSuccess />}
              />
              <Route path="/recruitment/submit-fail" element={<SubmitFail />} /> */}

              {/* 1차 발표 때 FirstVerification, 최종 발표 때 FinalVerification */}

              <Route
                path="/recruitment/result-verification"
                element={<FinalVerification />}
              />
              <Route path="/contact" element={LayOut(Contact)} />
              <Route path="/makers" element={LayOut(Makers)} />
            </Routes>
          </div>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1500px; /* 최대 너비를 설정하여 너무 커지지 않게 함 */
  margin: 0 auto; /* 가운데 정렬 */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
