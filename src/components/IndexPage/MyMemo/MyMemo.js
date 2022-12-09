import React from "react";

import {
  DashBoardContentBox,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  BoxContentListSection,
  BoxContentTitleDescription,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import { MemoDate, MemoCategory } from "./MyMemo.style";

const MyMemo = () => {
  return (
    <>
      <DashBoardContentBox>
        <BoxContentTitle>
          <BoxContentTitleLink to="/memo">
            강의 메모
            <BoxContentTitleDescription>나의 메모</BoxContentTitleDescription>
          </BoxContentTitleLink>
        </BoxContentTitle>

        <BoxContentListSection>
          <BoxContentList>
            <li>
              <ContentListTitle>발표 준비 대본 작성중</ContentListTitle>
              <MemoDate>22.09.08</MemoDate>
              <MemoCategory>마프</MemoCategory>
            </li>
            <li>
              <ContentListTitle>기말정리</ContentListTitle>
              <MemoDate>22.09.07</MemoDate>
              <MemoCategory>객체지향ㅇㅇ</MemoCategory>
            </li>
            <li>
              <ContentListTitle>기능구상</ContentListTitle>
              <MemoDate>22.07.06</MemoDate>
              <MemoCategory>모프</MemoCategory>
            </li>
          </BoxContentList>
        </BoxContentListSection>
      </DashBoardContentBox>
    </>
  );
};

export default MyMemo;
