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
    <div
      className={[styles.smartphoneAnimation, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.priceRange}>
        <div className={styles.priceRangeLabel}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-9.svg"
          />
        </div>
        <div className={styles.priceRangeInfo}>PRICE RANGE INFO</div>
      </div>
      <div className={styles.lot}>
        <b className={styles.lotParking}>Lot parking</b>
      </div>
      <div className={styles.residential1}>
        <b className={styles.residentialStreetParkingContainer}>
          <p className={styles.residential}>Residential</p>
          <p className={styles.streetParking}>street parking</p>
        </b>
      </div>
      <div className={styles.garage}>
        <b className={styles.garageParking}>Garage parking</b>
      </div>
      <div className={styles.spotAvailability}>
        <div className={styles.availabilityIcons3}>
          <div className={styles.availabilityIconSet}>
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
          </div>
        </div>
        <div className={styles.availabilityLevels}>
          <div className={styles.highNumberOf}>
            high number of available spots
          </div>
          <div className={styles.busyLot}>busy lot - more than half full</div>
          <div className={styles.noSpotsAvailable}>no spots available</div>
        </div>
      </div>
      <div className={styles.street}>
        <b className={styles.streetParking1}>Street parking</b>
      </div>
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
      <div className={styles.parkingDetails}>
        <div className={styles.detailsBackground} />
        <div className={styles.parkingInfo}>
          <div className={styles.location1}>
            <div className={styles.locationName}>
              <img
                className={styles.locationNameChild}
                loading="lazy"
                alt=""
                src="/group-119.svg"
              />
            </div>
            <div className={styles.address}>
              <div className={styles.street1}>
                <h2 className={styles.lazLot}>LAZ - Lot #22</h2>
              </div>
              <div className={styles.mayfieldRd}>1234 Mayfield Rd</div>
            </div>
          </div>
          <div className={styles.pricing}>
            <div className={styles.hourlyRates1}>
              <div className={styles.rateTable}>
                <b className={styles.hourlyRates}>hourly rates</b>
                <div className={styles.rateCells}>
                  <div className={styles.minFree}>15min = FREE</div>
                </div>
                <div className={styles.rateCells1}>
                  <div className={styles.min100}>30min = $1.00</div>
                </div>
                <div className={styles.rateCells2}>
                  <div className={styles.hr200}>1hr = $2.00</div>
                </div>
                <div className={styles.rateCells3}>
                  <div className={styles.hr350}>2hr = $3.50</div>
                </div>
              </div>
            </div>
            <div className={styles.timer}>
              <div className={styles.timeDisplay}>
                <div className={styles.duration}>
                  <div className={styles.separator}>01 : 30</div>
                  <div className={styles.timeUnits}>
                    <div className={styles.unitLabels}>
                      <div className={styles.hours}>Hours</div>
                      <div className={styles.minutes}>Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parkingButton}>
                <div className={styles.parkHereNow}>PARK HERE NOW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartphoneAnimation;
