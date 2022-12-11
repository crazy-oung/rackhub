import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  DashBoardContentBox,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  BoxContentListSection,
  BoxContentTitleDescription,
  ProfessorGrey,
  BoxContentTitleIcon,
} from "../IndexPage/styles/IndexPage.style";

import {
  LectureReviewButton,
  LectureScore,
} from "../../components/IndexPage/MyTimetable/MyTimetable.style";

import { PrimaryColor } from "../../static/Shared/commonStyles";
import { ReactComponent as TimetableIconSvg } from "../../assets/svg/icon/template.svg";
import { timetableLectureList } from "../../static/IndexPage/sampleData";

const MoreSemesterButton = styled(LectureReviewButton)`
  margin-right: 12px;
  padding: 2px 12px;
  width: auto;
  :before {
    content: "다륵학기 보기";
  }
`;

const MoreButtonContainor = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoreButton = styled(LectureReviewButton)`
  top: auto;
  right: auto;
  position: relative;

  :before {
    content: "더보기";
  }
`;

const TimetablePage = () => {
  const history = useHistory();
  const [loadedTimeLectures, setLoadedTimeLectures] =
    useState(timetableLectureList);
  const [renderList, setRenderList] = useState("");

  const loadPrevTodo = () => {
    let rows = loadedTimeLectures;
    console.log(rows);

    for (let i = 0; i < 5; i++) {
      rows.push({
        name: "이전 과목" + (rows.length - 7),
        professor: "ㅇㅇ",
        rating: "B",
      });
    }
    console.log(rows);
    setLoadedTimeLectures(rows);

    setRenderList(
      loadedTimeLectures.map(({ name, professor, rating }, index) => {
        return (
          <li key={name} style={{ width: "100%" }}>
            <ContentListTitle>{name}</ContentListTitle>
            {rating !== "" ? (
              <LectureScore
                style={{
                  top: "38px",
                  right: "22px",
                  position: "absolute",
                  fontSize: "18px",
                  color: PrimaryColor,
                  width: "20px",
                }}
              >
                {rating}
              </LectureScore>
            ) : (
              <LectureReviewButton
                onClick={() => history.push("/timetable/" + index)}
              />
            )}

            <ProfessorGrey>
              {professor === "" ? "미정" : professor + "교수님"}{" "}
            </ProfessorGrey>
            <ProfessorGrey></ProfessorGrey>
          </li>
        );
      })
    );
  };

  useEffect(() => {
    setRenderList(
      timetableLectureList.map(({ name, professor, rating }, index) => {
        return (
          <li key={name} style={{ width: "100%" }}>
            <ContentListTitle>{name}</ContentListTitle>
            {rating !== "" ? (
              <LectureScore
                style={{
                  top: "38px",
                  right: "22px",
                  position: "absolute",
                  fontSize: "18px",
                  color: PrimaryColor,
                  width: "20px",
                }}
              >
                {rating}
              </LectureScore>
            ) : (
              <LectureReviewButton
                onClick={() => history.push("/timetable/" + index)}
              />
            )}

            <ProfessorGrey>
              {professor === "" ? "미정" : professor + "교수님"}{" "}
            </ProfessorGrey>
            <ProfessorGrey></ProfessorGrey>
          </li>
        );
      })
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DashBoardContentBox
        style={{ height: "100%", width: "auto", marginBottom: "80px" }}
      >
        <BoxContentTitle>
          <MoreSemesterButton onClick={() => alert("준비중입니다.")} />
          <BoxContentTitleLink to="/timetable">
            <BoxContentTitleIcon>
              <TimetableIconSvg />
            </BoxContentTitleIcon>
            수강한 강의 현황
            <BoxContentTitleDescription>
              누적 강의 학점: 108학점
            </BoxContentTitleDescription>
          </BoxContentTitleLink>
        </BoxContentTitle>

        <BoxContentListSection>
          <BoxContentList>{renderList}</BoxContentList>
        </BoxContentListSection>
        <MoreButtonContainor>
          <MoreButton onClick={loadPrevTodo} />
        </MoreButtonContainor>
      </DashBoardContentBox>
    </motion.div>
  );
};

export default TimetablePage;
