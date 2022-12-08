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
} from "./styles/TimetablePage.style";

import MyProfile from "../../components/IndexPage/MyProfile/MyProfile";
import TodaysTodo from "../../components/IndexPage/TodaysTodo/TodaysTodo";
import MyTimetable from "../../components/IndexPage/MyTimetable/MyTimetable";
import MyMemo from "../../components/IndexPage/MyMemo/MyMemo";

import { timetableLectureList } from "../../static/IndexPage/sampleData";

const TimetablePage = () => {
  return (
    <Index>
      <MyProfileSection>
        <MyProfile />
      </MyProfileSection>

      <DashboardSection>
        <DashboardLeft>
          <MyProfile />
        </DashboardLeft>

        <DashBoardRight>
          <DashboardRightTopSection
            timetableLectureListSize={timetableLectureList.length}
          >
            <TodaysTodo />
          </DashboardRightTopSection>

          <DashboardRightBottom>
            <RightBottomLeftSection>
              <MyTimetable />
            </RightBottomLeftSection>

            <RightBottomRightSection>
              <MyMemo />
            </RightBottomRightSection>
          </DashboardRightBottom>
        </DashBoardRight>
      </DashboardSection>
    </Index>
  );
};

export default TimetablePage;
