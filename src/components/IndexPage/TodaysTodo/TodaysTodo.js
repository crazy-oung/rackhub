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
  BoxContentTitleIcon,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactComponent as LectureMemoSvg } from "../../../assets/svg/icon/clipboard-check.svg";

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
  const history = useHistory();

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
          <BoxContentTitleIcon>
            <LectureMemoSvg />
          </BoxContentTitleIcon>
          나의 할 일 목록
          <BoxContentTitleDescription>
            할일 개수: 6개
          </BoxContentTitleDescription>
        </BoxContentTitleLink>
      </BoxContentTitle>

      <BoxContentListSection>
        <TodosList>
          <li onClick={() => history.push("/todo/")}>
            <CheckBox style={checkboxStyle} />
            <ContentListTitle>학이해 기말고사</ContentListTitle>
            <ProfessorGrey>학습자이해와상담</ProfessorGrey>
            <EndDate>마강일: 2022.12.14</EndDate>
          </li>
          <li onClick={() => history.push("/todo/")}>
            <ContentListTitle>기말 텀프로젝트 과제</ContentListTitle>
            <ProfessorGrey>모바일프로그래밍(캡스톤디자인)</ProfessorGrey>
            <EndDate>마감일: 2022.12.11</EndDate>
            <CheckBox style={checkboxStyle} />
          </li>
          <li onClick={() => history.push("/todo/")}>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ProfessorGrey>객체지향개발론및실습</ProfessorGrey>
            <EndDate>마감일: 2022.12.7</EndDate>
            <CheckBox style={checkboxStyle} isChecked={true} />
          </li>
        </TodosList>

        <TodosListSecond style={{ left: "20px" }}>
          <li onClick={() => history.push("/todo/")}>
            <ContentListTitle>이산수학 기말과제</ContentListTitle>
            <ProfessorGrey>이산수학</ProfessorGrey>
            <EndDate>마감일: 2022.12.17</EndDate>
            <CheckBox style={checkboxStyle} isChecked={false} />
          </li>
          <li onClick={() => history.push("/todo/")}>
            <ContentListTitle>학이해 기말 보고서</ContentListTitle>
            <ProfessorGrey>학습자이해와상담</ProfessorGrey>
            <EndDate>마감일: 2022.12.04</EndDate>
            <CheckBox style={checkboxStyle} isChecked={true} />
          </li>
          <li onClick={() => history.push("/todo/")}>
            <ContentListTitle>증강현실 발표</ContentListTitle>
            <ProfessorGrey>증강현실및실습</ProfessorGrey>
            <EndDate>마감일: 2022.12.10</EndDate>
            <CheckBox style={checkboxStyle} isChecked={true} />
          </li>
        </TodosListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide100>
  );
};

export default TodaysTodo;
