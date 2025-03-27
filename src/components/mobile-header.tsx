import * as React from "react";
import { FunctionComponent } from "react";

const MobileHeader: FunctionComponent = () => {
  return (
    <header
      className="
        self-stretch
        flex flex-col items-center justify-center
        py-0 pl-0 pr-px box-border
        max-w-full
        text-left text-base text-white font-h2
        bg-gray
      "
    >
      <div
        className="
          flex-1
          flex flex-col items-center justify-center
          pt-[31px] px-5 pb-[31px] box-border
          max-w-full
          gap-5
          z-[1]
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
      </div>
    </header>
  );
};

export default MobileHeader;