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

import { currentLectureList } from "../../../static/IndexPage/sampleData";

const MyLectures = () => {
  const currLectureList = JSON.stringify(currentLectureList);

  const totalGP = currentLectureList.reduce((a, b) => a + (b["grade"] || 0), 0);

  return (
    <DashBoardContentBoxWide>
      <BoxContentTitle>
        <BoxContentTitleLink to="/lectures">
          내 수강중 강의
          <BoxContentTitleDescription>
            현재 수강중인 강의: {currentLectureList.length}개, 총 {totalGP}학점
          </BoxContentTitleDescription>
        </BoxContentTitleLink>
      </BoxContentTitle>

      <BoxContentListSection>
        <BoxContentList>
          {currentLectureList.map(
            ({ lecture, professer, grade, date }, index) => (
              <li key={index} style={{ width: "100%" }}>
                <ContentListTitle>{lecture}</ContentListTitle>
                <ContentListContent>{professer}</ContentListContent>
                <EndDate>{date}</EndDate>
              </li>
            )
          )}
        </BoxContentList>
        <BoxContentListSeparator />
        <BoxContentListSecond style={{ left: "20px" }}>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>End: 2022.12.10</EndDate>
          </li>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>End: 2022.12.10</EndDate>
          </li>
          <li>
            <ContentListTitle>객체지향</ContentListTitle>
            <ContentListContent>김상진 교수님 </ContentListContent>
            <EndDate>End: 2022.12.10</EndDate>
          </li>
        </BoxContentListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide>
  );
};

export default MyLectures;
