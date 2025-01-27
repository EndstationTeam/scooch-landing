import * as React from "react";
import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import SmartphoneAnimation from "./smartphone-animation";

export type AnimationWrapperType = {
  className?: string;
};

const AnimationWrapper: FunctionComponent<AnimationWrapperType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[2px] w-full h-[1083px] text-center text-xl text-gray font-h2 ${className}`}
    >
      <SmartphoneAnimation property1="Default" />
      <div className="absolute top-[61px] left-[659px] text-sm uppercase font-medium text-white inline-block w-[408px] h-[17px] z-[6]">
        CLICK on smartphone TO SEE FEATURES
      </div>
    </div>
  );
};

export default AnimationWrapper;
