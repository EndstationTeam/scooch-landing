import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import * as styles from "./smartphone-animation.module.css";

export type SmartphoneAnimationType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const SmartphoneAnimation: FunctionComponent<SmartphoneAnimationType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <Box
      className={[styles.smartphoneAnimation, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.priceRange}>
        <Box className={styles.priceRangeLabel}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-9.svg"
          />
        </Box>
        <Box className={styles.priceRangeInfo}>PRICE RANGE INFO</Box>
      </Box>
      <Box className={styles.lot}>
        <Typography
          className={styles.lotParking}
          variant="inherit"
          component="b"
          sx={{ fontWeight: "700" }}
        >
          Lot parking
        </Typography>
      </Box>
      <Box className={styles.residential1}>
        <Typography
          className={styles.residentialStreetParkingContainer}
          variant="inherit"
          component="b"
          sx={{ fontWeight: "700" }}
        >
          <Typography className={styles.residential} variant="inherit">
            Residential
          </Typography>
          <Typography className={styles.streetParking} variant="inherit">
            street parking
          </Typography>
        </Typography>
      </Box>
      <Box className={styles.garage}>
        <Typography
          className={styles.garageParking}
          variant="inherit"
          component="b"
          sx={{ fontWeight: "700" }}
        >
          Garage parking
        </Typography>
      </Box>
      <Box className={styles.spotAvailability}>
        <Box className={styles.availabilityIcons3}>
          <Box className={styles.availabilityIconSet}>
            <img
              className={styles.availabilityIcons}
              alt=""
              src="/vector-5.svg"
            />
            <img
              className={styles.availabilityIcons1}
              alt=""
              src="/vector-6.svg"
            />
            <img
              className={styles.availabilityIcons2}
              alt=""
              src="/vector-7.svg"
            />
          </Box>
        </Box>
        <Box className={styles.availabilityLevels}>
          <Box className={styles.highNumberOf}>
            high number of available spots
          </Box>
          <Box className={styles.busyLot}>busy lot - more than half full</Box>
          <Box className={styles.noSpotsAvailable}>no spots available</Box>
        </Box>
      </Box>
      <Box className={styles.street}>
        <Typography
          className={styles.streetParking1}
          variant="inherit"
          component="b"
          sx={{ fontWeight: "700" }}
        >
          Street parking
        </Typography>
      </Box>
      <img
        className={styles.simplePhone1}
        alt=""
        src="/simple-phone-1@2x.png"
      />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <img
        className={styles.groupIcon1}
        loading="lazy"
        alt=""
        src="/group-10.svg"
      />
      <img
        className={styles.groupIcon2}
        loading="lazy"
        alt=""
        src="/group-11.svg"
      />
      <img
        className={styles.groupIcon3}
        loading="lazy"
        alt=""
        src="/group-12.svg"
      />
      <img
        className={styles.groupIcon4}
        loading="lazy"
        alt=""
        src="/group-13.svg"
      />
      <Box className={styles.parkingDetails}>
        <Box className={styles.detailsBackground} />
        <Box className={styles.parkingInfo}>
          <Box className={styles.location1}>
            <Box className={styles.locationName}>
              <img
                className={styles.locationNameChild}
                loading="lazy"
                alt=""
                src="/group-119.svg"
              />
            </Box>
            <Box className={styles.address}>
              <Box className={styles.street1}>
                <Typography
                  className={styles.lazLot}
                  variant="inherit"
                  component="h2"
                  sx={{ fontWeight: "900" }}
                >
                  LAZ - Lot #22
                </Typography>
              </Box>
              <Box className={styles.mayfieldRd}>1234 Mayfield Rd</Box>
            </Box>
          </Box>
          <Box className={styles.pricing}>
            <Box className={styles.hourlyRates1}>
              <Box className={styles.rateTable}>
                <Typography
                  className={styles.hourlyRates}
                  variant="inherit"
                  component="b"
                  sx={{ fontSize: "var(--font-size-smi)", fontWeight: "700" }}
                >
                  hourly rates
                </Typography>
                <Box className={styles.rateCells}>
                  <Box className={styles.minFree}>15min = FREE</Box>
                </Box>
                <Box className={styles.rateCells1}>
                  <Box className={styles.min100}>30min = $1.00</Box>
                </Box>
                <Box className={styles.rateCells2}>
                  <Box className={styles.hr200}>1hr = $2.00</Box>
                </Box>
                <Box className={styles.rateCells3}>
                  <Box className={styles.hr350}>2hr = $3.50</Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.timer}>
              <Box className={styles.timeDisplay}>
                <Box className={styles.duration}>
                  <Box className={styles.separator}>01 : 30</Box>
                  <Box className={styles.timeUnits}>
                    <Box className={styles.unitLabels}>
                      <Box className={styles.hours}>Hours</Box>
                      <Box className={styles.minutes}>Minutes</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.parkingButton}>
                <Box className={styles.parkHereNow}>PARK HERE NOW</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmartphoneAnimation;
