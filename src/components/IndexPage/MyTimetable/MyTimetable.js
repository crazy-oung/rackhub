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
  TitleProfessor,
  ProfessorGrey,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import { timetableLectureList } from "../../../static/IndexPage/sampleData";

const MyTimetable = () => {
  const totalGP = timetableLectureList.reduce(
    (a, b) => a + (b["grade"] || 0),
    0
  );

  const trimLetters = (name) => {
    return name.length > 6 ? name.substr(0, 6) + " ..." : name;
  };

  const getThreeLectureFrom = (index) => {
    const rows = [];
    for (let i = index; i < index + 3; i++) {
      rows.push(
        <li key={index}>
          <ContentListTitle>
            {trimLetters(timetableLectureList[i].name)}
          </ContentListTitle>
          <ProfessorGrey>
            {timetableLectureList[i].professor} 교수님{" "}
          </ProfessorGrey>
          <TitleProfessor>
            {timetableLectureList[i].rating.toFixed(1)}
          </TitleProfessor>
        </li>
      );
    }

    return rows;
  };

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
        <BoxContentList>{getThreeLectureFrom(0)}</BoxContentList>
        <BoxContentListSeparator />
        <BoxContentListSecond style={{ left: "20px" }}>
          {getThreeLectureFrom(3)}
        </BoxContentListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide>
  );
};

export default MyTimetable;
