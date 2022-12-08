import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  DefaultContentWidth,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

export const StyledFooter = styled.footer`
  width: 100%;

  @media screen and (max-width: ${MobileViewWidth}) {
    display: none;
  }
`;

export const FooterContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Shortcut = styled.div`
  display: flex;
  justify-content: space-between;
  width: 291px;
  margin-bottom: 42.5px;
`;

export const ShortcutLink = styled(Link)`
  all: unset;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const ExternalSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ExternalLink = styled(Link)`
  text-decoration: none;
  color: #424245;

  font-size: 11px;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;

  align-self: center;
`;

export const ExternalLinkSepertor = styled.div`
  block-size: 15px;
  inline-size: 1px;
  margin: 0 10px;

  background-color: #d2d2d7;
`;

export const ApplicationInfoSection = styled.section`
  display: flex;
  width: 100%;
  background-color: #f5f5f7;
  padding: 20px 0;

  align-items: center;
  align-content: center;
  justify-content: space-around;
`;

export const ApplicationInfoContent = styled.div`
  max-width: 690px;
`;

export const CopyRightSection = styled.div``;

export const CopyRight = styled.span`
  color: #6e6e73;

  font-size: 11px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
`;
