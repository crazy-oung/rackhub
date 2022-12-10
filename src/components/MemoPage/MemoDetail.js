import React, { useState } from "react";
import styled from "styled-components";

import {
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentTitleIcon,
} from "../../pages/IndexPage/styles/IndexPage.style";

import { MemoContentBoxWide, MemoContentListSection } from "./MemoList.style";

import { MemoDetailDate, MemoDetailCategory } from "./MemoDetail.style";

import { PrimaryColor } from "../../static/Shared/commonStyles";
import { ReactComponent as LectureMemoSvg } from "../../assets/svg/logo/rackhub.svg";
import EditorInput from "../Shared/Input/EditorInput";

const TittleInput = styled.input`
  all: unset;
  font-size: 18px;
  font-weight: 600;
  height: 20px;
  width: 95%;
  padding: 5px 8px;
  border-radius: 8px;

  position: relative;
  top: -4px;

  :focus {
    outline: 1px solid ${PrimaryColor};
    box-shadow: 9px 1px 19px -5px ${PrimaryColor};
  }
`;

const MemoList = () => {
  const [title, setTitle] = useState("기능구상");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <MemoContentBoxWide>
        <BoxContentTitle>
          <BoxContentTitleLink to="/memo">
            <BoxContentTitleIcon>
              <LectureMemoSvg />
            </BoxContentTitleIcon>
            <TittleInput value={title} onChange={handleTitleChange} />
            <MemoDetailDate>22.07.06</MemoDetailDate>
            <MemoDetailCategory>모프</MemoDetailCategory>
          </BoxContentTitleLink>
        </BoxContentTitle>

        <MemoContentListSection>
          <EditorInput />
        </MemoContentListSection>
      </MemoContentBoxWide>
    </>
  );
};

export default MemoList;
