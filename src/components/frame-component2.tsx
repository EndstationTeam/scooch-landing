import * as React from "react";
import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-center justify-center pt-0 pb-5 pl-[23px] pr-5 box-border max-w-full text-center text-53xl text-white font-h2 ${className}`}
      style={{ zIndex: 10 }}
    >
      <div className="flex flex-col items-center justify-center gap-10 max-w-full mq900:gap-5">
        <div className="self-stretch flex flex-col items-center justify-center max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-[226px] box-border max-w-full mq900:pl-14 mq900:pr-14 mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:pl-[113px] mq1300:pr-[113px] mq1300:box-border">
            <h1 className="m-0 flex-1 relative text-inherit font-black font-[inherit] inline-block max-w-full mq900:text-39xl mq450:text-24xl">
              Parking just got simpler.
            </h1>
          </div>
          <h1 className="m-0 self-stretch relative text-21xl font-black font-[inherit] text-orange mq900:text-13xl mq450:text-5xl">
            Ready to park smarter? Get started with Scooch today.
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center py-0 pl-[553px] pr-[555px] mq900:pl-[138px] mq900:pr-[138px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:pl-[276px] mq1300:pr-[277px] mq1300:box-border">
            <Button
            disableElevation
            variant="contained"
            sx={{
              color: "#151818",
              fontSize: "16",
              fontWeight: "bold",
              background: "#fbb031",
              borderRadius: "40px",
              "&:hover": { background: "#fbb031" },
              width: 240,
              height: 58,
            }}
            href="https://scooch.cc"
            >
            CHECKOUT the APP
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
