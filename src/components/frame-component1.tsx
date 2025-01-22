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
      <Box className={styles.frameWrapper}>
        <Box className={styles.frameParent}>
          <Box className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group-8.svg" />
          </Box>
          <Typography
            className={styles.avoidScam}
            variant="inherit"
            component="h3"
            sx={{ fontWeight: "900" }}
          >
            avoid scam
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent1;
