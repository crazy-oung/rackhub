import React from "react";

import {
  StyledFooter,
  FooterContent,
  ExternalSection,
  ExternalLink,
  ExternalLinkSepertor,
  ApplicationInfoSection,
  ApplicationInfoContent,
  CopyRight,
  CopyRightSection,
} from "./Footer.style";

import { ReactComponent as RackhubMainLogoSvg } from "../../../assets/svg/logo/rackhub.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <ExternalSection></ExternalSection>
      </FooterContent>

      <ApplicationInfoSection>
        <ApplicationInfoContent>
          <ExternalSection>
            <ExternalLink to="/#">
              <RackhubMainLogoSvg
                width={10}
                height={10}
                color="#"
                style={{ marginRight: "2px" }}
              />
              나의 랙허브
            </ExternalLink>
            <ExternalLinkSepertor />
            <ExternalLink to="/#">이메일 무단수집 거부</ExternalLink>
            <ExternalLinkSepertor />
            <ExternalLink to="/#">이용약관</ExternalLink>
          </ExternalSection>
        </ApplicationInfoContent>
        <CopyRightSection>
          <CopyRight>
            Copyright © {new Date().getFullYear()} Dayoung Han.
          </CopyRight>
        </CopyRightSection>
      </ApplicationInfoSection>
    </StyledFooter>
  );
};

export default Footer;
