import React from "react";
import { FunctionComponent } from "react";
import { Button, useMediaQuery } from "@mui/material";
import MobileFooter from "./mobile-footer";
import DesktopFooter from "./desktop-footer";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  // const isMobile = useScreenSize();
  const isMobile = useMediaQuery('(max-width:1100px)', { noSsr: true });


  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
