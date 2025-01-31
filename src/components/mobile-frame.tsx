import * as React from "react";
import { FunctionComponent } from "react";
import { Button, Typography } from "@mui/material";
import FeatureList from "./feature-list";

export type MobileFrameType = {
  className?: string;
};

const MobileFrame: FunctionComponent<MobileFrameType> = ({
  className = "",
}) => {
  return (
    <section
      className={`relative mx-auto flex flex-col items-center justify-center pt-0 pb-40 w-full max-w-screen-xl text-left text-white ${className}`}
    >
      <div className="flex-1 w-full [background:radial-gradient(50%_50%_at_50%_50%,_rgba(71,_45,_0,_0.82),_rgba(25,_28,_28,_0))] flex flex-col items-center justify-start gap-[50px] mq900:gap-[25px] mq450:gap-[15px]">
        {/* iPhones */}
    
        {/* Container for both iPhones */}
        <div className="relative w-[600px] h-[400px]">
            <img
            className="absolute top-[50px] left-[50px] w-[350px] h-[400px] object-contain"
            alt="iPhone 1"
            src="/iphoneplandetravail1@2x.png"
            />
            <img
            className="absolute top-[30px] left-[200px] w-[300px] h-[380px] object-contain z-[1]"
            alt="iPhone 2"
            src="/iphoneplandetravail1copie@2x.png"
            />
        </div>
        

        {/* Text and Call to Action */}
        <div className="flex flex-col items-center justify-center gap-5 w-full text-center mb-13">
          <h1 className="text-[3rem] font-black">
            Park Anywhere
          </h1>
          <h2 className="m-0 text-2xl font-medium text-orange font-h2 sm:text-3xl md:text-4xl">
            With the only parking app you’ll ever need
          </h2>
          <Button
            disableElevation
            variant="contained"
            sx={{
              color: "#151818",
              fontSize: "14px",
              fontWeight: "bold",
              background: "#fbb031",
              borderRadius: "40px",
              "&:hover": { background: "#fbb031" },
              width: 200,
              height: 50,
            }}
            href="https://scooch.cc"
          >
            SAY NO TO NEW APPS
          </Button>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "14px" }}
          >
            Coming Soon On
          </Typography>
          <div className="flex gap-5">
            <img
              className="w-[90px] h-6"
              alt="App Store"
              src="/app-store.svg"
            />
            <img
              className="w-[100px] h-6"
              alt="Google Play"
              src="/google-play.svg"
            />
          </div>
        </div>

        {/* Feature List */}
        <div className="self-stretch flex flex-col items-center justify-start gap-10 max-w-full text-center text-lg mq900:gap-5">
          <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
            <div className="w-full flex flex-col items-center justify-start gap-2.5 max-w-[400px]">
              <h1 className="m-0 self-stretch relative text-2xl font-black sm:text-3xl md:text-4xl">
                <p className="m-0">Tired of dealing with a new app</p>
                <p className="m-0">
                  <span className="text-blue">every time</span>
                  <span> you park somewhere new?</span>
                </p>
              </h1>
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 box-border max-w-full text-center text-sm">
                <div className="flex-1 relative inline-block w-full z-[1]">
                  Scooch lets you pay for parking anywhere
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-5 max-w-full z-[1] text-gray">
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
    </section>
  );
};

export default MobileFrame;