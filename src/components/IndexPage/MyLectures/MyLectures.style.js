import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MobileViewWidth,
  MINIMUM_PC_WEBVIEW_WIDTH,
  FontColor,
  MenuColor,
} from "../../../static/Shared/commonStyles";

export const LeftLectures = styled.h3`
  font-size: 13px;
  font-weight: 200;
  color: ${MenuColor};
  margin-top: 5px;

  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: ${MobileViewWidth}) {
  }
`;

export const MyProfileSection = styled.section`
  width: 100%;
  margin-bottom: 32px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    position: relative;
    margin-bottom: 24px;
  }
`;

export const MyProfileContent = styled.div`
  width: 100%;
  margin-top: 16px;

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 32px;

    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export const MajorShortcut = styled.li`
  all: unset;
  position: relative;

  width: 100px;
  height: 87px;
  margin-right: 15px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    min-width: 87px;

    margin-right: 7.5px;
    margin-left: 7.5px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 87px;
    height: 87px;

    margin-left: 0;
    margin-right: 8px;
    margin-bottom: 0;

    background-size: 87px 87px;
  }
`;

export const MyProfileContentList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: fit-content;
    margin-top: 8px;

    flex-wrap: nowrap;

    ${MajorShortcut}:first-child {
      margin-left: 16px;
    }

    ${MajorShortcut}:last-child {
      margin-right: 16px;
    }
  }
`;

export const MajorCard = styled(Link)`
  display: block;

  width: 100px;
  height: 100%;

  background-image: url(${({ img }) => img});
  background-position-y: -7px;
  background-size: 100px 101px;
  background-repeat: no-repeat;
  border-radius: 8px;

  cursor: pointer;

  :before {
    all: unset;

    position: absolute;
    width: 68px;
    left: calc(50% - 34px);
    bottom: 9px;
    color: #fff;

    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;

    text-align: center;
    word-break: break-all;
    white-space: initial;

    cursor: pointer;
    content: "${({ name }) => name}";
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 87px;

    background-size: 87px 87px;
    background-position-y: 0;
  }
`;
