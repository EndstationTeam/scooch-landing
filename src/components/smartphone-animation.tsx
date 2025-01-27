import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type SmartphoneAnimationType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const SmartphoneAnimation: FunctionComponent<SmartphoneAnimationType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full h-full z-[1] text-center text-xl text-gray font-h2 ${className}`}
      data-property1={property1}
    >
      <div className="absolute top-[547px] left-[873px] w-[162px] flex flex-col items-start justify-start gap-[6.9px] text-left text-base text-white">
        <div className="flex flex-row items-start justify-start py-0 px-[51px]">
          <img
            className="h-[28.1px] w-[60.4px] relative"
            loading="lazy"
            alt=""
            src="/group-9.svg"
          />
        </div>
        <div className="self-stretch relative uppercase font-medium">
          PRICE RANGE INFO
        </div>
      </div>
      <div className="absolute top-[740px] left-[703px] rounded-21xl bg-blue w-[150px] flex flex-row items-start justify-start py-2 pl-4 pr-[15px] box-border whitespace-nowrap">
        <b className="flex-1 relative">Lot parking</b>
      </div>
      <div className="absolute top-[778px] left-[877px] rounded-21xl bg-gold w-[175px] flex flex-row items-start justify-start py-2 pl-4 pr-[15px] box-border">
        <b className="flex-1 relative mq450:text-base">
          <p className="m-0">Residential</p>
          <p className="m-0">street parking</p>
        </b>
      </div>
      <div className="absolute top-[353px] left-[670px] rounded-21xl bg-green w-[189px] flex flex-row items-start justify-start py-2 pl-4 pr-[15px] box-border whitespace-nowrap">
        <b className="flex-1 relative">Garage parking</b>
      </div>
      <div className="absolute top-[462px] left-[667px] w-[332px] flex flex-row items-end justify-start gap-[9px] z-[1] text-left text-base text-white">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <img
              className="w-[17px] h-[17px] relative"
              alt=""
              src="/vector-5.svg"
            />
            <img
              className="w-[17px] h-[17px] relative"
              alt=""
              src="/vector-6.svg"
            />
            <img
              className="w-[17px] h-[17px] relative"
              alt=""
              src="/vector-7.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[23.5px]">
          <div className="self-stretch relative uppercase font-medium">
            high number of available spots
          </div>
          <div className="w-[299px] relative uppercase font-medium inline-block">
            busy lot - more than half full
          </div>
          <div className="w-[185px] relative uppercase font-medium inline-block">
            no spots available
          </div>
        </div>
      </div>
      <div className="absolute top-[393px] left-[857px] rounded-21xl bg-orange w-[178px] flex flex-row items-start justify-start py-2 pl-4 pr-[15px] box-border whitespace-nowrap">
        <b className="flex-1 relative">Street parking</b>
      </div>
      <img
        className="absolute top-[93px] left-[648px] w-[429px] h-[870px] object-cover z-[2]"
        alt=""
        src="/simple-phone-1@2x.png"
      />
      <img
        className="absolute top-[279px] left-[671px] rounded-28xl w-[381px] h-[665px] object-cover z-[3]"
        alt=""
        src="/image-3@2x.png"
      />
      <img
        className="absolute h-[4.55%] w-[1.96%] top-[63.53%] right-[47.17%] bottom-[31.92%] left-[50.87%] max-w-full overflow-hidden max-h-full z-[4]"
        loading="lazy"
        alt=""
        src="/group-10.svg"
      />
      <img
        className="absolute h-[4.55%] w-[1.96%] top-[63.07%] right-[54.82%] bottom-[32.38%] left-[43.22%] max-w-full overflow-hidden max-h-full z-[4]"
        loading="lazy"
        alt=""
        src="/group-11.svg"
      />
      <img
        className="absolute h-[4.55%] w-[1.96%] top-[49.22%] right-[54.7%] bottom-[46.23%] left-[43.34%] max-w-full overflow-hidden max-h-full z-[4]"
        loading="lazy"
        alt=""
        src="/group-12.svg"
      />
      <img
        className="absolute h-[4.55%] w-[1.96%] top-[55.31%] right-[44.33%] bottom-[40.14%] left-[53.71%] max-w-full overflow-hidden max-h-full z-[4]"
        loading="lazy"
        alt=""
        src="/group-13.svg"
      />
      <div className="absolute top-[726px] left-[671px] rounded-27xl w-[381px] h-[218px] overflow-hidden z-[5] text-left text-11xl text-white">
        <div className="absolute top-[124px] left-[0px] rounded-25xl bg-blue w-full h-full" />
        <div className="absolute top-[141px] left-[25px] w-[338px] h-[186px] flex flex-col items-start justify-start gap-[15px] z-[1]">
          <div className="w-[298.9px] flex flex-row items-end justify-start py-0 pl-0 pr-5 box-border gap-[10.2px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.8px]">
              <img
                className="w-[55.7px] h-[56.2px] relative shrink-0"
                loading="lazy"
                alt=""
                src="/group-119.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start shrink-0">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <h2 className="m-0 flex-1 relative text-inherit font-black font-[inherit] shrink-0 mq900:text-5xl mq450:text-lg">
                  LAZ - Lot #22
                </h2>
              </div>
              <div className="w-[136px] relative text-base inline-block shrink-0">
                1234 Mayfield Rd
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-2.5 text-center text-2xs text-gray">
            <div className="rounded-2xs bg-grey flex flex-row items-start justify-start py-[15px] px-4">
              <div className="h-[81px] flex-1 flex flex-col items-end justify-start pt-0 pb-3.5 pl-0 pr-px box-border gap-1">
                <b className="self-stretch relative text-smi uppercase">
                  hourly rates
                </b>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-3.5">
                  <div className="flex-1 relative inline-block min-w-[76px]">
                    15min = FREE
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-[13px]">
                  <div className="flex-1 relative">30min = $1.00</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[21px]">
                  <div className="flex-1 relative">1hr = $2.00</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-5">
                  <div className="flex-1 relative">2hr = $3.50</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2 text-left text-11xl text-white">
              <div className="self-stretch flex-1 rounded-2xs border-white border-[1px] border-solid flex flex-row items-start justify-start py-1 px-[42px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative font-black mq900:text-5xl mq450:text-lg">
                    01 : 30
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0 mt-[-4px] text-xs">
                    <div className="flex flex-row items-start justify-start gap-5 z-[1]">
                      <div className="relative inline-block min-w-[37px]">
                        Hours
                      </div>
                      <div className="relative inline-block min-w-[48px]">
                        Minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xs bg-gray flex flex-row items-start justify-start py-[13.5px] px-[23px] text-base">
                <div className="relative font-black">PARK HERE NOW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartphoneAnimation;
