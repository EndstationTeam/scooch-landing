import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import AppFeatures from "../components/app-features";
import AnimationWrapper from "../components/animation-wrapper";
import PollutionStats from "../components/pollution-stats";
import Footer from "../components/footer";
import * as styles from "./index.module.css";

const DesktopV: FunctionComponent = () => {
  return (
    <Box className={styles.desktopV1}>
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
      <section className={styles.appFeaturesParent}>
        <AppFeatures />
        <AnimationWrapper />
      </section>
      <section className={styles.pollutionContentWrapper}>
        <Box className={styles.pollutionContent}>
          <PollutionStats />
          <Box className={styles.trafficStats}>
            <Box className={styles.trafficBreakdown}>
              <Box className={styles.trafficData}>
                <Box className={styles.trafficValues}>
                  <Box className={styles.dataPlaceholders}>63%</Box>
                  <Typography
                    className={styles.ofDrivers}
                    variant="inherit"
                    component="h2"
                    sx={{ fontWeight: "500", fontSize: "var(--h3-size)" }}
                  >
                    of drivers
                  </Typography>
                </Box>
                <Box className={styles.trafficExplanations}>
                  <Box className={styles.haveAvoidedGoing}>
                    have avoided going to a destination due to the challenge of
                    finding parking.
                  </Box>
                  <Box className={styles.sourceHttpswwwfigmacom}>
                    {`Source: `}
                    <Typography
                      className={styles.httpswwwfigmacom}
                      variant="inherit"
                      component="span"
                    >
                      https://www.figma.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.trafficData}>
                <Box className={styles.trafficValues}>
                  <Box className={styles.dataPlaceholders}>30%</Box>
                  <Typography
                    className={styles.ofDrivers}
                    variant="inherit"
                    component="h2"
                    sx={{ fontWeight: "500", fontSize: "var(--h3-size)" }}
                  >
                    of urban traffic
                  </Typography>
                </Box>
                <Box className={styles.trafficExplanations}>
                  <Box className={styles.isCausedByContainer}>
                    <Typography className={styles.isCausedBy} variant="inherit">
                      is caused by drivers searching
                    </Typography>
                    <Typography className={styles.isCausedBy} variant="inherit">
                      for a parking.
                    </Typography>
                  </Box>
                  <Box className={styles.sourceHttpswwwfigmacom}>
                    {`Source: `}
                    <Typography
                      className={styles.httpswwwfigmacom}
                      variant="inherit"
                      component="span"
                    >
                      https://www.figma.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.trafficData}>
                <Box className={styles.trafficValues}>
                  <Box className={styles.dataPlaceholders}>55</Box>
                  <Typography
                    className={styles.ofDrivers}
                    variant="inherit"
                    component="h2"
                    sx={{ fontWeight: "500", fontSize: "var(--h3-size)" }}
                  >
                    hours wasted
                  </Typography>
                </Box>
                <Box className={styles.trafficExplanations}>
                  <Box className={styles.isCausedByContainer}>
                    <Typography className={styles.isCausedBy} variant="inherit">
                      by the average driver each year
                    </Typography>
                    <Typography className={styles.isCausedBy} variant="inherit">
                      when trying to park.
                    </Typography>
                  </Box>
                  <Box className={styles.sourceHttpswwwfigmacom}>
                    {`Source: `}
                    <Typography
                      className={styles.httpswwwfigmacom}
                      variant="inherit"
                      component="span"
                    >
                      https://www.figma.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.trafficVisualization}>
            <Box className={styles.trafficImage}>
              <img
                className={styles.earthForestConceptAiGeneraIcon}
                loading="lazy"
                alt=""
                src="/earthforestconceptaigenerated-1@2x.png"
              />
              <img
                className={styles.severalCarsTraveledBusyRoaIcon}
                loading="lazy"
                alt=""
                src="/severalcarstraveledbusyroadwaytrafficlights-1@2x.png"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </section>
    </Box>
  );
};

export default DesktopV;
