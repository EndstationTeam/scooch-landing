import * as React from "react";
import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Header: FunctionComponent = () => {
  return (
    <header
      // 1) Mimic the footer's outer classes
      className="
        self-stretch
        flex flex-row items-start justify-end
        py-0 pl-0 pr-px box-border
        max-w-full
        text-left text-base text-white font-h2
      "
    >
      {/* 2) Inside, have a flex-1 container with big px-40 padding, just like footer */}
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
          mq1300:flex-wrap
        "
      >
        {/* Left side: your logo or brand */}
        <div className="flex flex-col items-start justify-start">
          <img
            className="h-10 relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt="Logo"
            src="/calque-1.svg"
          />
        </div>

        {/* Right side: the download button */}
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
          CHECKOUT THE APP
        </Button>
      </div>
    </header>
  );
};

export default Header;
