import React from "react";
import { useHistory } from "react-router-dom";
import {
  DashBoardContentBox,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  BoxContentListSection,
  BoxContentTitleDescription,
  BoxContentTitleIcon,
} from "../../pages/IndexPage/styles/IndexPage.style";

import { ReactComponent as LectureMemoSvg } from "../../assets/svg/logo/rackhub.svg";
import { MemoDate, MemoCategory } from "./MemoList.style";
import styled from "styled-components";

const MemoContentList = styled(BoxContentList)`
  li {
    padding-left: 40px;
    width: 100%;
  }
`;

const MemoList = () => {
  const history = useHistory();
  return (
    <>
      <DashBoardContentBox>
        <BoxContentTitle>
          <BoxContentTitleLink to="/memo">
            <BoxContentTitleIcon>
              <LectureMemoSvg />
            </BoxContentTitleIcon>
            메모
            <BoxContentTitleDescription>나의 메모</BoxContentTitleDescription>
          </BoxContentTitleLink>
        </BoxContentTitle>

        <BoxContentListSection>
          <MemoContentList>
            <li onClick={() => history.push("/memo/")}>
              <ContentListTitle>발표 준비 대본 작성중</ContentListTitle>
              <MemoDate>22.09.08</MemoDate>
              <MemoCategory>마프</MemoCategory>
            </li>
            <li onClick={() => history.push("/memo/")}>
              <ContentListTitle>기말정리</ContentListTitle>
              <MemoDate>22.09.07</MemoDate>
              <MemoCategory>객체지향ㅇㅇ</MemoCategory>
            </li>
            <li onClick={() => history.push("/memo/")}>
              <ContentListTitle>기능구상</ContentListTitle>
              <MemoDate>22.07.06</MemoDate>
              <MemoCategory>모프</MemoCategory>
            </li>
          </MemoContentList>
        </BoxContentListSection>
      </DashBoardContentBox>
    </>
  );
};

export default MemoList;
