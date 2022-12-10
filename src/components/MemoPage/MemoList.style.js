import styled from "styled-components";

import {
  DashBoardContentBoxWide,
  BoxContentListSection,
} from "../../pages/IndexPage/styles/IndexPage.style";
import { MenuColor, MobileViewWidth } from "../../static/Shared/commonStyles";

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
`;

export const MemoContentBoxWide = styled(DashBoardContentBoxWide)`
  min-height: 330px;
  height: calc(100% + 40px);

  @media screen and (max-width: ${MobileViewWidth}) {
    height: 54%;
    margin-bottom: 80px;
  }
`;

export const MemoContentListSection = styled(BoxContentListSection)`
  @media screen and (max-width: ${MobileViewWidth}) {
    height: auto;
  }
`;
