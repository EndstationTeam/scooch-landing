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
      <Box className={styles.frameParent}>
        <Box className={styles.frameGroup}>
          <Box className={styles.parkingJustGotSimplerWrapper}>
            <Typography
              className={styles.parkingJustGot}
              variant="inherit"
              component="h1"
              sx={{ fontWeight: "900" }}
            >
              Parking just got simpler.
            </Typography>
          </Box>
          <Typography
            className={styles.readyToPark}
            variant="inherit"
            component="h1"
            sx={{ fontWeight: "900", fontSize: "var(--h2-size)" }}
          >
            Ready to park smarter? Get started with Scooch today.
          </Typography>
        </Box>
        <Box className={styles.buttonWrapper}>
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
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent2;
