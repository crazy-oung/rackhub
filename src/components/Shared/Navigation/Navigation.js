import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/modules/loginReducer";

import {
  StyledNavigation,
  StyledHeader,
  NavigationSectionMobile,
  Logo,
  ShortcutSection,
  LinkSection,
  StyledNavLink,
  MobileMenuContext,
  MobileIconFigure,
  MobileNavText,
  AuthSection,
  AuthSectionLink,
  CenterLine,
  LogoText,
} from "./Navigation.style";
import { PrimaryColor } from "../../../static/Shared/commonStyles";

import { ReactComponent as HomeIconSvg } from "../../../assets/svg/icon/home.svg";
import { ReactComponent as LectureReviewIconSvg } from "../../../assets/svg/icon/clipboard-check.svg";
import { ReactComponent as LectureResourceIconSvg } from "../../../assets/svg/icon/document-text.svg";
import { ReactComponent as TimetableIconSvg } from "../../../assets/svg/icon/template.svg";
import { ReactComponent as MyPageIconSvg } from "../../../assets/svg/icon/user.svg";
import MemoIcon from "../../../assets/image/icon/add.png";

import { ReactComponent as RackhubMainLogoSvg } from "../../../assets/svg/logo/rackhub.svg";

import {
  getLocalStorageValue,
  removeLocalStorageValue,
} from "../../../utils/localStorageUtils";

const Navigation = () => {
  const [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );

  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    history.listen((localPath) => {
      setCurrentLocation(localPath.pathname);
    });
  }, [history]);

  const executeLogout = () => {
    removeLocalStorageValue("nickname");
    dispatch(logout());
  };

  return (
    <>
      <StyledHeader>
        <Link to="/">
          <Logo>
            <RackhubMainLogoSvg fill={PrimaryColor} width={30} height={30} />
          </Logo>
          <LogoText />
        </Link>

        <LinkSection>
          <ShortcutSection>
            <StyledNavLink
              activeClassName="selected"
              to="/memo"
              style={{ padding: "0", width: "50px" }}
            >
              <img src={MemoIcon} width={"18px"} height="18px" />
            </StyledNavLink>
            {/* <StyledNavLink activeClassName="selected" exact to="/">
              홈
            </StyledNavLink>
            <StyledNavLink activeClassName="selected" to="/lectures">
              할일목록
            </StyledNavLink>
            <StyledNavLink activeClassName="selected" to="/timetable">
              시간표
            </StyledNavLink>
          <MenuFocusedOn location={currentLocation} /> */}
          </ShortcutSection>

          <AuthSection>
            {isLoggedIn ? (
              <>
                <AuthSectionLink to="/my">마이페이지</AuthSectionLink>
                <CenterLine />
                <AuthSectionLink onClick={executeLogout()}>
                  로그아웃
                </AuthSectionLink>
              </>
            ) : (
              <>
                <AuthSectionLink to="/login">로그인</AuthSectionLink>
                <CenterLine />
                <AuthSectionLink to="/signup">회원가입</AuthSectionLink>
              </>
            )}
          </AuthSection>
        </LinkSection>
      </StyledHeader>

      <StyledNavigation>
        <NavigationSectionMobile>
          <StyledNavLink activeClassName="selected" exact to="/">
            <MobileMenuContext>
              <MobileIconFigure>
                <HomeIconSvg />
              </MobileIconFigure>
              <MobileNavText>홈</MobileNavText>
            </MobileMenuContext>
          </StyledNavLink>

          <StyledNavLink activeClassName="selected" to="/todo">
            <MobileMenuContext>
              <MobileIconFigure>
                <LectureReviewIconSvg />
              </MobileIconFigure>
              <MobileNavText>할 일</MobileNavText>
            </MobileMenuContext>
          </StyledNavLink>

          <StyledNavLink activeClassName="selected" to="/lectures">
            <MobileMenuContext>
              <MobileIconFigure>
                <LectureResourceIconSvg />
              </MobileIconFigure>
              <MobileNavText>내 강의</MobileNavText>
            </MobileMenuContext>
          </StyledNavLink>

          <StyledNavLink activeClassName="selected" to="/timetable">
            <MobileMenuContext>
              <MobileIconFigure>
                <TimetableIconSvg />
              </MobileIconFigure>
              <MobileNavText>시간표</MobileNavText>
            </MobileMenuContext>
          </StyledNavLink>

          <StyledNavLink activeClassName="selected" to="/mypage">
            <MobileMenuContext>
              <MobileIconFigure>
                <MyPageIconSvg />
              </MobileIconFigure>
              <MobileNavText>마이페이지</MobileNavText>
            </MobileMenuContext>
          </StyledNavLink>
        </NavigationSectionMobile>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
