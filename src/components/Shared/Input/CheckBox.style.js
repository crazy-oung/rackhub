import styled from "styled-components";
import {
  BorderColor,
  PrimaryColor,
  MenuColor,
} from "../../../static/Shared/commonStyles";

export const InputLabel = styled.span`
  margin-left: 5px;
  color: ${MenuColor};
  font-size: 12px;

  letter-spacing: 0.5px;
`;

export const CheckBoxLabel = styled.label`
  display: inline;
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
