import React from "react";

import {
  DashBoardContentBox,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  BoxContentListSection,
  BoxContentTitleDescription,
  NoResource,
  TitleProfessor,
  ProfessorGrey,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import { ViewedNoReourceSection } from "./MyMemo.style";

import { timetableLectureList } from "../../../static/IndexPage/sampleData";

const getCachedLecture = JSON.parse(localStorage.getItem("Hangang.MyMemo"));

const MyMemo = () => {
  try {
    if (!getCachedLecture) {
      const cachedLecture = JSON.stringify(timetableLectureList);
      localStorage.setItem("Hangang.MyMemo", cachedLecture);
    }
  } catch (error) {
    localStorage.removeItem("Hangang.MyMemo");
    const cachedLecture = JSON.stringify(timetableLectureList);
    localStorage.setItem("Hangang.MyMemo", cachedLecture);

    throw new Error(error);
  }

  return (
    <>
      <DashBoardContentBox isEmpty={getCachedLecture ? true : false}>
        <BoxContentTitle>
          <BoxContentTitleLink to="/memo">
            강의 메모
            <BoxContentTitleDescription>나의 메모</BoxContentTitleDescription>
          </BoxContentTitleLink>
        </BoxContentTitle>

        {getCachedLecture != null && getCachedLecture.length !== 0 ? (
          <BoxContentListSection>
            <BoxContentList>
              {getCachedLecture.map(
                ({ id, name, professor, rating }, index) => (
                  <li key={index} style={{ width: "100%" }}>
                    <ContentListTitle>{name}</ContentListTitle>
                    <ProfessorGrey>{professor} 교수님 </ProfessorGrey>
                    <TitleProfessor
                      style={{
                        top: "20px",
                        right: "20px",
                        position: "absolute",
                      }}
                    >
                      {rating.toFixed(1)}
                    </TitleProfessor>
                  </li>
                )
              )}
            </BoxContentList>
          </BoxContentListSection>
        ) : (
          <ViewedNoReourceSection>
            <NoResource>강의가 없습니다.</NoResource>
          </ViewedNoReourceSection>
        )}
      </DashBoardContentBox>
    </>
  );
};

export default MyMemo;
