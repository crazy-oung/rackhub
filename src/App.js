import React from "react";
import styled from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyle } from "./GlobalStyle";
import {
  DefaultContentWidth,
  MobileViewWidth,
} from "./static/Shared/commonStyles";

import Navigation from "./components/Shared/Navigation/Navigation";
import Footer from "./components/Shared/Footer/Footer";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

import TodoPage from "./pages/TodoPage/TodoPage";
import LecturesPage from "./pages/LecturesPage/LecturesPage";
import TimetablePage from "./pages/TimetablePage/TimetablePage";
import MyPage from "./pages/MyPage/MyPage";
import MemoPage from "./pages/MemoPage/MemoPage";

export const Main = styled.main`
  min-height: 800px;

  min-width: ${DefaultContentWidth};
  padding: 0 20px;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (min-width: 768px) {
    min-width: 320px;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    height: inherit;
    padding: 0;
    min-width: 320px;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Main role="main">
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={IndexPage} />

            {/* 라우터 테스팅용 주소 컴포넌트 인덱스 페이지로 통일 */}
            <Route path="/todo" component={TodoPage} />
            <Route path="/lectures" component={LecturesPage} />
            <Route path="/timetable" component={TimetablePage} />
            <Route path="/memo" component={MemoPage} />
            <Route path="/mypage" component={MyPage} />

            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />

            <Redirect from="*" to="/" />
          </Switch>
        </AnimatePresence>
      </Main>
      <Footer />
    </>
  );
};

export default App;
