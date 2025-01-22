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
      <div className={styles.iconList}>
        <div className={styles.iconRow}>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.ecoFriendly}>ECO-FRIENDLY</div>
        </div>
        <div className={styles.iconRow1}>
          <div className={styles.iconRowInner}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-116.svg"
            />
          </div>
          <div className={styles.private1}>private</div>
        </div>
        <div className={styles.iconRow2}>
          <div className={styles.groupContainer}>
            <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
          </div>
          <div className={styles.secure}>secure</div>
        </div>
        <div className={styles.iconRow3}>
          <div className={styles.iconRowChild}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-118.svg"
            />
          </div>
          <div className={styles.fastEasy}>{`fast & easy`}</div>
        </div>
      </div>
      <div className={styles.iconList1}>
        <div className={styles.frameParent}>
          <div className={styles.groupFrame}>
            <img
              className={styles.groupIcon2}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.ecoFriendly1}>ECO-FRIENDLY</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-116.svg"
            />
          </div>
          <div className={styles.private11}>private</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <img className={styles.groupIcon3} alt="" src="/group-1.svg" />
          </div>
          <div className={styles.secure1}>secure</div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-118.svg"
            />
          </div>
          <div className={styles.fastEasy1}>{`fast & easy`}</div>
        </div>
      </div>
      <div className={styles.iconList2}>
        <div className={styles.frameParent2}>
          <div className={styles.groupWrapper1}>
            <img className={styles.groupIcon4} loading="lazy" alt="" />
          </div>
          <div className={styles.ecoFriendly2}>ECO-FRIENDLY</div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper2}>
            <img className={styles.frameChild2} alt="" />
          </div>
          <div className={styles.private12}>private</div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.groupWrapper2}>
            <img className={styles.groupIcon5} alt="" />
          </div>
          <div className={styles.secure2}>secure</div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.frameWrapper3}>
            <img className={styles.frameChild3} loading="lazy" alt="" />
          </div>
          <div className={styles.fastEasy2}>{`fast & easy`}</div>
        </div>
      </div>
      <div className={styles.iconList3}>
        <div className={styles.frameParent6}>
          <div className={styles.groupWrapper3}>
            <img className={styles.groupIcon6} loading="lazy" alt="" />
          </div>
          <div className={styles.ecoFriendly3}>ECO-FRIENDLY</div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.frameWrapper4}>
            <img className={styles.frameChild4} alt="" />
          </div>
          <div className={styles.private13}>private</div>
        </div>
        <div className={styles.frameParent8}>
          <div className={styles.groupWrapper4}>
            <img className={styles.groupIcon7} alt="" />
          </div>
          <div className={styles.secure3}>secure</div>
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.frameWrapper5}>
            <img className={styles.frameChild5} loading="lazy" alt="" />
          </div>
          <div className={styles.fastEasy3}>{`fast & easy`}</div>
        </div>
      </div>
    </div>
  );
};

export default ICONSCROLLANIMATION;
