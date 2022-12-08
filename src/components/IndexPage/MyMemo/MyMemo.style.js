import styled from "styled-components";

import {
  BorderColor,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";
import {
  DashboardRightContentBox,
  NoReourceSection,
  Rating,
} from "../../../pages/IndexPage/styles/IndexPage.style";

export const DashboardContentBox = styled(DashboardRightContentBox)`
  top: 152px;
  overflow: scroll;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: auto;
    min-height: 120px;
  }
`;

export const LectureRow = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  padding: 12px 20px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: 62px;

    padding: 12px 16px 11px 16px;
    border-bottom: 1px solid ${BorderColor};
  }
`;

export const LectureList = styled.ul`
  position: relative;
  padding: 12px 0;
  height: 276px;
  width: inherit;

  ${LectureRow}:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    height: auto;
    padding: 1px 0;
  }
`;

export const ViewdLectureRating = styled(Rating)`
  height: 27px;
  position: absolute;
  top: 12px;
  right: 20px;

  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  text-align: left;

  @media screen and (max-width: ${MobileViewWidth}) {
    top: 18px;
    right: 16px;
  }
`;

export const ViewedNoReourceSection = styled(NoReourceSection)`
  padding: 117px 0;

  @media screen and (max-width: ${MobileViewWidth}) {
    padding: 49px 0;
  }
  ​
`;
