import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MobileViewWidth,
  BorderColor,
  FontColor,
  MINIMUM_PC_WEBVIEW_WIDTH,
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

export const ResoruceContent = styled.div`
  width: 100%;

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
    height: 122px;
    margin-top: 0;

    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export const ResourceShortcut = styled.li`
  all: unset;
  position: relative;

  width: 100px;
  height: 87px;
  margin-right: 15px;

  @media screen and (max-width: ${MobileViewWidth}) {
    background-size: 33px 33px;
    backgroud-color: #fcfcfc;
  }
`;

export const ResourceContentList = styled.ul`
  display: flex;
  width: 100%;
  height: 183px;

  flex-wrap: wrap;

  ${ResourceShortcut}:nth-child(1) {
    width: 271px;
    height: 78px;

    margin: 0 14px 16px 0;

    border-radius: 8px;
    border: solid 1px #eee;
  }

  ${ResourceShortcut}:nth-child(2) {
    width: 174px;
    height: 78px;
    margin-right: 0;

    border: solid 1px #eee;
    border-radius: 8px;
  }

  ${ResourceShortcut}:nth-child(3) {
    width: 175px;
    height: 85px;
    margin-right: 14px;

    border: solid 1px #eee;
    border-radius: 8px;
  }

  ${ResourceShortcut}:nth-child(4) {
    width: 270px;
    height: 85px;

    margin-right: 0;

    border: solid 1px #eee;
    border-radius: 8px;
  }

  ${ResourceShortcut}:nth-child(5) {
    width: 174px;
    height: 181px;
    margin-left: 14px;
    margin-right: 0;
    border: solid 1px #eee;
    top: -96px;
    border-radius: 8px;
  }

  ${ResourceShortcut}:nth-child(n + 6):nth-child(-n + 10) {
    display: none;
  }

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    ${ResourceShortcut}:nth-child(1) {
      width: 40%;
      margin: 0 1rem 1rem 0;
    }

    ${ResourceShortcut}:nth-child(2) {
      width: 29%;
    }

    ${ResourceShortcut}:nth-child(3) {
      width: 29%;
      margin-right: 1rem;
    }

    ${ResourceShortcut}:nth-child(4) {
      width: 40%;
    }

    ${ResourceShortcut}:nth-child(5) {
      width: calc((100% - 69%) - 2rem - 6px);
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 991px) {
    ${ResourceShortcut}:nth-child(1) {
      width: 40%;
    }

    ${ResourceShortcut}:nth-child(2) {
      width: 28%;
    }

    ${ResourceShortcut}:nth-child(3) {
      width: 28%;
    }

    ${ResourceShortcut}:nth-child(4) {
      width: 40%;
    }

    ${ResourceShortcut}:nth-child(5) {
      width: calc((100% - 68%) - 2rem - 6px);
    }
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: fit-content;
    height: auto;

    flex-wrap: nowrap;

    ${ResourceShortcut}:nth-child(n) {
      width: 90px;
      height: 90px;
      margin: 0 8px 0 0;
      padding: 0;
      border: none;
    }

    ${ResourceShortcut}:nth-child(5) {
      width: 90px;
      height: 90px;
      margin: 0 8px 0 0;
      padding: 0;
      border: none;

      margin-left: auto;
      margin-right: 0;
      border: none;
      top: auto;
    }

    ${ResourceShortcut}:nth-child(n + 5):nth-child(-n + 10) {
      display: block;
    }

    ${ResourceShortcut}: first-child {
      margin: 0 8px 0 16px;
    }
    ${ResourceShortcut}: last-child {
      margin: 0 16px 0 8px;
    }
  }
`;

export const ResourceCard = styled(Link)`
  display: block;

  width: auto;
  height: 100%;

  border-radius: 8px;
  background-image: url(${({ img }) => img});
  background-size: 32px;
  background-repeat: no-repeat;
  background-position-y: 8px;
  background-position-x: 8px;

  cursor: pointer;

  :before {
    all: unset;

    position: absolute;

    left: 12px;
    bottom: 12px;
    color: ${FontColor};

    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;

    text-align: left;

    cursor: pointer;
    content: "${({ title }) => sliceTitle4PC(title)}";
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 90px;
    margin-right: 8px;

    background-size: 33px 33px;
    background-position: 28.5px;
    background-color: #fcfcfc;

    :before {
      left: 0;
      bottom: -20px;

      font-size: 12px;
      fonst-weight: normal;
      line-height: normal;
      letter-spacing: normal;

      content: "${({ title }) => sliceTitle4Mobile(title)}";
    }
  }
`;

export const LectureAndProfessor = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;

  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: ${MobileViewWidth}) {
    display: none;
  }
`;

const sliceTitle4PC = (title) => {
  if (title.length > 12) {
    title = title.slice(0, 12) + " ...";
  }
  return title;
};

const sliceTitle4Mobile = (title) => {
  if (title.length > 8) {
    title = title.slice(0, 8) + " ...";
  }
  return title;
};
