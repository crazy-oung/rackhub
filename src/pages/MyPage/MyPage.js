import React from "react";

import { MyProfileSection } from "./styles/MyPage.style";
import {
  DashBoardContentBoxWide,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  ContentListContent,
  BoxContentListSection,
  EndDate,
  BoxContentTitleDescription,
  BoxContentListSecond,
  DashBoard,
  DashboardSection,
} from "../IndexPage/styles/IndexPage.style";

import {
  MyProfileIcon,
  MyName,
  MyMainFocus,
  MyTodoResult,
} from "../../components/IndexPage/MyProfile/MyProfile.style";

import { motion } from "framer-motion";

const MyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DashboardSection>
        <DashBoardContentBoxWide
          style={{ padding: "40px", width: "100%", height: "auto" }}
        >
          <MyProfileSection>
            <MyProfileIcon />
            <MyName>테스트 유저</MyName>
            <MyMainFocus>기말고사 기간 진행중</MyMainFocus>
          </MyProfileSection>
        </DashBoardContentBoxWide>
      </DashboardSection>
    </motion.div>
  );
};

export default MyPage;
