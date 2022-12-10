import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MobileViewWidth } from "./static/Shared/commonStyles";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
      font-family: 'AppleSDGothicNeo';
      font-weight: normal; 
      font-style: normal;
      src: url(assets/font/AppleSDGothicNeo/AppleSDGothicNeoR00-02.otf) format('opentype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 500; 
    font-style: normal;
    src: url(assets/font/AppleSDGothicNeo/AppleSDGothicNeoSB00-05.otf) format('opentype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 800; 
    font-style: normal;
    src: url(assets/font/AppleSDGothicNeo/AppleSDGothicNeoB00-08.otf) format('opentype');
  }
  @font-face {
      font-family: 'NotoSansCJKKR';
      font-weight: normal; 
      font-style: normal;
      src: url(assets/font/NotoSansCJKKR/NotoSansCJKkr-Regular.otf) format('opentype');
  }
  @font-face {
      font-family: 'NotoSansCJKKR';
      font-weight: 500; 
      font-style: normal;
      src: url(assets/font/NotoSansCJKKR/NotoSansCJKkr-Medium.otf) format('opentype');
  }
  @font-face {
      font-family: 'NanumSquareRound';
      font-weight: 800; 
      font-style: normal;
      src: url(assets/font/NanumSquareRound/NanumSquareRoundOTFEB.otf) format('opentype');
  }
  @font-face {
      font-family: 'NanumSquareRound';
      font-weight: normal; 
      font-style: normal;
      src: url(assets/font/NanumSquareRound/NanumSquareRoundOTFR.otf) format('opentype');
  }
  @font-face {
    font-family: 'SegoeUI';
    font-style: normal;
    font-weight: normal;
    src: url(assets/font/SegoeUI/SegoeUI.woff) format('woff'); 
  }

  *{
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }

  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body, #root{
    font-family: 'AppleSDGothicNeo', 'NotoSansCJKKR', 'Noto Sans KR', 'Noto Sans', sans-serif;
    // height: 100%;
    height: max-content;
    width: 100%;

    background: #fff;
    @media screen and (max-width: ${MobileViewWidth}) {
      background: radial-gradient( circle at 25%, hsla(0,0%,90%,0.2), rgba(150,150,150,0.04) 100% );
    }
    

  }

  
`;
