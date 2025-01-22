import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import * as styles from "./feature-list.module.css";

export type FeatureListType = {
  className?: string;
  findParkingEasily?: string;
  locateTheBestSpotNearYourDest?: string;
  iphone2PlanDeTravail12?: string;

  /** Style props */
  featureListHeight?: CSSProperties["height"];
  parkingBenefitsAlignSelf?: CSSProperties["alignSelf"];
  findParkingEasilyFlex?: CSSProperties["flex"];
  findParkingEasilyWidth?: CSSProperties["width"];
};

const FeatureList: FunctionComponent<FeatureListType> = ({
  className = "",
  featureListHeight,
  parkingBenefitsAlignSelf,
  findParkingEasily,
  findParkingEasilyFlex,
  findParkingEasilyWidth,
  locateTheBestSpotNearYourDest,
  iphone2PlanDeTravail12,
}) => {
  const featureListStyle: CSSProperties = useMemo(() => {
    return {
      height: featureListHeight,
    };
  }, [featureListHeight]);

  const parkingBenefitsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: parkingBenefitsAlignSelf,
    };
  }, [parkingBenefitsAlignSelf]);

  const findParkingEasilyStyle: CSSProperties = useMemo(() => {
    return {
      flex: findParkingEasilyFlex,
      width: findParkingEasilyWidth,
    };
  }, [findParkingEasilyFlex, findParkingEasilyWidth]);

  return (
    <div
      className={[styles.featureList, className].join(" ")}
      style={featureListStyle}
    >
      <div className={styles.parkingBenefits} style={parkingBenefitsStyle}>
        <h1 className={styles.findParkingEasily} style={findParkingEasilyStyle}>
          {findParkingEasily}
        </h1>
      </div>
      <div className={styles.reminderBenefits}>
        <div className={styles.locateTheBest}>
          {locateTheBestSpotNearYourDest}
        </div>
        <img
          className={styles.iphone2planDeTravail12Icon}
          loading="lazy"
          alt=""
          src={iphone2PlanDeTravail12}
        />
      </div>
    </div>
  );
};

export default FeatureList;
