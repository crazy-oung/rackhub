import styled from "styled-components";

import { MobileViewWidth } from "../../../static/Shared/commonStyles";

import {
  DashBoard,
  DashboardSection,
} from "../../IndexPage/styles/IndexPage.style";

export const MemoBoard = styled(DashBoard)`
  width: 100%;
  @media screen and (max-width: ${MobileViewWidth}) {
    padding-bottom: 100px;
    display: flex;
  }
`;
export const MemoSection = styled(DashboardSection)`
  width: 100%;
`;
