import styled from "styled-components";

import {
  FontColor,
  DefaultContentWidth,
  MobileViewWidth,
  BorderColor,
  PlaceholderColor,
} from "../../../static/Shared/commonStyles";

const MINIMUM_PC_WEBVIEW_WIDTH = `calc(${DefaultContentWidth} + 20px)`;

export const Index = styled.div`
  width: ${DefaultContentWidth};
  height: fit-content;
  margin: 40px auto 100px auto;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    width: auto;
    margin: 40px 0 100px 0;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: auto;
    margin: auto;
    min-height: calc(100% + 252px + 32px);
  }
`;

export const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 289px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    display: none;
  }
`;

export const TitleSection = styled.aside`
  display: flex;
  position: absolute;

  margin-bottom: 40px;
  left: 0;
  bottom: 0;
  flex-direction: column;
`;

export const TitleBold = styled.h1`
  margin-top: 16px;
  font-size: 36px;
  font-weight: 800;
  font-family: "NanumSquareRound";
  color: ${FontColor};
`;

export const TitleNormal = styled.h3`
  font-size: 18px;
  font-weight: normal;
  font-family: "NanumSquareRound";
  color: ${FontColor};
`;

export const BannerImg = styled.figure`
  position: absolute;

  right: 0;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    right: -20px;
  }
`;

export const DashBoardContentBox = styled.div`
  width: 100%;
  margin-top: 16px;
  border: 1px solid ${BorderColor};
  border-radius: 8px;

  align-items: ${({ isEmpty }) => (isEmpty ? "center" : "flex-start")};

  @media screen and (max-width: ${MobileViewWidth}) {
    margin-top: 8px;
  }
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

export const TitleProfessor = styled.div`
  display: flex;
  height: 39px;
  width: auto;
  margin-right: 24px;

  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: auto;
    justify-content: space-around;
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
  right: 24px;
  top: 16px;
  align-items: flex-end;

  font-size: 16px;
  font-weight: 500;
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
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${MobileViewWidth}) {
    padding: 0 16px;
  }
`;

export const DashboardLeft = styled.section`
  width: 464px;
  height: fit-content;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    width: 100%;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;

    position: relative;
    top: -153px;
  }
`;
export const DashBoardRight = styled.div`
  width: 655px;
  margin-left: 16px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const DashboardRightBottom = styled.div`
  display: flex;
  width: 655px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const DashboardRightTopSection = styled.section`
  width: 655px;
  margin-bottom: 32px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    position: relative;
    width: 100%;
    bottom: ${({ timetableLectureListSize }) =>
      timetableLectureListSize > 2
        ? -240 - (timetableLectureListSize - 3) * 62
        : -210}px;
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

export const RightBottomLeftSection = styled.section`
  width: 368px;
  margin-right: 16px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    width: 49%;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    position: relative;
    width: 100%;
    top: -184px;
    margin-right: 0;
  }
`;

export const RightBottomRightSection = styled.section`
  width: 272px;

  @media screen and (max-width: ${MINIMUM_PC_WEBVIEW_WIDTH}) {
    width: calc(100% - 49% - 1rem);
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 100%;
    margin-bottom: 92px;
  }
`;

export const LeftSide = styled.div`
  width: 465px;
  margin-right: 16px;
`;

export const LeftTopSide = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 16px;
`;

export const LeftBottomSide = styled.div`
  display: flex;
  height: 87px;
`;

export const RightSide = styled.div``;

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
