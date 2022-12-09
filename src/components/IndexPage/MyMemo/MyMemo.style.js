import styled from "styled-components";

import {
  MenuColor,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

export const MemoDate = styled.time`
  display: inline;
  font-color: ${MenuColor};
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-right: 5px;

  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;

export const MemoCategory = styled.p`
  display: inline;
  font-size: 12px;
  color: #828282;

  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;
