import React from "react";
import { useHistory } from "react-router-dom";
import {
  DashBoardContentBoxWide,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  BoxContentListSection,
  BoxContentTitleDescription,
  BoxContentListSecond,
  ProfessorGrey,
  BoxContentTitleIcon,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import { LectureReviewButton, LectureScore } from "./MyTimetable.style";

import { ReactComponent as LectureTimetableSvg } from "../../../assets/svg/icon/template.svg";
import { timetableLectureList } from "../../../static/IndexPage/sampleData";

const MyTimetable = () => {
  const history = useHistory();

  const trimLetters = (name) => {
    return name.length > 6 ? name.substr(0, 6) + " ..." : name;
  };

  const getThreeLectureFrom = (index) => {
    const rows = [];
    for (let i = index; i < index + 3; i++) {
      rows.push(
        <li key={timetableLectureList[i].name}>
          <ContentListTitle>
            {trimLetters(timetableLectureList[i].name)}
          </ContentListTitle>
          <ProfessorGrey>
            {timetableLectureList[i].professor} 교수님{" "}
          </ProfessorGrey>

          {timetableLectureList[i].rating === "" ? (
            <LectureReviewButton
              onClick={() => {
                history.push("/lectures");
              }}
            />
          ) : (
            <LectureScore>{timetableLectureList[i].rating}</LectureScore>
          )}
        </li>
      );
    }

    return rows;
  };

  return (
    <DashBoardContentBoxWide>
      <BoxContentTitle>
        <BoxContentTitleLink to="/timetable">
          <BoxContentTitleIcon>
            <LectureTimetableSvg />
          </BoxContentTitleIcon>
          수강한 강의 현황
          <BoxContentTitleDescription>
            누적 강의 학점: 108학점
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

export default MyTimetable;
