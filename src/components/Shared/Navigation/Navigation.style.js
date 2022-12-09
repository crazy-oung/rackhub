import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import {
  BorderColor,
  PrimaryColor,
  PlaceholderColor,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

export const StyledNavigation = styled.nav`
  display: flex;
  width: 100%;

  z-index: 3;

  @media screen and (max-width: ${MobileViewWidth}) {
    position: fixed;
    border-bottom: none;

    bottom: 0;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 40px;
  border-radius: 0 0 20px 20px;

  background-color: rgba(208, 208, 208, 0.13);
  background-image: radial-gradient(
    circle at 25%,
    hsla(0, 0%, 90%, 0.2),
    rgba(150, 150, 150, 0.04) 100%
  );
  backdrop-filter: blur(10px);

  position: sticky;
  justify-content: space-between;
  align-items: center;
  top: 0;

  z-index: 3;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: 60px;
    padding: 0 20px;
    border-radius: 0;
  }
`;

export const NavigationSectionMobile = styled.div`
  display: none;
  position: fixed;
  width: auto;
  height: 72px;
  bottom: 0;
  border-top: 1.5px solid ${BorderColor};
  background: #fff;

  align-items: center;
  border-radius: 34px 34px 0 0;
  @media screen and (max-width: ${MobileViewWidth}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Logo = styled.figure`
  cursor: pointer;
  display: inline;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: 28px;
    left: -8px;
  }
`;

export const LogoText = styled.span`
  display: inline-block;
  margin-right: 40px;

  font-weight: 500;
  font-size: 18px;
  color: ${PrimaryColor};

  position: relative;
  bottom: 5px;
  left: 5px;

  :after {
    content: "RackHub";
    font-weight: 700;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;

export const LinkSection = styled.div`
  display: flex;
`;

export const ShortcutSection = styled.div`
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  display: flex;
  width: 80px;
  color: ${PrimaryColor};

  justify-content: center;
  font-size: 16px;
  cursor: pointer;

  svg {
    stroke: ${PlaceholderColor};
  }

  &.selected {
    color: ${PrimaryColor};
    transition: transform 0.4s ease;

    svg {
      stroke: ${PrimaryColor};
    }
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    display: flex;
    width: calc(100% / 5);
    padding: 16px 0;
    color: ${PlaceholderColor};
    font-size: 11px;

    justify-content: center;
    align-items: center;

    svg {
      left: 50%;
    }
  }
`;
export const MobileMenuContext = styled.div`
  display: flex;
  width: min-content;
  flex-wrap: wrap;
  justify-content: center;
`;
export const MobileIconFigure = styled.figure`
  width: 24px;
  height: 24px;
`;
export const MobileNavText = styled.span`
  text-align: center;
  line-height: normal;
  letter-spacing: normal;
  width: max-content;
`;

export const AuthSection = styled.div`
  display: flex;
  height: 20px;
  top: calc(50% - 10px);
  right: 20px;
  justify-content: space-around;
  align-items: center;
`;

export const AuthSectionLink = styled(Link)`
  all: unset;
  position: relative;
  top: -1px;

  color: #6e736b;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;

export const CenterLine = styled.div`
  width: 1px;
  height: 13px;
  margin: 0px 10px;
  background-color: #6e736b;

  position: relative;
  top: -2px;
  @media screen and (max-width: ${MobileViewWidth}) {
    width: 1px;
    margin: 0px 10px;
  }
`;
