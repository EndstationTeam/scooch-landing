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
      <Box className={styles.backOrangeParent}>
        <Box className={styles.backOrange} />
        <header className={styles.frameParent}>
          <Box className={styles.calque1Wrapper}>
            <img
              className={styles.calque1Icon}
              loading="lazy"
              alt=""
              src="/calque-1.svg"
            />
          </Box>
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
        <Box className={styles.frameWrapper}>
          <Box className={styles.frameGroup}>
            <Box className={styles.appDownloadWrapper}>
              <Box className={styles.appDownload}>
                <Typography
                  className={styles.parkAnywhere}
                  variant="inherit"
                  component="h1"
                  sx={{ fontWeight: "900" }}
                >
                  Park Anywhere
                </Typography>
                <Typography
                  className={styles.withTheOnly}
                  variant="inherit"
                  component="h2"
                  sx={{ fontWeight: "500", fontSize: "var(--h3-size)" }}
                >
                  With the only parking app you’ll ever need
                </Typography>
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
                <Box className={styles.appDownloadInner}>
                  <Box className={styles.iphonePlanDeTravail1Parent}>
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
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.frameContainer}>
              <Box className={styles.frameDiv}>
                <Box className={styles.tiredOfDealingWithANewApParent}>
                  <Typography
                    className={styles.tiredOfDealingContainer}
                    variant="inherit"
                    component="h1"
                    sx={{ fontWeight: "900" }}
                  >
                    <Typography
                      className={styles.tiredOfDealing}
                      variant="inherit"
                    >
                      Tired of dealing with a new app
                    </Typography>
                    <Typography
                      className={styles.tiredOfDealing}
                      variant="inherit"
                    >
                      <Typography
                        className={styles.everyTime}
                        variant="inherit"
                        component="span"
                      >
                        every time
                      </Typography>
                      <Typography variant="inherit" component="span">
                        {" "}
                        you park somewhere new?
                      </Typography>
                    </Typography>
                  </Typography>
                  <Box className={styles.scoochLetsYouPayForParkinWrapper}>
                    <Box className={styles.scoochLetsYou}>
                      Scooch lets you pay for parking anywhere.
                    </Box>
                  </Box>
                </Box>
              </Box>
              <div className={styles.frameParent1}>
                <Box className={styles.advantageCardWrapper}>
                  <Box className={styles.advantageCard}>
                    <Box className={styles.saveTimeWrapper}>
                      <Typography
                        className={styles.saveTime}
                        variant="inherit"
                        component="h1"
                        sx={{ fontWeight: "900" }}
                      >
                        Save time
                      </Typography>
                    </Box>
                    <Box className={styles.skipTheDownloads}>
                      Skip downloads, sign ups and filling out forms
                    </Box>
                    <img
                      className={styles.iphone2planDeTravail12Icon}
                      loading="lazy"
                      alt=""
                      src="/iphone2plandetravail1-2@2x.png"
                    />
                  </Box>
                </Box>
                <FeatureList
                  findParkingEasily="Find parking easily"
                  locateTheBestSpotNearYourDest="Locate the best spot near your destination"
                  iphone2PlanDeTravail12="/iphone2plandetravail1-2-1@2x.png"
                />
                <FeatureList
                  findParkingEasily="Avoid Tickets"
                  locateTheBestSpotNearYourDest="Get reminders before time runs out."
                  iphone2PlanDeTravail12="/iphone2plandetravail1-2-2@2x.png"
                  featureListHeight="549px"
                  parkingBenefitsAlignSelf="unset"
                  findParkingEasilyFlex="unset"
                  findParkingEasilyWidth="455px"
                />
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent;
