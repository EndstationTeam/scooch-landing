import { Button, Typography } from "@mui/material";
import React from "react";

const MobileLayout = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* iPhones */}
      <div className="relative w-full max-w-[830px] h-[795px]">
        <img
          className="absolute top-[85px] left-0 w-[623px] h-[710px] object-contain"
          alt="iPhone 1"
          src="/iphoneplandetravail1@2x.png"
        />
        <img
          className="absolute top-[60px] left-[311px] w-[532px] h-[689px] object-contain z-[1]"
          alt="iPhone 2"
          src="/iphoneplandetravail1copie@2x.png"
        />
      </div>

      {/* Text and Button */}
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-6xl font-black text-white">
          Park Anywhere
        </h1>
        <h2 className="text-5xl font-medium text-orange">
          With the only parking app you’ll ever need
        </h2>
        <Button
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
          variant="body2"
          sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "16px" }}
        >
          Coming Soon On
        </Typography>
        <div className="flex gap-5">
          <img
            className="w-[109px] h-7"
            alt="App Store"
            src="/app-store.svg"
          />
          <img
            className="w-[118px] h-7"
            alt="Google Play"
            src="/google-play.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;