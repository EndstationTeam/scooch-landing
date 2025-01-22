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
    <div className={styles.desktopV1}>
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
      <section className={styles.appFeaturesParent}>
        <AppFeatures />
        <AnimationWrapper />
      </section>
      <section className={styles.pollutionContentWrapper}>
        <div className={styles.pollutionContent}>
          <PollutionStats />
          <div className={styles.trafficStats}>
            <div className={styles.trafficBreakdown}>
              <div className={styles.trafficData}>
                <div className={styles.trafficValues}>
                  <div className={styles.dataPlaceholders}>63%</div>
                  <h2 className={styles.ofDrivers}>of drivers</h2>
                </div>
                <div className={styles.trafficExplanations}>
                  <div className={styles.haveAvoidedGoing}>
                    have avoided going to a destination due to the challenge of
                    finding parking.
                  </div>
                  <div className={styles.sourceHttpswwwfigmacom}>
                    {`Source: `}
                    <span className={styles.httpswwwfigmacom}>
                      https://www.figma.com
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.trafficData}>
                <div className={styles.trafficValues}>
                  <div className={styles.dataPlaceholders}>30%</div>
                  <h2 className={styles.ofDrivers}>of urban traffic</h2>
                </div>
                <div className={styles.trafficExplanations}>
                  <div className={styles.isCausedByContainer}>
                    <p className={styles.isCausedBy}>
                      is caused by drivers searching
                    </p>
                    <p className={styles.isCausedBy}>for a parking.</p>
                  </div>
                  <div className={styles.sourceHttpswwwfigmacom}>
                    {`Source: `}
                    <span className={styles.httpswwwfigmacom}>
                      https://www.figma.com
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.trafficData}>
                <div className={styles.trafficValues}>
                  <div className={styles.dataPlaceholders}>55</div>
                  <h2 className={styles.ofDrivers}>hours wasted</h2>
                </div>
                <div className={styles.trafficExplanations}>
                  <div className={styles.isCausedByContainer}>
                    <p className={styles.isCausedBy}>
                      by the average driver each year
                    </p>
                    <p className={styles.isCausedBy}>when trying to park.</p>
                  </div>
                  <div className={styles.sourceHttpswwwfigmacom}>
                    {`Source: `}
                    <span className={styles.httpswwwfigmacom}>
                      https://www.figma.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.trafficVisualization}>
            <div className={styles.trafficImage}>
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
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default DesktopV;
