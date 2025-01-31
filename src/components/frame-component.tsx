import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import FeatureList from "./feature-list";
import useScreenSize from "./use-screen-size";
import MobileFrame from "./mobile-frame";
import DesktopFrame from "./desktop-frame";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {

  const isMobile = useScreenSize();
  return (
    <React.Fragment>
      {isMobile ? <MobileFrame /> : <DesktopFrame />}
    </React.Fragment>
  );
}

export default FrameComponent;
