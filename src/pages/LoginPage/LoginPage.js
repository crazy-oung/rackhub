import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import {
  LoginSection,
  LoginContainer,
  LoginFormTitle,
  LoginForm,
  InputLabel,
  LoginInput,
  Separator,
  LoginButton,
  CheckBoxLabel,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "./styles/LoginPage.style";

import { ReactComponent as RackhubMainLogoSvg } from "../../assets/svg/logo/rackhub.svg";
import { setLocalStorageValue } from "../../utils/localStorageUtils";
import { PrimaryColor } from "../../static/Shared/commonStyles";

import { login } from "../../store/modules/loginReducer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [checked, setChecked] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const loginAction = (e) => {
    e.preventDefault();
    setLocalStorageValue("nickname", e.target[1].value);
    dispatch(login({ nickname: e.target[1].value }));
    history.push("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoginSection>
        <LoginContainer>
          <RackhubMainLogoSvg fill={PrimaryColor} width={80} height={80} />
          <LoginFormTitle>나만의 서랍, 랙허브에 로그인</LoginFormTitle>

          <LoginForm action="#" onSubmit={loginAction}>
            <InputLabel htmlFor="Id">아이디</InputLabel>
            <LoginInput
              placeholder="아이디"
              type="text"
              name="Id"
              id="Id"
            ></LoginInput>

            <InputLabel htmlFor="Pw">닉네임</InputLabel>
            <LoginInput
              placeholder="닉네임"
              type="nickname"
              name="Nickname"
              id="nickname"
            ></LoginInput>

            <InputLabel htmlFor="Pw">비밀번호</InputLabel>
            <LoginInput
              placeholder="비밀번호"
              type="password"
              name="Pw"
              id="Pw"
            ></LoginInput>

            <CheckBoxLabel>
              <CheckboxContainer onChange={handleCheckboxChange}>
                <HiddenCheckbox
                  id="autoLogin"
                  name="autoLogin"
                  type="checkbox"
                  checked={checked}
                />
                <StyledCheckbox checked={checked}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
              <InputLabel htmlFor="autoLogin" style={{ marginLeft: 8 }}>
                자동로그인
              </InputLabel>
            </CheckBoxLabel>

            <Separator />
            <LoginButton type="submit" value="로그인" />
          </LoginForm>
        </LoginContainer>
      </LoginSection>
    </motion.div>
  );
};

export default LoginPage;
