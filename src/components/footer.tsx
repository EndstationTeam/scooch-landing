import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Button } from "@mui/material";
import * as styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.contactDetailsParent}>
          <div className={styles.contactDetails}>
            <div className={styles.socialLinks}>
              <img
                className={styles.calque1Icon}
                loading="lazy"
                alt=""
                src="/calque-1-1.svg"
              />
              <div className={styles.linkedInButton}>
                <img
                  className={styles.linkedInIcon}
                  loading="lazy"
                  alt=""
                  src="/linked-in.svg"
                />
                <img
                  className={styles.linkedInLabels}
                  loading="lazy"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className={styles.ourAppHelps}>
              Our app helps you find and reserve parking spots in seconds,
              reducing traffic, saving time, and cutting down on urban pollution
              for a greener city experience.
            </div>
          </div>
          <Button
            className={styles.website}
            disableElevation
            variant="contained"
            sx={{
              color: "#151818",
              fontSize: "16",
              background: "#fbb031",
              borderRadius: "40px",
              "&:hover": { background: "#fbb031" },
              width: 234,
              height: 31,
            }}
          >
            info@scooch.com
          </Button>
        </div>
        <div className={styles.downloadOptionsWrapper}>
          <div className={styles.downloadOptions}>
            <Button
              disableElevation
              variant="contained"
              sx={{
                color: "#151818",
                fontSize: "16",
                background: "#fbb031",
                borderRadius: "40px",
                "&:hover": { background: "#fbb031" },
                width: 240,
                height: 58,
              }}
            >
              DOWNLOAD the APP
            </Button>
            <div className={styles.storeButtons}>
              <img
                className={styles.appStoreIcon}
                loading="lazy"
                alt=""
                src="/app-store-1.svg"
              />
              <img
                className={styles.googlePlayIcon}
                loading="lazy"
                alt=""
                src="/google-play-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
