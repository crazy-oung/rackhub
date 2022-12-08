import styled from "styled-components";

import {
  FontColor,
  DefaultContentWidth,
  MobileViewWidth,
  BorderColor,
  PlaceholderColor,
} from "../../../static/Shared/commonStyles";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  inline-size: 640px;

  border-radius: 34px;
  background-color: #fff;

  box-shadow: 0 11px 34px 0 rgb(0 0 0 / 20%);

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
  }
`;
