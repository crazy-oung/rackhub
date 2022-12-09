import React from "react";
import CheckBox from "../../Shared/Input/CheckBox";

import {
  DashBoardContentBoxWide100,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  ProfessorGrey,
  BoxContentListSection,
  EndDate,
  BoxContentTitleDescription,
  BoxContentListSecond,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import styled from "styled-components";

const TodosList = styled(BoxContentList)`
  li {
    padding-left: 50px;
  }
`;

const TodosListSecond = styled(BoxContentListSecond)`
  li {
    padding-left: 50px;
  }
`;

const TodaysTodo = () => {
  // const checkboxStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   top: "-15px",
  //   position: "relative",
  // };

  const checkboxStyle = {
    left: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    top: "30px",
    position: "absolute",
    alignContent: "center",
    flexDirection: "column",
  };

  return (
    <DashBoardContentBoxWide100 style={{}}>
      <BoxContentTitle>
        <BoxContentTitleLink to="/todo">
          나의 할 일 목록
          <BoxContentTitleDescription>
            할일 개수: 6개
          </BoxContentTitleDescription>
        </BoxContentTitleLink>
      </BoxContentTitle>

      <BoxContentListSection>
        <TodosList>
          <li>
            <CheckBox style={checkboxStyle} />
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ProfessorGrey>객체지향</ProfessorGrey>
            <EndDate>마강일: 2021.12.10</EndDate>
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ProfessorGrey>객체지향</ProfessorGrey>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBox style={checkboxStyle} />
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ProfessorGrey>객체지향</ProfessorGrey>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBox style={checkboxStyle} />
          </li>
        </TodosList>

        <TodosListSecond style={{ left: "20px" }}>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ProfessorGrey>객체지향</ProfessorGrey>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBox style={checkboxStyle} />
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ProfessorGrey>객체지향</ProfessorGrey>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBox style={checkboxStyle} />
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ProfessorGrey>객체지향</ProfessorGrey>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBox style={checkboxStyle} />
          </li>
        </TodosListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide100>
  );
};

export default TodaysTodo;
