import * as React from "react";
import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import SmartphoneAnimation from "./smartphone-animation";
import * as styles from "./animation-wrapper.module.css";

export type AnimationWrapperType = {
  className?: string;
};

const AnimationWrapper: FunctionComponent<AnimationWrapperType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.animationWrapper, className].join(" ")}>
      <SmartphoneAnimation property1="Default" />
      <Box className={styles.clickOnSmartphone}>
        CLICK on smartphone TO SEE FEATURES
      </Box>
    </Box>
  );
};

export default AnimationWrapper;
