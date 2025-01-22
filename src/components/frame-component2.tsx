import * as React from "react";
import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import * as styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.desktopV1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.parkingJustGotSimplerWrapper}>
            <h1 className={styles.parkingJustGot}>Parking just got simpler.</h1>
          </div>
          <h1 className={styles.readyToPark}>
            Ready to park smarter? Get started with Scooch today.
          </h1>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            disableElevation
            variant="contained"
            sx={{
              color: "#151818",
              fontSize: "16",
              background: "#fbb031",
              borderRadius: "40px",
              "&:hover": { background: "#fbb031" },
              width: 240,
              height: 58,
            }}
          >
            DOWNLOAD the APP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
