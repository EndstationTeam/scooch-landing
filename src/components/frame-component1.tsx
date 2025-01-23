import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import ICONSCROLLANIMATION from "./i-c-o-n-s-c-r-o-l-l-a-n-i-m-a-t-i-o-n";
import * as styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.iconScrollAnimationParent, className].join(" ")}
    >
      <ICONSCROLLANIMATION property1="Default" />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" />
          </div>
          <h3 className={styles.avoidScam}>avoid scam</h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
