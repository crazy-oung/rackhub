import React from "react";

import {
  DashBoardContentBoxWide,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  BoxContentListSection,
  EndDate,
  BoxContentTitleDescription,
  BoxContentListSecond,
  ProfessorGrey,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import { currentLectureList } from "../../../static/IndexPage/sampleData";

const MyLectures = () => {
  const totalGP = currentLectureList.reduce((a, b) => a + (b["grade"] || 0), 0);

  const trimLetters = (name) => {
    return name.length > 6 ? name.substr(0, 6) + " ..." : name;
  };
  const getThreeLectureFrom = (index) => {
    const rows = [];
    for (let i = index; i < index + 3; i++) {
      rows.push(
        <li key={trimLetters(currentLectureList[i].lecture)}>
          <ContentListTitle>
            {trimLetters(currentLectureList[i].lecture)}
          </ContentListTitle>
          <ProfessorGrey>
            {currentLectureList[i].professer} 교수님
          </ProfessorGrey>
          <EndDate>{currentLectureList[i].date}</EndDate>
        </li>
      );
    }

    return rows;
  };

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
        <BoxContentList>{getThreeLectureFrom(0)}</BoxContentList>

        <BoxContentListSecond style={{ left: "20px" }}>
          {getThreeLectureFrom(3)}
        </BoxContentListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide>
  );
};

export default MyLectures;
