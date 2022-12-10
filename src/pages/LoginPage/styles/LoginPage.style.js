import styled from "styled-components";

import {
  FontColor,
  MobileViewWidth,
  PrimaryColor,
  PlaceholderColor,
  DefaultFontSize,
  MenuColor,
  BorderColor,
} from "../../../static/Shared/commonStyles";

export const LoginSection = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-top: 60px;

  justify-content: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  padding: 40px;
  min-height: 400px;
  border-radius: 34px;
  background-color: #fff;

  inline-size: 640px;
  box-shadow: 0 11px 34px 0 rgb(0 0 0 / 20%);

  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  flex-direction: column;

  @media screen and (max-width: ${MobileViewWidth}) {
    inline-size: 100%;
    box-shadow: none;
    height: 100vh;
    top: -50px;
    position: relative;
  }
`;

export const LoginFormTitle = styled.h1`
  margin: 20px 0;
  font-weight: 800;
  font-size: 24px;
  color: ${FontColor};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
  }
`;

export const LoginInput = styled.input`
  display: block;
  height: 38px;
  padding: 2px 10px;
  margin: 6px 0;
  border: none;
  color: ${FontColor};
  background-color: #eee;
  font-size: ${DefaultFontSize};
  font-weight: 500;

  border-radius: 5px;
  inline-size: 220px;
  outline: none;

  :placeholder {
    color: ${PlaceholderColor};
  }
  :focus {
    outline: 2px solid ${PrimaryColor};
    transition: all 10ms;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
  }
`;
export const InputLabel = styled.label`
  position: relative;
  font-size: 11px;
  color: ${MenuColor};
`;

export const Separator = styled.hr`
  // margin-top: 50px;
  border: 1px solid #eee;
`;

export const LoginButton = styled(LoginInput)`
  font-weight: 600;
  background-color: ${PrimaryColor};
  color: #fff;
  cursor: pointer;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  background: ${(props) => (props.checked ? PrimaryColor : "#eee")};
  border: 1px solid ${BorderColor};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    border: 1px solid ${PrimaryColor};
    box-shadow: 0 0 0 3px rgba(131, 219, 76, 0.5);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
