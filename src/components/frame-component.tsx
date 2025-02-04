import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import FeatureList from "./feature-list";
import MobileFrame from "./mobile-frame";
import DesktopFrame from "./desktop-frame";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {

  // const isMobile = useScreenSize();
    const isMobile =  useMediaQuery('(max-width:900px)', { noSsr: true });

  return (
    <React.Fragment>
      {isMobile ? <MobileFrame /> : <DesktopFrame />}
    </React.Fragment>
  );
}

export default FrameComponent;
