import styled from "styled-components";

import { MenuColor, MobileViewWidth } from "../../static/Shared/commonStyles";
import { MemoDate, MemoCategory } from "./MemoList.style";

export const MemoDetailDate = styled(MemoDate)`
  position: relative;
  top: -8px;
  left: 8px;
`;

export const MemoDetailCategory = styled(MemoCategory)`
  position: relative;
  top: -8px;
  left: 8px;
`;
