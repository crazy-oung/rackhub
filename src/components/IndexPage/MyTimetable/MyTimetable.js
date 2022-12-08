import React from "react";

import {
  DashBoardContentBoxWide,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  ContentListContent,
  BoxContentListSeparator,
  BoxContentListSection,
  EndDate,
  BoxContentTitleDescription,
  BoxContentListSecond,
} from "../../../pages/IndexPage/styles/IndexPage.style";

const MyTimetable = () => {
  return (
    <DashBoardContentBoxWide>
      <BoxContentTitle>
        <BoxContentTitleLink to="/timetable">
          수강한 강의 현황
          <BoxContentTitleDescription>
            누적 강의 학점: 108학점
          </BoxContentTitleDescription>
        </BoxContentTitleLink>
      </BoxContentTitle>

      <BoxContentListSection>
        <BoxContentList>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>2021.12.10</EndDate>
          </li>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>2021.12.10</EndDate>
          </li>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>2021.12.10</EndDate>
          </li>
        </BoxContentList>
        <BoxContentListSeparator />
        <BoxContentListSecond style={{ left: "20px" }}>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>2021.12.10</EndDate>
          </li>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>2021.12.10</EndDate>
          </li>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>2021.12.10</EndDate>
          </li>
        </BoxContentListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide>
  );
};

export default MyTimetable;
