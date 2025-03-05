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
      className={`self-stretch flex flex-col items-center justify-center pt-0 pb-5 px-5 box-border max-w-full text-center text-53xl text-white font-h2 ${className}`}
      style={{ zIndex: 10 }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-10 max-w-full mq900:gap-5">
        <div className="w-full flex flex-col items-center justify-center max-w-full">
          <div className="w-full flex flex-col items-center justify-center py-0 px-4 box-border max-w-full">
            <h1 className="m-0 relative text-inherit font-black font-[inherit] text-center max-w-full mq900:text-39xl mq450:text-24xl">
              Parking just got simpler
            </h1>
          </div>
          <h1 className="m-0 w-full relative text-21xl font-black font-[inherit] text-orange text-center mq900:text-13xl mq450:text-5xl">
            Ready to park smarter? Get started with Scooch today
          </h1>
        </div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 py-2">
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
            CHECK OUT THE APP
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
