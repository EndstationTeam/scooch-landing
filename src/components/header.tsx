import * as React from "react";
import { FunctionComponent } from "react";
import MobileHeader from "./mobile-header"; // Adjust the import path
import DesktopHeader from "./desktop-header"; // Adjust the import path
import { useMediaQuery } from "@mui/material";

const Header: FunctionComponent = () => {
  // const isMobile = useScreenSize();
  const isMobile =  useMediaQuery('(max-width:900px)', { noSsr: true });

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;