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
  findParkingEasily,
  locateTheBestSpotNearYourDest,
  iphone2PlanDeTravail12,
  featureListHeight,
  parkingBenefitsAlignSelf,
  findParkingEasilyFlex,
  findParkingEasilyWidth,
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
    <Box
      className={[styles.featureList, className].join(" ")}
      style={featureListStyle}
    >
      <Box className={styles.parkingBenefits} style={parkingBenefitsStyle}>
        <Typography
          className={styles.findParkingEasily}
          variant="inherit"
          component="h1"
          sx={{ fontWeight: "900" }}
          style={findParkingEasilyStyle}
        >
          {findParkingEasily}
        </Typography>
      </Box>
      <Box className={styles.reminderBenefits}>
        <Box className={styles.locateTheBest}>
          {locateTheBestSpotNearYourDest}
        </Box>
        <img
          className={styles.iphone2planDeTravail12Icon}
          loading="lazy"
          alt=""
          src={iphone2PlanDeTravail12}
        />
      </Box>
    </Box>
  );
};

export default FeatureList;
