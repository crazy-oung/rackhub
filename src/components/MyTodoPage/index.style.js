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

export const tile = styled.div`
  inline-size: 100%;
  block-size: 315px;
  border-radius: 16px;
  box-shadow: 17px 20px 40px rgb(0 0 0 / 21%);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  flex-direction: column;
  position: relative;

  transition: box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1),
    transform 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);
  overflow: hidden;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: auto;
    min-height: 120px;
  }
`;
