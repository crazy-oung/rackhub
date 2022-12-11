import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CheckBox from "../../components/Shared/Input/CheckBox";

import { PrimaryColor } from "../../static/Shared/commonStyles";
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

  cursor: pointer;
  :before {
    content: "이전 완료한 할 일 보기";
  }
`;

const TodosList = styled(BoxContentList)`
  li {
    padding-left: 50px;
  }
`;

const TodoInputSection = styled.section`
  display: flex;
  height: 38px;
  margin-bottom: 12px;
  top: 80px;
  position: relative;
`;

const TodoInput = styled.input`
  all: unset;
  height: auto;
  border-radius: 8px;
  width: 100%;
  min-height: 35px;
  font-size: 14px;
  padding: 0 10px;
  border: 1px solid #eee;

  :before {
    box-shadow: 0px 0px 0px 2px #eee;
  }

  :hover {
    background-color: #eee;
  }

  :focus {
    box-shadow: 0px 0px 0px 2px ${PrimaryColor};
  }
`;

const TodoPage = () => {
  const history = useHistory();
  const [loadedTodos, setLoadedTodos] = useState(todoList);
  const [renderList, setRenderList] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
    if (e.key === "Enter") {
      let rows = loadedTodos;

      rows.unshift({
        todo: e.target.value,
        lecture: "오늘 할일",
        due: new Date().toLocaleDateString("ko-kr"),
        done: false,
      });

      setLoadedTodos(rows);

      setRenderList(
        loadedTodos.map(({ todo, lecture, due, done }, index) => {
          return (
            <li onClick={() => history.push("/todo/" + index)}>
              <ContentListTitle>{trimLetters(todo)}</ContentListTitle>
              <ProfessorGrey>{lecture}</ProfessorGrey>
              <EndDate>마감일: {due}</EndDate>
              <CheckBox style={checkboxStyle} isChecked={done} />
            </li>
          );
        })
      );
    }
  };

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

  const loadPrevTodo = () => {
    let rows = loadedTodos;
    console.log(rows);

    for (let i = 0; i < 2; i++) {
      rows.push({
        todo: "완료한 할 일" + (rows.length - 5),
        lecture: "이전 과목",
        due: "2022.12.14",
        done: true,
      });
    }
    console.log(rows);
    setLoadedTodos(rows);

    setRenderList(
      loadedTodos.map(({ todo, lecture, due, done }, index) => {
        return (
          <li onClick={() => history.push("/todo/" + index)}>
            <ContentListTitle>{trimLetters(todo)}</ContentListTitle>
            <ProfessorGrey>{lecture}</ProfessorGrey>
            <EndDate>마감일: {due}</EndDate>
            <CheckBox style={checkboxStyle} isChecked={done} />
          </li>
        );
      })
    );
  };

  useEffect(() => {
    setRenderList(
      loadedTodos.map(({ todo, lecture, due, done }, index) => {
        return (
          <li
            onClick={() => history.push("/todo/" + index)}
            style={{ width: "100%" }}
          >
            <ContentListTitle>{trimLetters(todo)}</ContentListTitle>
            <ProfessorGrey>{lecture}</ProfessorGrey>
            <EndDate>마감일: {due}</EndDate>
            <CheckBox style={checkboxStyle} isChecked={done} />
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
          <MoreSemesterButton />
          <BoxContentTitleLink to="/todo">
            <BoxContentTitleIcon>
              <TodoIconSvg />
            </BoxContentTitleIcon>
            나의 할 일
            <BoxContentTitleDescription>
              등록된 할 일: 6개
            </BoxContentTitleDescription>
          </BoxContentTitleLink>
        </BoxContentTitle>

        <TodoInputSection>
          <TodoInput
            type="text"
            placeholder="오늘 내가 해야 할 일?"
            value={newTodo}
            onChange={handleNewTodo}
            onKeyPress={handleNewTodo}
          />
        </TodoInputSection>

        <BoxContentListSection>
          <TodosList>{renderList}</TodosList>
        </BoxContentListSection>

        <MoreButtonContainor>
          <MoreButton onClick={loadPrevTodo} />
        </MoreButtonContainor>
      </DashBoardContentBox>
    </motion.div>
  );
};

export default TodoPage;
