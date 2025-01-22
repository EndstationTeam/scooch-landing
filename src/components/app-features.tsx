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
    <div className={[styles.appFeatures, className].join(" ")}>
      <div className={styles.appFeaturesChild} />
      <div className={styles.featureColumn}>
        <div className={styles.firstFeature}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.availableOnTheAppParent}>
                <div className={styles.availableOnThe}>
                  Available on the app
                </div>
                <h1 className={styles.aiValet}>AI Valet</h1>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.aiIconWrapper}>
                    <img
                      className={styles.aiIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.ourAiAgentContainer}>
                    <p className={styles.ourAiAgent}>
                      Our AI agent works behind the scenes
                    </p>
                    <p className={styles.ourAiAgent}>
                      to find you spots and pay for parking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
        <div className={styles.secondFeature}>
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
        </div>
      </div>
      <div className={styles.featureColumn1}>
        <h1 className={styles.enRoute}>En route</h1>
        <div className={styles.findTheBest}>
          Find the best spot by your destination.
        </div>
        <div className={styles.canTheParking}>Can the parking sign to pay.</div>
        <div className={styles.loyaltyAccountsAre}>
          Loyalty accounts are created and managed on your behalf You just reap
          the rewards.
        </div>
        <div className={styles.carIconParent}>
          <img
            className={styles.carIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.scanYourCarToAddItParent}>
            <div className={styles.scanYourCar}>Scan your car to add it.</div>
            <img className={styles.addCarIcon} alt="" src="/vector-1.svg" />
          </div>
          <img className={styles.featureIcon} alt="" src="/vector-1.svg" />
          <img className={styles.featureIcon1} alt="" src="/vector-1.svg" />
          <img
            className={styles.containerIcon}
            loading="lazy"
            alt=""
            src="/frame-65@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
