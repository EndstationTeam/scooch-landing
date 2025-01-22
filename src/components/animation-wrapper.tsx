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
    <div className={[styles.animationWrapper, className].join(" ")}>
      <SmartphoneAnimation property1="Default" />
      <div className={styles.clickOnSmartphone}>
        CLICK on smartphone TO SEE FEATURES
      </div>
    </div>
  );
};

export default AnimationWrapper;
