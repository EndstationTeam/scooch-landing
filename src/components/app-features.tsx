import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import * as styles from "./app-features.module.css";

export type AppFeaturesType = {
  className?: string;
};

const AppFeatures: FunctionComponent<AppFeaturesType> = ({
  className = "",
}) => {
  return (
    <Box className={[styles.appFeatures, className].join(" ")}>
      <Box className={styles.appFeaturesChild} />
      <Box className={styles.featureColumn}>
        <Box className={styles.firstFeature}>
          <Box className={styles.frameParent}>
            <Box className={styles.frameGroup}>
              <Box className={styles.availableOnTheAppParent}>
                <Box className={styles.availableOnThe}>
                  Available on the app
                </Box>
                <Typography
                  className={styles.aiValet}
                  variant="inherit"
                  component="h1"
                  sx={{ fontWeight: "900", fontSize: "var(--h2-size)" }}
                >
                  AI Valet
                </Typography>
              </Box>
              <Box className={styles.frameWrapper}>
                <Box className={styles.frameContainer}>
                  <Box className={styles.aiIconWrapper}>
                    <img
                      className={styles.aiIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </Box>
                  <Box className={styles.ourAiAgentContainer}>
                    <Typography className={styles.ourAiAgent} variant="inherit">
                      Our AI agent works behind the scenes
                    </Typography>
                    <Typography className={styles.ourAiAgent} variant="inherit">
                      to find you spots and pay for parking.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button
              disableElevation
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "16",
                background: "#151818",
                borderRadius: "30px",
                "&:hover": { background: "#151818" },
                width: 240,
                height: 58,
              }}
            >
              DOWNLOAD the APP
            </Button>
          </Box>
        </Box>
        <Box className={styles.secondFeature}>
          <img
            className={styles.iphonePlanDeTravail1Icon}
            loading="lazy"
            alt=""
            src="/iphoneplandetravail1-1@2x.png"
          />
          <img
            className={styles.iphonePlanDeTravail1CopieIcon}
            alt=""
            src="/iphoneplandetravail1copie-1@2x.png"
          />
        </Box>
      </Box>
      <Box className={styles.featureColumn1}>
        <Typography
          className={styles.enRoute}
          variant="inherit"
          component="h1"
          sx={{ fontWeight: "900", fontSize: "var(--h2-size)" }}
        >
          En route
        </Typography>
        <Box className={styles.findTheBest}>
          Find the best spot by your destination.
        </Box>
        <Box className={styles.canTheParking}>Can the parking sign to pay.</Box>
        <Box className={styles.loyaltyAccountsAre}>
          Loyalty accounts are created and managed on your behalf You just reap
          the rewards.
        </Box>
        <Box className={styles.carIconParent}>
          <img
            className={styles.carIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <Box className={styles.scanYourCarToAddItParent}>
            <Box className={styles.scanYourCar}>Scan your car to add it.</Box>
            <img className={styles.addCarIcon} alt="" src="/vector-2.svg" />
          </Box>
          <img className={styles.featureIcon} alt="" src="/vector-3.svg" />
          <img className={styles.featureIcon1} alt="" src="/vector-4.svg" />
          <Box className={styles.wrapperContainer}>
            <img
              className={styles.containerIcon}
              loading="lazy"
              alt=""
              src="/frame-65@2x.png"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppFeatures;
