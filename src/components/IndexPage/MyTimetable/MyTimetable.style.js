import styled from "styled-components";

import { PrimaryColor } from "../../../static/Shared/commonStyles";

export const LectureScore = styled.span`
  display: flex;
  width: 20px;
  color: ${PrimaryColor};
  font-size: 20px;
  font-weight: 400;

  justify-content: center;
  position: absolute;
  top: 24px;
  right: 20px;
`;

export const LectureReviewButton = styled.button`
  all: unset;
  width: 65px;
  height: 28px;
  background-color: ${PrimaryColor};
  border-radius: 20px;
  color: #fff;

  font-size: 12px;
  font-weight: 500;

  top: 22px;
  right: 20px;
  position: absolute;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;

  :before {
    content: "점수입력";
  }
`;
