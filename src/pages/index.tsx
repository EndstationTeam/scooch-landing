import * as React from "react";
import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import AppFeatures from "../components/app-features";
import AnimationWrapper from "../components/animation-wrapper";
import PollutionStats from "../components/pollution-stats";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

const DesktopV: FunctionComponent = () => {
  return (
    <Layout>
      <div className="w-full relative bg-gray overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
        {/* <Header />  */}
        <FrameComponent />
        <FrameComponent1 />
        <FrameComponent2 />
        {/* <section className="self-stretch h-[1846px] relative max-w-full mq1650:h-auto mq1650:min-h-[1846]">
          <AppFeatures />
          <AnimationWrapper />
        </section> */}
        <section className="self-stretch flex flex-col items-center justify-center py-10 px-5 box-border max-w-full text-center text-53xl text-orange font-h2">
          <div className="flex-1 flex flex-col items-center justify-center py-0 px-0 box-border max-w-full">
            <PollutionStats />
          </div>
        </section>
        <section className="self-stretch flex flex-col items-center justify-center py-10 px-5 box-border max-w-full text-center text-53xl text-orange font-h2">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 box-border max-w-full mq900:pb-5 mq900:box-border mq1300:box-border">
      
              <div className="flex flex-wrap justify-center items-center px-5 box-border gap-5 max-w-full z-[1]">
                <div className="flex flex-col items-center justify-center gap-5 max-w-full">
                  <div className="flex flex-col items-center justify-center p-2.5 box-border relative gap-2.5">
                    <div className="font-black inline-block mq900:text-39xl mq450:text-24xl">
                      63%
                    </div>
                    <h2 className="text-11xl font-medium font-[inherit] inline-block mq900:text-5xl mq450:text-lg">
                      of drivers
                    </h2>
                  </div>
                  <div className="w-[326px] flex flex-col items-start justify-center gap-2.5 max-w-full text-base text-white">
                    <div className="relative">
                      have avoided going to a destination due to the challenge of
                      finding parking
                    </div>
                    <p className="self-stretch relative text-sm text-gainsboro">
                      Source: {" "}
                      <a className="[text-decoration:underline]"
                        href="https://inrix.com/press-releases/parking-pain-us/"
                        >
                          Inrix Parking Pain Report
                      </a>
                      </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 max-w-full">
                  <div className="flex flex-col items-center justify-center p-2.5 box-border relative gap-2.5">
                    <div className="font-black inline-block mq900:text-39xl mq450:text-24xl">
                      30%
                    </div>
                    <h2 className="text-11xl font-medium font-[inherit] inline-block mq900:text-5xl mq450:text-lg">
                      of urban traffic
                    </h2>
                  </div>
                  <div className="w-[326px] flex flex-col items-start justify-start gap-2.5 max-w-full text-base text-white">
                    <div className="self-stretch relative">
                      <p className="m-0">is caused by drivers searching</p>
                      <p className="m-0">for parking</p>
                    </div>
                    <p className="self-stretch relative text-sm text-gainsboro">
                      Source: {""}
                      <a className="[text-decoration:underline]"
                        href="https://ops.fhwa.dot.gov/publications/fhwahop23004/ch1.htm"
                        >
                          FHWA Operations
                        </a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 max-w-full">
                  <div className="flex flex-col items-center justify-center p-2.5 box-border relative gap-2.5">
                    <div className="font-black inline-block mq900:text-39xl mq450:text-24xl">
                      3.6B
                    </div>
                    <h2 className="text-11xl font-medium font-[inherit] inline-block mq900:text-5xl mq450:text-lg">
                      hours wasted
                    </h2>
                  </div>
                  <div className="w-[326px] flex flex-col items-start justify-start gap-2.5 max-w-full text-base text-white">
                    <div className="self-stretch relative">
                      <p className="m-0">by US drivers each year</p>
                      <p className="m-0">when trying to park</p>
                    </div>
                      <p className="self-stretch relative text-sm text-gainsboro">
                      Source: {" "}
                      <a className="[text-decoration:underline]"
                        href="https://inrix.com/press-releases/parking-pain-us/"
                        >
                          Inrix Parking Pain Report
                      </a>
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      <section className="w-full flex items-center justify-center px-5 py-10">
        <div className="
          flex 
          flex-wrap 
          gap-5 
          max-w-screen-xl 
          w-full
          justify-center
        ">
          <img
        className="rounded-xl object-cover flex-1 min-w-[250px] lg:max-w-[575px]"
        alt=""
        src="/earthforestconceptaigenerated-1@2x.png"
          />
          <img
        className="rounded-xl object-cover flex-1 min-w-[250px] lg:max-w-[812px]"
        alt=""
        src="/severalcarstraveledbusyroadwaytrafficlights-1@2x.png"
          />
        </div>
      </section>

      {/* <Footer /> */}
      </div>
    </Layout>  

  );
};

export default DesktopV;
