import * as React from "react";
import { FunctionComponent } from "react";
import { Box } from "@mui/material";

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
      className={`h-44 w-[1726px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-0 box-border z-[2] text-center text-xl text-white font-h2 ${className}`}
      data-property1={property1}
    >
      <div className="h-44 w-[872px] flex flex-row items-start justify-start shrink-0">
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21px]">
          <div className="w-[117px] h-[61px] flex flex-row items-start justify-end py-0 pl-0 pr-[58px] box-border z-[2]">
            <img
              className="h-[61px] w-[59px] relative"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            ECO-FRIENDLY
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21.3px]">
          <div className="w-[106px] h-[60.7px] flex flex-row items-start justify-end py-0 pl-0 pr-[51.2px] box-border z-[2]">
            <img
              className="h-[60.7px] w-[54.8px] relative"
              loading="lazy"
              alt=""
              src="/group-116.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            private
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[45px] px-[21px] pb-[27px] box-border gap-[22.1px]">
          <div className="w-[115px] h-[57.9px] flex flex-row items-start justify-start py-0 pl-[61px] pr-0 box-border z-[2]">
            <img
              className="h-[57.9px] w-[54px] relative"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            secure
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[39px] px-[21px] pb-[31px] box-border gap-[20.7px]">
          <div className="w-[105px] h-[61.3px] flex flex-row items-start justify-start py-0 pl-[34px] pr-0 box-border">
            <img
              className="h-[61.3px] w-[71px] relative"
              loading="lazy"
              alt=""
              src="/group-118.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0">{`fast & easy`}</div>
        </div>
      </div>
      <div className="h-44 w-[872px] flex flex-row items-start justify-start shrink-0 z-[3]">
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21px]">
          <div className="w-[117px] h-[61px] flex flex-row items-start justify-end py-0 pl-0 pr-[58px] box-border z-[2]">
            <img
              className="h-[61px] w-[59px] relative"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            ECO-FRIENDLY
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21.3px]">
          <div className="w-[106px] h-[60.7px] flex flex-row items-start justify-end py-0 pl-0 pr-[51.2px] box-border z-[2]">
            <img
              className="h-[60.7px] w-[54.8px] relative"
              loading="lazy"
              alt=""
              src="/group-116.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            private
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[45px] px-[21px] pb-[27px] box-border gap-[22.1px]">
          <div className="w-[115px] h-[57.9px] flex flex-row items-start justify-start py-0 pl-[61px] pr-0 box-border z-[2]">
            <img
              className="h-[57.9px] w-[54px] relative"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            secure
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[39px] px-[21px] pb-[31px] box-border gap-[20.7px]">
          <div className="w-[105px] h-[61.3px] flex flex-row items-start justify-start py-0 pl-[34px] pr-0 box-border">
            <img
              className="h-[61.3px] w-[71px] relative"
              loading="lazy"
              alt=""
              src="/group-118.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0">{`fast & easy`}</div>
        </div>
      </div>
      <div className="h-44 w-[872px] flex flex-row items-start justify-start shrink-0 z-[2]">
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21px]">
          <div className="w-[117px] h-[61px] flex flex-row items-start justify-end py-0 pl-0 pr-[58px] box-border z-[2]">
            <img
              className="h-[61px] w-[59px] relative"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            ECO-FRIENDLY
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21.3px]">
          <div className="w-[106px] h-[60.7px] flex flex-row items-start justify-end py-0 pl-0 pr-[51.2px] box-border z-[2]">
            <img
              className="h-[60.7px] w-[54.8px] relative"
              alt=""
              src="/group-116.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            private
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[45px] px-[21px] pb-[27px] box-border gap-[22.1px]">
          <div className="w-[115px] h-[57.9px] flex flex-row items-start justify-start py-0 pl-[61px] pr-0 box-border z-[2]">
            <img
              className="h-[57.9px] w-[54px] relative"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            secure
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[39px] px-[21px] pb-[31px] box-border gap-[20.7px]">
          <div className="w-[105px] h-[61.3px] flex flex-row items-start justify-start py-0 pl-[34px] pr-0 box-border">
            <img
              className="h-[61.3px] w-[71px] relative"
              loading="lazy"
              alt=""
              src="/group-118.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0">{`fast & easy`}</div>
        </div>
      </div>
      <div className="h-44 w-[872px] flex flex-row items-start justify-start shrink-0">
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21px]">
          <div className="w-[117px] h-[61px] flex flex-row items-start justify-end py-0 pl-0 pr-[58px] box-border z-[2]">
            <img
              className="h-[61px] w-[59px] relative"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            ECO-FRIENDLY
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-end justify-start pt-[43px] px-[21px] pb-[27px] box-border gap-[21.3px]">
          <div className="w-[106px] h-[60.7px] flex flex-row items-start justify-end py-0 pl-0 pr-[51.2px] box-border z-[2]">
            <img
              className="h-[60.7px] w-[54.8px] relative"
              alt=""
              src="/group-116.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            private
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[45px] px-[21px] pb-[27px] box-border gap-[22.1px]">
          <div className="w-[115px] h-[57.9px] flex flex-row items-start justify-start py-0 pl-[61px] pr-0 box-border z-[2]">
            <img
              className="h-[57.9px] w-[54px] relative"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0 z-[1]">
            secure
          </div>
        </div>
        <div className="h-44 w-[218px] flex flex-col items-start justify-start pt-[39px] px-[21px] pb-[31px] box-border gap-[20.7px]">
          <div className="w-[105px] h-[61.3px] flex flex-row items-start justify-start py-0 pl-[34px] pr-0 box-border">
            <img
              className="h-[61.3px] w-[71px] relative"
              loading="lazy"
              alt=""
              src="/group-118.svg"
            />
          </div>
          <div className="w-[177px] h-6 relative uppercase font-black inline-block shrink-0">{`fast & easy`}</div>
        </div>
      </div>
    </div>
  );
};

export default ICONSCROLLANIMATION;
