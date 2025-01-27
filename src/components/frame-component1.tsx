import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import ICONSCROLLANIMATION from "./i-c-o-n-s-c-r-o-l-l-a-n-i-m-a-t-i-o-n";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[171px] pl-0.5 pr-0 box-border gap-[102px] max-w-full text-center text-xl text-white font-h2 mq900:gap-[51px] mq450:gap-[25px] mq1650:flex-wrap ${className}`}
    >
      <ICONSCROLLANIMATION property1="Default" />
      <div className="flex flex-col items-start justify-start pt-[33px] px-0 pb-0 text-3xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6.1px] shrink-0">
          <div className="flex flex-row items-start justify-start py-0 px-[61px]">
            <img
              className="h-[57.9px] w-[54px] relative shrink-0"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <h3 className="m-0 self-stretch relative text-inherit uppercase font-black font-[inherit] shrink-0 mq450:text-lg">
            avoid scam
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
