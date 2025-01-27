import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type PollutionStatsType = {
  className?: string;
};

const PollutionStats: FunctionComponent<PollutionStatsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[934px] box-border relative max-w-full text-center text-21xl text-white font-h2 mq900:pb-[395px] mq900:box-border mq1300:pb-[607px] mq1300:box-border ${className}`}
    >
      <div className="w-full h-[1485px] absolute !m-[0] right-[-1727px] bottom-[-1745px] left-[1727px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(138,_87,_0,_0.6),_rgba(25,_28,_28,_0))] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      <div className="self-stretch h-[147px] relative z-[2]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[1238px] max-h-full w-[147px] object-cover"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className="w-[1699px] flex flex-row items-start justify-start py-0 px-[511px] box-border max-w-full mq900:pl-[127px] mq900:pr-[127px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:pl-[255px] mq1300:pr-[255px] mq1300:box-border">
        <h1 className="m-0 h-[106px] relative text-inherit font-black font-[inherit] inline-block z-[1] mq900:text-13xl mq450:text-5xl">
          <span>{`Reduce Urban Pollution with our `}</span>
          <span className="text-orange">Smart Parking Solution</span>
        </h1>
      </div>
      <div className="w-[1699px] flex flex-row items-start justify-start py-0 pl-[461px] pr-[460px] box-border max-w-full text-base mq900:pl-[115px] mq900:pr-[115px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:pl-[230px] mq1300:pr-[230px] mq1300:box-border">
        <div className="flex-1 relative inline-block max-w-full z-[2]">
          In the US alone, drivers looking for parking produce 9.3 million tons
          of carbon emissions per year. Use Scooch to find parking, reduce
          congestion and make our cities greener.
        </div>
      </div>
    </div>
  );
};

export default PollutionStats;
