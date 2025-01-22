import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import FeatureList from "./feature-list";
import * as styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.desktopV1Inner, className].join(" ")}>
      <div className={styles.backOrangeParent}>
        <div className={styles.backOrange} />
        <header className={styles.frameParent}>
          <div className={styles.calque1Wrapper}>
            <img
              className={styles.calque1Icon}
              loading="lazy"
              alt=""
              src="/calque-1.svg"
            />
          </div>
          <Button
            disableElevation
            variant="contained"
            sx={{
              color: "#151818",
              fontSize: "16",
              background: "#fbb031",
              borderRadius: "40px",
              "&:hover": { background: "#fbb031" },
            }}
          >
            DOWNLOAD APP
          </Button>
        </header>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.appDownloadWrapper}>
              <div className={styles.appDownload}>
                <h1 className={styles.parkAnywhere}>Park Anywhere</h1>
                <h2 className={styles.withTheOnly}>
                  With the only parking app you’ll ever need
                </h2>
                <Button
                  className={styles.button}
                  disableElevation
                  variant="contained"
                  sx={{
                    color: "#151818",
                    fontSize: "16",
                    background: "#fbb031",
                    borderRadius: "40px",
                    "&:hover": { background: "#fbb031" },
                    width: 247,
                    height: 58,
                  }}
                >
                  SAY NO TO NEW APPS
                </Button>
                <img
                  className={styles.appStoreIcon}
                  loading="lazy"
                  alt=""
                  src="/app-store.svg"
                />
                <img
                  className={styles.googlePlayIcon}
                  loading="lazy"
                  alt=""
                  src="/google-play.svg"
                />
                <div className={styles.appDownloadInner}>
                  <div className={styles.iphonePlanDeTravail1Parent}>
                    <img
                      className={styles.iphonePlanDeTravail1Icon}
                      alt=""
                      src="/iphoneplandetravail1@2x.png"
                    />
                    <img
                      className={styles.iphonePlanDeTravail1CopieIcon}
                      loading="lazy"
                      alt=""
                      src="/iphoneplandetravail1copie@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.tiredOfDealingWithANewApParent}>
                  <h1 className={styles.tiredOfDealingContainer}>
                    <p className={styles.tiredOfDealing}>
                      Tired of dealing with a new app
                    </p>
                    <p className={styles.tiredOfDealing}>
                      <span className={styles.everyTime}>every time</span>
                      <span> you park somewhere new?</span>
                    </p>
                  </h1>
                  <div className={styles.scoochLetsYouPayForParkinWrapper}>
                    <div className={styles.scoochLetsYou}>
                      Scooch lets you pay for parking anywhere.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.advantageCardWrapper}>
                  <div className={styles.advantageCard}>
                    <div className={styles.saveTimeWrapper}>
                      <h1 className={styles.saveTime}>Save time</h1>
                    </div>
                    <div className={styles.skipTheDownloads}>
                      Skip downloads, sign ups and filling out forms
                    </div>
                    <img
                      className={styles.iphone2planDeTravail12Icon}
                      loading="lazy"
                      alt=""
                      src="/iphone2plandetravail1-2@2x.png"
                    />
                  </div>
                </div>
                <FeatureList
                  findParkingEasily="Find parking easily"
                  locateTheBestSpotNearYourDest="Locate the best spot near your destination"
                  iphone2PlanDeTravail12="/iphone2plandetravail1-2-1@2x.png"
                />
                <FeatureList
                  featureListHeight="549px"
                  parkingBenefitsAlignSelf="unset"
                  findParkingEasily="Avoid Tickets"
                  findParkingEasilyFlex="unset"
                  findParkingEasilyWidth="455px"
                  locateTheBestSpotNearYourDest="Get reminders before time runs out."
                  iphone2PlanDeTravail12="/iphone2plandetravail1-2-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
