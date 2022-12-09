import styled from "styled-components";

import {
  MobileViewWidth,
  FontColor,
  PrimaryColor,
} from "../../../static/Shared/commonStyles";

export const MyProfileIcon = styled.p`
  margin: 0px 10px 20px 0;
  color: ${PrimaryColor};
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;

  :after {
    content: "😎";
    font-size: 120px;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;

export const MyName = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: normal;
  margin-bottom: 10px;
  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;

export const MyMainFocus = styled.h4`
  font-size: 15px;
  font-weight: 400;

  line-height: normal;
  letter-spacing: normal;
  color: #999;

  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;

export const MyTodoResult = styled.h3`
  font-size: 17px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: normal;
  color: ${FontColor};
  position: absolute;
  bottom: 20px;
  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;
