import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FontColor,
  DefaultContentWidth,
  MobileViewWidth,
  BorderColor,
  PlaceholderColor,
  MenuColor,
} from "../../../static/Shared/commonStyles";

const MINIMUM_PC_WEBVIEW_WIDTH = `calc(${DefaultContentWidth} + 20px)`;

export const DashBoard = styled.div`
  display: flex;
  padding: 20px 0;
  margin: 0 0 100px 0;
  width: ${DefaultContentWidth};

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    width: auto;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: auto;
    margin: auto;
    min-height: calc(100% + 252px + 32px);
  }
`;

export const DashBoardContentBox = styled.article`
  display: flex;
  padding: 10px 15px;
  margin: 15px;
  width: 315px;
  height: 315px;
  min-width: 315px;
  background: #fff;

  block-size: 315px;
  border-radius: 16px;
  box-shadow: 0 10px 30px 0 rgba(65, 65, 65, 0.1);

  flex-direction: column;
  position: relative;

  transition: box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1),
    transform 0.2s cubic-bezier(0.32, 0.08, 0.24, 1),
    -webkit-box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1),
    -webkit-transform 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);

  overflow: hidden;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    box-shadow: 27px 25px 45px rgb(0 0 0 / 11%);
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
    box-shadow: 0 10px 30px 0 rgba(65, 65, 65, 0.1);

    :last-child {
      margin-bottom: 80px;
    }
  }
`;
export const DashBoardContentBoxWide = styled(DashBoardContentBox)`
  width: calc(100% - 375px);
  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
  }
`;

export const DashBoardContentBoxWide100 = styled(DashBoardContentBox)`
  width: 100%;
  min-width: 315px;
`;

export const BoxContentTitle = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  border-radius: 16px 16px 0 0;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  top: 0;

  background-color: rgba(181, 238, 152, 0.13);
  background-image: radial-gradient(
    circle at 25%,
    hsla(0, 0%, 90%, 0.2),
    rgba(150, 150, 150, 0.04) 100%
  );
  backdrop-filter: blur(10px);

  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const BoxContentListSection = styled.section`
  display: flex;
  width: 100%;

  position: relative;
  top: 80px;
`;

export const BoxContentTitleLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 12px;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  color: ${FontColor};
  text-align: left;

  border-radius: 10px;
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
    transition: background 0.2s cubic-bezier(0.32, 0.08, 0.24, 1),
      opacity 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);
  }
`;

export const BoxContentTitleDescription = styled.h3`
  font-size: 13px;
  font-weight: 200;
  color: ${MenuColor};
  margin-top: 5px;

  line-height: normal;
  letter-spacing: normal;
`;

export const BoxContentList = styled.ul`
  display: flex;

  width: 100%;
  height: 100%;

  padding: 0;
  margin: 0;

  flex-direction: column;
  justify-content: center;
  list-style: none;
  overflow: hidden;
  position: relative;
  transform: translateX(0);
  flex-wrap: wrap;
  align-content: flex-start;

  border-right: 1px solid #eee;

  :last-child {
    border-right: none;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
    border-right: none;
  }

  li {
    width: calc(100% - 20px);
    padding: 20px;
    border-bottom: solid 1px #eee;

    max-height: 71px;
    position: inherit;

    :last-child {
      border-bottom: none;
    }

    :hover {
      border-bottom: none;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.08);
      transition: background 0.2s cubic-bezier(0.32, 0.08, 0.24, 1),
        opacity 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);
    }

    @media screen and (max-width: ${MobileViewWidth}) {
      width: 100%;
    }
  }
`;

export const BoxContentListSecond = styled(BoxContentList)`
  @media screen and (max-width: ${MobileViewWidth}) {
    display: none;
  }
`;

export const EndDate = styled.span`
  display: flex;
  position: absolute;
  color: ${PlaceholderColor};
  font-size: 12px;
  font-weight: 400;
  top: 20px;
  right: 20px;
`;

export const ContentListTitle = styled.p`
  font-size: 14px;
  font-weight: 400;

  line-height: 18px;
  text-align: left;
  color: ${FontColor};
`;

export const ContentListContent = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: ${MenuColor};
`;

export const DashboardRightContentBox = styled(DashBoardContentBox)`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: ${({ isEmpty }) => (isEmpty ? "center" : "flex-start")};
  content: "${({ isEmpty }) => isEmpty}";
  min-height: 276px;

  @media screen and (max-width: ${MobileViewWidth}) {
    margin-top: 8px;
    min-height: 160px;
    flex-wrap: wrap;
  }
`;

export const LectureTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;

  color: ${FontColor};
`;

export const Professor = styled.span`
  color: ${FontColor};

  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: ${MobileViewWidth}) {
    color: #999;
  }
`;

export const ProfessorGrey = styled(Professor)`
  color: #828282;

  @media screen and (max-width: ${MobileViewWidth}) {
    color: #999;
  }
`;

export const Rating = styled.span`
  display: flex;
  position: absolute;
  height: 24px;
  font-size: 16px;
  font-weight: 500;

  right: 24px;
  top: 16px;

  align-items: flex-end;
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: ${MobileViewWidth}) {
    top: 18px;
    right: 16px;

    font-size: 18px;
  }
`;

// DashboardSections
export const DashboardSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: ${MobileViewWidth}) {
    padding: 0 16px;
  }
`;

export const NoResource = styled.span`
  font-size: 12px;
  color: ${PlaceholderColor};
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: ${MobileViewWidth}) {
    padding: 51px 0;
  }
`;

export const NoReourceSection = styled.div`
  padding: 55px 0 53px 0;
`;
export const NoResourceButtonSection = styled.div`
  margin: 6px 0;
`;

export const NoResourceButton = styled.button`
  width: 109px;
  height: 28px;

  margin: 0px 23px 0;
  padding: 5px 20px;

  border: none;
  border-radius: 20px;
  background-color: #eee;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;

  text-align: center;
  color: ${PlaceholderColor};
`;
