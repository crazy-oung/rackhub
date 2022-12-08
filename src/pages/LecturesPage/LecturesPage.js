import React from "react";

import {
  Index,
  BannerSection,
  TitleSection,
  TitleBold,
  TitleNormal,
  BannerImg,
  MyProfileSection,
  DashboardSection,
  DashboardLeft,
  DashBoardRight,
  DashboardRightTopSection,
  DashboardRightBottom,
  RightBottomLeftSection,
  RightBottomRightSection,
} from "./styles/LecturesPage.style";

import MyProfile from "../../components/IndexPage/MyProfile/MyProfile";
import TodaysTodo from "../../components/IndexPage/TodaysTodo/TodaysTodo";
import MyTimetable from "../../components/IndexPage/MyTimetable/MyTimetable";
import MyMemo from "../../components/IndexPage/MyMemo/MyMemo";

import { timetableLectureList } from "../../static/IndexPage/sampleData";

const LecturesPage = () => {
  return <Index></Index>;
};

export default LecturesPage;
