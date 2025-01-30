import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import FeatureList from "./feature-list";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
 
    <section 
      className={`relative  mx-auto flex flex-col items-start justify-start pt-0 pb-40 px-0 w-full max-w-screen-xl text-left text-53xl text-white font-h2 ${className}`}>
      <div className= "flex-1 w-full [background:radial-gradient(50%_50%_at_50%_50%,_rgba(71,_45,_0,_0.82),_rgba(25,_28,_28,_0))] flex flex-col items-start justify-start gap-[75px] mq900:gap-[37px] mq450:gap-[19px]">
        <div className="self-stretch h-[1734px] relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(71,_45,_0,_0.82),_rgba(25,_28,_28,_0))] hidden" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[175px] max-w-full mq900:gap-11 mq450:gap-[22px] mq1300:gap-[87px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
              <div className="h-[650px] flex-1 relative max-w-full">
                <h1 className="
                        m-0 
                        absolute top-[224px] left-[0px] 
                        text-inherit          
                        font-black 
                        font-[inherit]
                        inline-block 
                        w-[559px] 
                        h-[86px] 
                        z-[1]
                        text-6xl   /* for larger screens */
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                      ">
                  Park Anywhere
                </h1>
                <h2 className="m-0 absolute top-[400px] left-[0px] text-11xl font-medium font-[inherit] text-orange inline-block w-[700px] h-9 z-[1] mq900:text-5xl mq450:text-lg">
                  With the only parking app you’ll ever need
                </h2>
                <Button
                  className="absolute top-[428px] left-[0px]"
                  disableElevation
                  variant="contained"
                  sx={{
                  color: "#151818",
                  fontSize: "16",
                  fontWeight: "bold",
                  background: "#fbb031",
                  borderRadius: "40px",
                  "&:hover": { background: "#fbb031" },
                  width: 247,
                  height: 58,
                  }}
                  href="https://scooch.cc"
                >
                  SAY NO TO NEW APPS
                </Button>
                <Typography
                  className="absolute top-[465px] left-[325px]"
                  variant="body2"
                  sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "16px" }}
                >
                  Coming Soon On
                </Typography>
                <img
                  className="absolute top-[510px] left-[277px] w-[109px] h-7 overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/app-store.svg"
                />
                <img
                  className="absolute top-[510px] left-[416px] w-[118px] h-7 overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/google-play.svg"
                />
                <div className="absolute h-full top-[0px] bottom-[0px] left-[577px] w-[830px] flex flex-row items-start justify-start z-[2]">
                  <div className="h-[795.1px] w-[843.2px] absolute !m-[0] right-[-13.2px] bottom-[-83.1px]">
                    <img
                      className="absolute top-[85.1px] left-[0px] w-[623.1px] h-[710px] object-contain"
                      alt=""
                      src="/iphoneplandetravail1@2x.png"
                    />
                    <img
                      className="absolute top-[60px] left-[311.3px] w-[531.9px] h-[688.8px] object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/iphoneplandetravail1copie@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-10 max-w-full text-center text-21xl mq900:gap-5">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
                <div className="w-[772px] flex flex-col items-start justify-start gap-2.5 max-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit font-black font-[inherit] z-[1] mq900:text-13xl mq450:text-5xl">
                    <p className="m-0">Tired of dealing with a new app</p>
                    <p className="m-0">
                      <span className="text-blue">every time</span>
                      <span> you park somewhere new?</span>
                    </p>
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[200px] pr-[150px] box-border max-w-full text-left text-base mq900:pl-[108px] mq900:pr-[108px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 relative inline-block w-full z-[1]">
                      Scooch lets you pay for parking anywhere
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[477px] pr-px box-border gap-[19px] max-w-full z-[1] text-gray mq900:pl-[119px] mq900:box-border mq450:pl-5 mq450:box-border mq1300:pl-[238px] mq1300:box-border mq1650:flex-wrap mq1650:justify-center"> */}
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border gap-5 max-w-full z-[1] text-gray mq900:px-5 mq450:px-5 mq1300:px-5 mq1650:flex-wrap mq1650:justify-center">
                <FeatureList
                  findParkingEasily="Save time"
                  locateTheBestSpotNearYourDest="Skip downloads, sign ups, and filling out forms"
                  iphone2PlanDeTravail12="/iphone2plandetravail1-2@2x.png"
                />
                <FeatureList
                  findParkingEasily="Find parking easily"
                  locateTheBestSpotNearYourDest="Locate the best spot near your destination"
                  iphone2PlanDeTravail12="/iphone2plandetravail1-2-1@2x.png"
                />
                <FeatureList
                  findParkingEasily="Avoid Tickets"
                  locateTheBestSpotNearYourDest="Get reminders before time runs out."
                  iphone2PlanDeTravail12="/iphone2plandetravail1-2-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    
  );
};

export default FrameComponent;
