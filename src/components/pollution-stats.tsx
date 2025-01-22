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
    <Box className={[styles.pollutionStats, className].join(" ")}>
      <Box className={styles.statsBackground} />
      <Box className={styles.pollutionImage}>
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </Box>
      <Box className={styles.reduceUrbanPollutionWithOuWrapper}>
        <Typography
          className={styles.reduceUrbanPollutionContainer}
          variant="inherit"
          component="h1"
          sx={{ fontWeight: "900" }}
        >
          <Typography
            variant="inherit"
            component="span"
          >{`Reduce Urban Pollution with our `}</Typography>
          <Typography
            className={styles.smartParkingSolution}
            variant="inherit"
            component="span"
          >
            Smart Parking Solution
          </Typography>
        </Typography>
      </Box>
      <Box className={styles.driverImpact}>
        <Box className={styles.inTheUs}>
          In the US alone, drivers looking for parking produce 9.3 million tons
          of carbon emissions per year. Use Scooch to find parking, reduce
          congestion and make our cities greener.
        </Box>
      </Box>
    </Box>
  );
};

export default PollutionStats;
