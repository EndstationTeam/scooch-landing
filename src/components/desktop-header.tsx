import * as React from "react";
import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const DesktopHeader: FunctionComponent = () => {
  return (
    <header
      className="
        self-stretch
        flex flex-row items-center justify-between
        py-0 pl-0 pr-px box-border
        max-w-full
        text-left text-base text-white font-h2
        bg-gray
      "
    >
      <div
        className="
          flex-1
          flex flex-row items-center justify-between
          pt-[31px] px-40 pb-[31px] box-border
          max-w-full
          gap-5
          z-[1]
          mq900:pl-20 mq900:pr-20 mq900:box-border
          mq450:px-5 mq450:box-border
        "
      >
        {/* Logo */}
        <div className="flex flex-col items-center justify-start">
          <img
            className="h-10 relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt="Logo"
            src="/calque-1.svg"
          />
          <span className="
            text-cyan-400 
            text-sm 
            mt-1 
            font-light 
            relative 
            left-[60%]
            -mt-6
          ">
            an Endstation AI solution
          </span>
        </div>


        {/* Button */}
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
          }}
          href="https://scooch.cc"
        >
          CHECK OUT THE APP
        </Button>
      </div>
    </header>
  );
};

export default DesktopHeader;