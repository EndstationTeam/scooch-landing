import * as React from "react";
import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import * as styles from "./i-c-o-n-s-c-r-o-l-l-a-n-i-m-a-t-i-o-n.module.css";

export type ICONSCROLLANIMATIONType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ICONSCROLLANIMATION: FunctionComponent<ICONSCROLLANIMATIONType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.iconScrollAnimation, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.iconList}>
        <Box className={styles.iconRow}>
          <Box className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </Box>
          <Box className={styles.ecoFriendly}>ECO-FRIENDLY</Box>
        </Box>
        <Box className={styles.iconRow1}>
          <Box className={styles.iconRowInner}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-116.svg"
            />
          </Box>
          <Box className={styles.private1}>private</Box>
        </Box>
        <Box className={styles.iconRow2}>
          <Box className={styles.groupContainer}>
            <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
          </Box>
          <Box className={styles.secure}>secure</Box>
        </Box>
        <Box className={styles.iconRow3}>
          <Box className={styles.iconRowChild}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-118.svg"
            />
          </Box>
          <Box className={styles.fastEasy}>{`fast & easy`}</Box>
        </Box>
      </Box>
      <Box className={styles.iconList1}>
        <Box className={styles.frameParent}>
          <Box className={styles.groupFrame}>
            <img
              className={styles.groupIcon2}
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
          </Box>
          <Box className={styles.ecoFriendly1}>ECO-FRIENDLY</Box>
        </Box>
        <Box className={styles.frameGroup}>
          <Box className={styles.frameWrapper}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-116-1.svg"
            />
          </Box>
          <Box className={styles.private11}>private</Box>
        </Box>
        <Box className={styles.frameContainer}>
          <Box className={styles.frameBox}>
            <img className={styles.groupIcon3} alt="" src="/group-3.svg" />
          </Box>
          <Box className={styles.secure1}>secure</Box>
        </Box>
        <Box className={styles.frameParent1}>
          <Box className={styles.frameWrapper1}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-118-1.svg"
            />
          </Box>
          <Box className={styles.fastEasy1}>{`fast & easy`}</Box>
        </Box>
      </Box>
      <Box className={styles.iconList2}>
        <Box className={styles.frameParent2}>
          <Box className={styles.groupWrapper1}>
            <img
              className={styles.groupIcon4}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </Box>
          <Box className={styles.ecoFriendly2}>ECO-FRIENDLY</Box>
        </Box>
        <Box className={styles.frameParent3}>
          <Box className={styles.frameWrapper2}>
            <img className={styles.frameChild2} alt="" src="/group-116-2.svg" />
          </Box>
          <Box className={styles.private12}>private</Box>
        </Box>
        <Box className={styles.frameParent4}>
          <Box className={styles.groupWrapper2}>
            <img className={styles.groupIcon5} alt="" src="/group-5.svg" />
          </Box>
          <Box className={styles.secure2}>secure</Box>
        </Box>
        <Box className={styles.frameParent5}>
          <Box className={styles.frameWrapper3}>
            <img
              className={styles.frameChild3}
              loading="lazy"
              alt=""
              src="/group-118-2.svg"
            />
          </Box>
          <Box className={styles.fastEasy2}>{`fast & easy`}</Box>
        </Box>
      </Box>
      <Box className={styles.iconList3}>
        <Box className={styles.frameParent6}>
          <Box className={styles.groupWrapper3}>
            <img
              className={styles.groupIcon6}
              loading="lazy"
              alt=""
              src="/group-6.svg"
            />
          </Box>
          <Box className={styles.ecoFriendly3}>ECO-FRIENDLY</Box>
        </Box>
        <Box className={styles.frameParent7}>
          <Box className={styles.frameWrapper4}>
            <img className={styles.frameChild4} alt="" src="/group-116-3.svg" />
          </Box>
          <Box className={styles.private13}>private</Box>
        </Box>
        <Box className={styles.frameParent8}>
          <Box className={styles.groupWrapper4}>
            <img className={styles.groupIcon7} alt="" src="/group-7.svg" />
          </Box>
          <Box className={styles.secure3}>secure</Box>
        </Box>
        <Box className={styles.frameParent9}>
          <Box className={styles.frameWrapper5}>
            <img
              className={styles.frameChild5}
              loading="lazy"
              alt=""
              src="/group-118-3.svg"
            />
          </Box>
          <Box className={styles.fastEasy3}>{`fast & easy`}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default ICONSCROLLANIMATION;
