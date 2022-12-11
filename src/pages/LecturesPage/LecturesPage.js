import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import {
  DashBoardContentBox,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  BoxContentListSection,
  EndDate,
  BoxContentTitleDescription,
  BoxContentListSecond,
  ProfessorGrey,
  BoxContentTitleIcon,
} from "../IndexPage/styles/IndexPage.style";

import { ReactComponent as LectureIconSvg } from "../../assets/svg/icon/document-text.svg";
import { currentLectureList } from "../../static/IndexPage/sampleData";

const LecturesPage = () => {
  const totalGP = currentLectureList.reduce((a, b) => a + (b["grade"] || 0), 0);
  const history = useHistory();

  const trimLetters = (name) => {
    return name.length > 6 ? name.substr(0, 6) + " ..." : name;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DashBoardContentBox style={{ height: "100%", width: "auto" }}>
        <BoxContentTitle>
          <BoxContentTitleLink to="/lectures">
            <BoxContentTitleIcon>
              <LectureIconSvg />
            </BoxContentTitleIcon>
            내 수강중 강의
            <BoxContentTitleDescription>
              현재 수강중인 강의: {currentLectureList.length}개, 총 {totalGP}
              학점
            </BoxContentTitleDescription>
          </BoxContentTitleLink>
        </BoxContentTitle>

        <BoxContentListSection>
          <BoxContentList>
            {currentLectureList.map(
              ({ lecture, professer, date, grade }, index) => {
                return (
                  <li
                    key={lecture}
                    onClick={() => history.push("/lectures/" + index)}
                    style={{ width: "100%" }}
                  >
                    <ContentListTitle>{lecture}</ContentListTitle>{" "}
                    <sup
                      style={{
                        top: "38px",
                        right: "22px",
                        position: "absolute",
                        fontSize: "12px",
                      }}
                    >
                      {grade}학점
                    </sup>
                    <ProfessorGrey>
                      {professer === "" ? "미정" : professer + "교수님"}{" "}
                    </ProfessorGrey>
                    <ProfessorGrey></ProfessorGrey>
                    <EndDate>{date}</EndDate>
                  </li>
                );
              }
            )}
          </BoxContentList>
        </BoxContentListSection>
      </DashBoardContentBox>
    </motion.div>
  );
};

export default LecturesPage;
