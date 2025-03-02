import * as React from "react";
import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";

export type FeatureListType = {
  className?: string;
  findParkingEasily?: string;
  locateTheBestSpotNearYourDest?: string;
  iphone2PlanDeTravail12?: string;
};

const FeatureList: FunctionComponent<FeatureListType> = ({
  className = "",
  findParkingEasily,
  locateTheBestSpotNearYourDest,
  iphone2PlanDeTravail12,
}) => {
  return (
    <div
      className={`w-[456px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border max-w-full text-center text-21xl text-gray font-h2 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit font-black font-[inherit] inline-block max-w-full mq900:text-13xl mq450:text-5xl">
          {findParkingEasily}
        </h1>
      </div>
      <div className="self-stretch h-[461px] relative text-base text-grey-2">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 box-border max-w-full text-center text-sm">
          <div className="flex-1 relative inline-block w-full z-[1] text-center">
            {locateTheBestSpotNearYourDest}
          </div>
        </div>
        <img
          className="absolute top-[15px] left-[0px] w-[456px] h-[446px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={iphone2PlanDeTravail12}
        />
      </div>
    </div>
  );
};

export default FeatureList;
