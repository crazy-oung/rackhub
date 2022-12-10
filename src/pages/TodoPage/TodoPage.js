import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import CheckBox from "../../components/Shared/Input/CheckBox";

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
  EndDate,
} from "../IndexPage/styles/IndexPage.style";

import { LectureReviewButton } from "../../components/IndexPage/MyTimetable/MyTimetable.style";

import { ReactComponent as TodoIconSvg } from "../../assets/svg/icon/clipboard-check.svg";
import { todoList } from "../../static/IndexPage/sampleData";

const MoreSemesterButton = styled(LectureReviewButton)`
  margin-right: 12px;
  padding: 2px 12px;
  width: auto;
  :before {
    content: "할 일 추가하기";
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
  width: auto;
  padding: 2px 12px;
  position: relative;

  :before {
    content: "이전 완료한 할 일 보기";
  }
`;

const TodosList = styled(BoxContentList)`
  li {
    padding-left: 50px;
  }
`;

const TodoPage = () => {
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

  return (
    <DashBoardContentBox style={{ height: "100%", width: "auto" }}>
      <BoxContentTitle>
        <MoreSemesterButton />
        <BoxContentTitleLink to="/timetable">
          <BoxContentTitleIcon>
            <TodoIconSvg />
          </BoxContentTitleIcon>
          나의 할 일
          <BoxContentTitleDescription>
            등록된 할 일: 6개
          </BoxContentTitleDescription>
        </BoxContentTitleLink>
      </BoxContentTitle>

      <BoxContentListSection>
        <TodosList>
          {todoList.map(({ todo, lecture, due, done }, index) => {
            return (
              <li onClick={() => history.push("/todo/" + index)}>
                <ContentListTitle>{trimLetters(todo)}</ContentListTitle>
                <ProfessorGrey>{lecture}</ProfessorGrey>
                <EndDate>마감일: {due}</EndDate>
                <CheckBox style={checkboxStyle} isChecked={done} />
              </li>
            );
          })}
        </TodosList>
      </BoxContentListSection>

      <MoreButtonContainor>
        <MoreButton />
      </MoreButtonContainor>
    </DashBoardContentBox>
  );
};

export default TodoPage;
