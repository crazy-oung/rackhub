import React from "react";
import { useHistory } from "react-router-dom";

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
import { ReactComponent as LectureMemoSvg } from "../../../assets/svg/icon/clipboard-check.svg";

import { todoList } from "../../../static/IndexPage/sampleData";

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

  const trimLetters = (name) => {
    return name.length > 15 ? name.substr(0, 6) + " ..." : name;
  };

  const getThreeLectureFrom = (index) => {
    const rows = [];
    for (let i = index; i < index + 3; i++) {
      rows.push(
        <li onClick={() => history.push("/todo/" + index)}>
          <ContentListTitle>{trimLetters(todoList[i].todo)}</ContentListTitle>
          <ProfessorGrey>{todoList[i].lecture}</ProfessorGrey>
          <EndDate>마감일: {todoList[i].due}</EndDate>
          <CheckBox style={checkboxStyle} isChecked={todoList[i].done} />
        </li>
      );
    }

    return rows;
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
        <TodosList>{getThreeLectureFrom(0)}</TodosList>

        <TodosListSecond style={{ left: "20px" }}>
          {getThreeLectureFrom(3)}
        </TodosListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide100>
  );
};

export default TodaysTodo;
