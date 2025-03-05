import React from "react";
import { FunctionComponent } from "react";
import { Button } from "@mui/material";

export type DesktopFooterType = {
    className?: string;
};

const DesktopFooter: FunctionComponent<DesktopFooterType> = ({ className = "" }) => {
    return (
        <footer
            className={`
            self-stretch 
            flex flex-row items-start justify-end
            py-0 pl-0 pr-px 
            box-border 
            max-w-full 
            text-left text-base text-white font-h2
            ${className}
            `}
        >
            <div
                className="
                flex-1
                flex flex-row items-start justify-between
                pt-[100px] px-40 pb-[99px] 
                box-border 
                max-w-full 
                gap-5 
                z-[1]
                mq900:pl-20 mq900:pr-20 mq900:box-border
                mq450:px-5 mq450:pb-16 mq450:box-border
                mq1300:flex-wrap
            "
            >
                <div 
                    className="
                    w-[452px]
                    flex flex-col
                    items-center md:items-start
                    justify-start
                    gap-2.5
                    max-w-full
                    "
                >
                    <div className="self-stretch flex flex-col items-center md:items-start justify-start gap-10 max-w-full mq450:gap-5">
                        <div className="flex flex-row items-center justify-start gap-[35px] max-w-full mq450:gap-[17px] mq450:flex-wrap">
                            <img
                                className="h-[66px] w-[269px] relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/calque-1-1.svg"
                            />
                            <div className="flex flex-row items-start justify-start gap-[19px]">
                                <img
                                    className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt="LinkedIn"
                                    src="/linked-in.svg"
                                />
                                <img
                                    className="h-[34px] w-[34px] relative"
                                    loading="lazy"
                                    alt="Instagram"
                                    src="/vector-8.svg"
                                />
                            </div>
                        </div>
                        <div className="relative inline-block mb-2 shrink-0 text-center md:text-left lg:text-left xl:text-left">
                            Our app helps you find and reserve parking spots in seconds,
                            reducing traffic, saving time, and cutting down on urban pollution
                            for a greener city experience.
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center md:items-start lg:items-start xl:items-start justify-center md:justify-start lg:justify-start xl:justify-start gap-4">
                        <Button
                            className="w-[234px] h-[31px]"
                            disableElevation
                            variant="contained"
                            sx={{
                                color: "#151818",
                                fontSize: "16",
                                background: "#fbb031",
                                borderRadius: "40px",
                                "&:hover": { background: "#fbb031" },
                                width: 234,
                                height: 31,
                            }}
                            onClick={() => (window.location.href = "mailto:info@endstation.us")}
                        >
                            info@endstation.us
                        </Button>
                        
                        <div className="flex flex-row items-center gap-6 text-white text-sm">
                            <a href="/privacy" className="hover:underline text-white">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="hover:underline text-white">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    className="
                    flex flex-col
                    items-center 
                    md:items-end
                    lg:items-end
                    xl:items-end
                    md:justify-end 
                    lg:justify-end
                    xl:justify-end
                    justify-center
                    gap-[30px]
                    pt-10 px-0 pb-px
                    "
                >
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
                            width: 240,
                            height: 58,
                        }}
                        href="https://scooch.cc"
                    >
                        CHECK OUT THE APP
                    </Button>
                    <div className="flex flex-col items-center justify-center gap-[10px]">
                        <div className="text-white font-bold text-lg">Coming soon on</div>
                        <div className="flex flex-row items-start justify-start gap-[30px]">
                            <img
                                className="h-7 w-[109px] relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt="App Store"
                                src="/app-store.svg"
                            />
                            <img
                                className="h-7 w-[118px] relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt="Google Play"
                                src="/google-play.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DesktopFooter;
