import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Button } from "@mui/material";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full mt-[-894px] text-left text-base text-white font-h2 ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-between pt-[100px] px-40 pb-[99px] box-border max-w-full gap-5 z-[1] mq900:pl-20 mq900:pr-20 mq900:box-border mq450:pt-[914px] mq450:px-5 mq450:pb-16 mq450:box-border mq1300:flex-wrap">
        <div className="w-[452px] flex flex-col items-start justify-start gap-2.5 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq450:gap-5">
            <div className="flex flex-row items-end justify-start gap-[35px] max-w-full mq450:gap-[17px] mq450:flex-wrap">
              <img
                className="h-[66px] w-[269px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/calque-1-1.svg"
              />
              <div className="flex flex-row items-start justify-start gap-[19px]">
                <img
                  className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/linked-in.svg"
                />
                <img
                  className="h-[34px] w-[34px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className="h-[69px] relative inline-block shrink-0">
              Our app helps you find and reserve parking spots in seconds,
              reducing traffic, saving time, and cutting down on urban pollution
              for a greener city experience.
            </div>
          </div>
          <Button
            className="w-[234px] h-[31px]"
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
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
          <div className="flex flex-col items-end justify-start gap-[30px]">
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
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <img
                className="h-7 w-[109px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/app-store.svg"
              />
              <img
                className="h-7 w-[118px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/google-play.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
