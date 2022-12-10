import React from "react";

import { DashBoard, DashboardSection } from "./styles/IndexPage.style";

import MyProfile from "../../components/IndexPage/MyProfile/MyProfile";
import MyLectures from "../../components/IndexPage/MyLectures/MyLectures";
import TodaysTodo from "../../components/IndexPage/TodaysTodo/TodaysTodo";
import MyTimetable from "../../components/IndexPage/MyTimetable/MyTimetable";
import MyMemo from "../../components/IndexPage/MyMemo/MyMemo";

import { motion } from "framer-motion";
const IndexPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <DashBoard>
        <DashboardSection>
          <MyProfile />
          <MyLectures />
          <MyTimetable />
          <MyMemo />
          <TodaysTodo />
        </DashboardSection>
      </DashBoard>
    </motion.div>
  );
};

export default IndexPage;
