import styled from "styled-components";

import { DashboardRightContentBox } from "../../../pages/IndexPage/styles/IndexPage.style";
import {
  BorderColor,
  PrimaryColor,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

export const DashboardContentBox = styled(DashboardRightContentBox)`
  height: 276px;
  overflow: scroll;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: auto;
  }
`;

export const TimeTableLectureRow = styled.li`
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

export const TimetableLectureList = styled.ul`
  padding: 12px 0;
  width: inherit;

  ${TimeTableLectureRow}:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    padding: 1px 0;
  }
`;

export const LectureReviewButton = styled.button`
  all: unset;
  position: absolute;
  width: 60px;
  height: 28px;
  right: 20px;

  background-color: ${({ isReviewed }) =>
    isReviewed ? "#eee" : `${PrimaryColor}`};

  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${({ isReviewed }) => (isReviewed ? "#999" : "#fff")};

  :before {
    content: "${({ isReviewed }) => (isReviewed ? "평가완료" : "평가하기")}";
  }
  @media screen and (max-width: ${MobileViewWidth}) {
    right: 16px;
  }
`;
