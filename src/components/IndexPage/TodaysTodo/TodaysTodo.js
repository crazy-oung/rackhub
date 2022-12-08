import React, { useState, useEffect } from "react";

import {
  DashBoardContentBoxWide,
  BoxContentTitle,
  BoxContentTitleLink,
  BoxContentList,
  ContentListTitle,
  ContentListContent,
  BoxContentListSeparator,
  BoxContentListSection,
  EndDate,
  BoxContentTitleDescription,
  BoxContentListSecond,
} from "../../../pages/IndexPage/styles/IndexPage.style";

import {
  CheckBoxLabel,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "../../../pages/LoginPage/styles/LoginPage.style";

const TodaysTodo = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <DashBoardContentBoxWide style={{}}>
      <BoxContentTitle>
        <BoxContentTitleLink to="/todo">
          나의 할 일 목록
          <BoxContentTitleDescription>
            할일 개수: 6개
          </BoxContentTitleDescription>
        </BoxContentTitleLink>
      </BoxContentTitle>

      <BoxContentListSection>
        <BoxContentList>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ContentListContent>객체지향</ContentListContent>
            <EndDate>마강일: 2021.12.10</EndDate>
            <CheckBoxLabel
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <label
                style={{
                  color: "#999",
                  fontSize: "12px",
                  marginRight: "5px",
                  lineHeight: "1.5",
                }}
              >
                전체 완료
              </label>
              <CheckboxContainer onChange={handleCheckboxChange}>
                <HiddenCheckbox
                  id="autoLogin"
                  name="autoLogin"
                  type="checkbox"
                  checked={checked}
                />
                <StyledCheckbox checked={checked}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
            </CheckBoxLabel>
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ContentListContent>객체지향</ContentListContent>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBoxLabel
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <label
                style={{
                  color: "#999",
                  fontSize: "12px",
                  marginRight: "5px",
                  lineHeight: "1.5",
                }}
              >
                전체 완료
              </label>
              <CheckboxContainer onChange={handleCheckboxChange}>
                <HiddenCheckbox
                  id="autoLogin"
                  name="autoLogin"
                  type="checkbox"
                  checked={checked}
                />
                <StyledCheckbox checked={checked}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
            </CheckBoxLabel>
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ContentListContent>객체지향</ContentListContent>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBoxLabel
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <label
                style={{
                  color: "#999",
                  fontSize: "12px",
                  marginRight: "5px",
                  lineHeight: "1.5",
                }}
              >
                전체 완료
              </label>
              <CheckboxContainer onChange={handleCheckboxChange}>
                <HiddenCheckbox
                  id="autoLogin"
                  name="autoLogin"
                  type="checkbox"
                  checked={checked}
                />
                <StyledCheckbox checked={checked}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
            </CheckBoxLabel>
          </li>
        </BoxContentList>
        <BoxContentListSeparator />
        <BoxContentListSecond style={{ left: "20px" }}>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ContentListContent>객체지향</ContentListContent>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBoxLabel
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <label
                style={{
                  color: "#999",
                  fontSize: "12px",
                  marginRight: "5px",
                  lineHeight: "1.5",
                }}
              >
                전체 완료
              </label>
              <CheckboxContainer onChange={handleCheckboxChange}>
                <HiddenCheckbox
                  id="autoLogin"
                  name="autoLogin"
                  type="checkbox"
                  checked={checked}
                />
                <StyledCheckbox checked={checked}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
            </CheckBoxLabel>
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ContentListContent>객체지향</ContentListContent>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBoxLabel
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <label
                style={{
                  color: "#999",
                  fontSize: "12px",
                  marginRight: "5px",
                  lineHeight: "1.5",
                }}
              >
                전체 완료
              </label>
              <CheckboxContainer onChange={handleCheckboxChange}>
                <HiddenCheckbox
                  id="autoLogin"
                  name="autoLogin"
                  type="checkbox"
                  checked={checked}
                />
                <StyledCheckbox checked={checked}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
            </CheckBoxLabel>
          </li>
          <li>
            <ContentListTitle>객체지향 과제</ContentListTitle>
            <ContentListContent>객체지향</ContentListContent>
            <EndDate>마감일: 2021.12.10</EndDate>
            <CheckBoxLabel
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <label
                style={{
                  color: "#999",
                  fontSize: "12px",
                  marginRight: "5px",
                  lineHeight: "1.5",
                }}
              >
                전체 완료
              </label>
              <CheckboxContainer onChange={handleCheckboxChange}>
                <HiddenCheckbox
                  id="autoLogin"
                  name="autoLogin"
                  type="checkbox"
                  checked={checked}
                />
                <StyledCheckbox checked={checked}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
            </CheckBoxLabel>
          </li>
        </BoxContentListSecond>
      </BoxContentListSection>
    </DashBoardContentBoxWide>
  );
};

export default TodaysTodo;
