import React from "react";
import { useHistory } from "react-router-dom";
import { DashBoardContentBox } from "../../../pages/IndexPage/styles/IndexPage.style";

import {
  MyProfileIcon,
  MyName,
  MyMainFocus,
  MyTodoResult,
} from "./MyProfile.style";

const MyProfile = () => {
  const history = useHistory();

  return (
    <>
      <DashBoardContentBox
        style={{
          background:
            "rgba(181, 238, 152, 0.13) radial-gradient(circle at 80% top, rgba(255 255 255 /100%), rgba(150, 150, 150, 0.04) 100%)",
          backdropFilter: " blur(10px)",
        }}
        onClick={() => history.push("/mypage")}
      >
        <MyProfileIcon />
        <MyName>테스트 유저</MyName>
        <MyMainFocus>기말고사 기간 진행중</MyMainFocus>
        <MyTodoResult>완료된 할일: 3개</MyTodoResult>
      </DashBoardContentBox>
    </>
  );
};

export default MyProfile;
