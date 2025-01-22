import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import * as styles from "./pollution-stats.module.css";

export type PollutionStatsType = {
  className?: string;
};

const PollutionStats: FunctionComponent<PollutionStatsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.pollutionStats, className].join(" ")}>
      <div className={styles.statsBackground} />
      <div className={styles.pollutionImage}>
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className={styles.reduceUrbanPollutionWithOuWrapper}>
        <h1 className={styles.reduceUrbanPollutionContainer}>
          <span>{`Reduce Urban Pollution with our `}</span>
          <span className={styles.smartParkingSolution}>
            Smart Parking Solution
          </span>
        </h1>
      </div>
      <div className={styles.driverImpact}>
        <div className={styles.inTheUs}>
          In the US alone, drivers looking for parking produce 9.3 million tons
          of carbon emissions per year. Use Scooch to find parking, reduce
          congestion and make our cities greener.
        </div>
      </div>
    </div>
  );
};

export default PollutionStats;
