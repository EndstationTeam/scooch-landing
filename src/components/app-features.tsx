import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";

export type AppFeaturesType = {
  className?: string;
};

const AppFeatures: FunctionComponent<AppFeaturesType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[361px] left-[1px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(138,_87,_0,_0.6),_rgba(25,_28,_28,_0))] w-full flex flex-row items-start justify-center pt-[789px] px-[159px] pb-[212px] box-border gap-5 max-w-full text-left text-base text-blue font-h2 mq900:pl-[79px] mq900:pr-[79px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1650:flex-wrap ${className}`}
    >
      <div className="h-[1485px] w-[1727px] relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(138,_87,_0,_0.6),_rgba(25,_28,_28,_0))] hidden max-w-full" />
      <div className="flex-[0.928] rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start py-[113.5px] pl-[50px] pr-0 box-border gap-1.5 min-w-[451px] max-w-full z-[1] mq900:flex-wrap mq900:pl-5 mq900:pr-5 mq900:box-border mq900:min-w-full mq1650:flex-1">
        <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[263px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq450:gap-5">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="w-[315px] flex flex-col items-start justify-start">
                <div className="self-stretch relative uppercase font-medium">
                  Available on the app
                </div>
                <h1 className="m-0 self-stretch h-[38px] relative text-21xl font-black font-[inherit] text-gray inline-block shrink-0 mq900:text-13xl mq450:text-5xl">
                  AI Valet
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full text-gray">
                <div className="flex-1 flex flex-row items-start justify-start gap-3 max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <img
                      className="w-6 h-6 relative"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 relative inline-block min-w-[237px] max-w-full">
                    <p className="m-0">Our AI agent works behind the scenes</p>
                    <p className="m-0">
                      to find you spots and pay for parking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              disableElevation
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "16",
                background: "#151818",
                borderRadius: "30px",
                "&:hover": { background: "#151818" },
                width: 240,
                height: 58,
              }}
            >
              DOWNLOAD the APP
            </Button>
          </div>
        </div>
        <div className="h-[257px] w-[234px] flex flex-col items-start justify-start relative min-w-[234px] mq900:flex-1">
          <img
            className="w-[280px] h-[319px] absolute !m-[0] top-[-117.5px] left-[-115px] object-contain"
            loading="lazy"
            alt=""
            src="/iphoneplandetravail1-1@2x.png"
          />
          <img
            className="w-[476.1px] h-[568.6px] absolute !m-[0] right-[-121.1px] bottom-[-234.1px] rounded-192xl object-contain z-[1]"
            alt=""
            src="/iphoneplandetravail1copie-1@2x.png"
          />
        </div>
      </div>
      <div className="h-[484px] flex-1 relative rounded-xl bg-white overflow-hidden min-w-[451px] max-w-full z-[1] text-gray mq900:min-w-full mq1650:flex-1">
        <h1 className="m-0 absolute top-[123.5px] left-[50px] text-21xl font-black font-[inherit] inline-block w-[316px] h-[38px] mq900:text-13xl mq450:text-5xl">
          En route
        </h1>
        <div className="absolute top-[211.5px] left-[92px] inline-block w-[393px] h-[19px]">
          Find the best spot by your destination.
        </div>
        <div className="absolute top-[291.5px] left-[92px] inline-block w-[393px] h-[19px]">
          Can the parking sign to pay.
        </div>
        <div className="absolute top-[321.5px] left-[90px] inline-block w-[393px] h-[38px]">
          Loyalty accounts are created and managed on your behalf You just reap
          the rewards.
        </div>
        <div className="absolute top-[113.5px] left-[50px] w-[656px] h-[257px]">
          <img
            className="absolute top-[96px] left-[5px] w-6 h-6"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="absolute top-[137px] left-[0px] w-[499px] h-10">
            <div className="absolute top-[1px] left-[42px] inline-block w-[393px] h-[19px] z-[1]">
              Scan your car to add it.
            </div>
            <img
              className="absolute top-[-1px] left-[5px] w-6 h-6 z-[1]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <img
            className="absolute top-[176px] left-[5px] w-6 h-6 z-[1]"
            alt=""
            src="/vector-1.svg"
          />
          <img
            className="absolute top-[216px] left-[5px] w-6 h-6"
            alt=""
            src="/vector-1.svg"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[422px] max-h-full w-[234px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/frame-65@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
