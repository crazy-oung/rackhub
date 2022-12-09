import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MobileViewWidth,
  BorderColor,
} from "../../../static/Shared/commonStyles";
import { DashboardRightContentBox } from "../../../pages/IndexPage/styles/IndexPage.style";

export const TodaysTodoBox = styled(DashboardRightContentBox)`
  border: 1px solid ${({ isEmpty }) => (isEmpty ? BorderColor : "transparent")};
  min-height: 183px;

  @media screen and (max-width: ${MobileViewWidth}) {
    width: ${({ isEmpty }) => (isEmpty ? "100%" : "calc(100% + 32px)")};
    margin-left: ${({ isEmpty }) => (isEmpty ? "0" : "-16px")};

    min-height: auto;
    height: auto;
  }
`;
