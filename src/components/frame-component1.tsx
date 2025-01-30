import * as React from "react";
import { FunctionComponent } from "react";
import Marquee from "./marquee";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[171px] pl-0.5 pr-0 box-border gap-[102px] max-w-full text-center text-xl text-white font-h2 mq900:gap-[51px] mq450:gap-[25px] mq1650:flex-wrap ${className}`}
       style={{ zIndex: 10 }}
    >
      <Marquee />
  
    </section>
  );
};

export default FrameComponent1;
