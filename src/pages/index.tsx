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

const DesktopV: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <Header /> 
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
           <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[934px] box-border max-w-full mt-[-894px] mq900:pb-[395px] mq900:box-border mq1300:pb-[607px] mq1300:box-border">
             <div className="flex-1 overflow-x-auto flex flex-row items-center justify-center py-[17px] px-5 box-border gap-5 max-w-full z-[1]">
               <div className="w-[456px] shrink-0 flex flex-col items-center justify-center gap-5 max-w-full">
                 <div className="self-stretch h-[88px] flex flex-row items-start justify-start p-2.5 box-border relative gap-2.5">
                   <div className="h-[68px] w-[457px] absolute !m-[0] top-[-16px] left-[0px] font-black inline-block mq900:text-39xl mq450:text-24xl">
                     63%
                   </div>
                   <h2 className="!m-[0] h-[68px] w-[457px] absolute top-[59px] left-[0px] text-11xl font-medium font-[inherit] inline-block mq900:text-5xl mq450:text-lg">
                     of drivers
                   </h2>
                 </div>
                 <div className="w-[326px] flex flex-col items-start justify-start gap-2.5 max-w-full text-base text-white">
                   <div className="relative">
                     have avoided going to a destination due to the challenge of
                     finding parking.
                   </div>
                   <div className="self-stretch relative text-sm text-gainsboro">
                     {`Source: `}
                     <span className="[text-decoration:underline]">
                       https://inrix.com/press-releases/parking-pain-us/
                     </span>
                   </div>
                 </div>
               </div>
               <div className="w-[456px] shrink-0 flex flex-col items-center justify-center gap-5 max-w-full">
                 <div className="self-stretch h-[88px] flex flex-row items-start justify-start p-2.5 box-border relative gap-2.5">
                   <div className="h-[68px] w-[457px] absolute !m-[0] top-[-16px] left-[0px] font-black inline-block mq900:text-39xl mq450:text-24xl">
                     30%
                   </div>
                   <h2 className="!m-[0] h-[68px] w-[457px] absolute top-[59px] left-[0px] text-11xl font-medium font-[inherit] inline-block mq900:text-5xl mq450:text-lg">
                     of urban traffic
                   </h2>
                 </div>
                 <div className="w-[326px] flex flex-col items-start justify-start gap-2.5 max-w-full text-base text-white">
                   <div className="self-stretch relative">
                     <p className="m-0">is caused by drivers searching</p>
                     <p className="m-0">for a parking.</p>
                   </div>
                   <div className="self-stretch relative text-sm text-gainsboro">
                     {`Source: `}
                     <span className="[text-decoration:underline]">
                       https://ops.fhwa.dot.gov/publications/fhwahop23004/ch1.htm
                     </span>
                   </div>
                 </div>
               </div>
               <div className="w-[456px] shrink-0 flex flex-col items-center justify-center gap-5 max-w-full">
                 <div className="self-stretch h-[88px] flex flex-row items-start justify-start p-2.5 box-border relative gap-2.5">
                   <div className="h-[68px] w-[457px] absolute !m-[0] top-[-16px] left-[0px] font-black inline-block mq900:text-39xl mq450:text-24xl">
                     3.6B
                   </div>
                   <h2 className="!m-[0] h-[68px] w-[457px] absolute top-[59px] left-[0px] text-11xl font-medium font-[inherit] inline-block mq900:text-5xl mq450:text-lg">
                     hours wasted
                   </h2>
                 </div>
                 <div className="w-[326px] flex flex-col items-start justify-start gap-2.5 max-w-full text-base text-white">
                   <div className="self-stretch relative">
                     <p className="m-0">by US drivers each year</p>
                     <p className="m-0">when trying to park.</p>
                   </div>
                   <div className="self-stretch relative text-sm text-gainsboro">
                     {`Source: `}
                     <span className="[text-decoration:underline]">
                       https://inrix.com/press-releases/parking-pain-us/
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[884px] box-border max-w-full mt-[-894px] mq900:pb-[374px] mq900:box-border mq1300:pb-[575px] mq1300:box-border">
             <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border gap-[19px] max-w-full z-[2] mq1650:flex-wrap">
               <img
                className="w-[575px] relative rounded-xl max-h-full object-cover max-w-full mq1650:flex-1"
                loading="lazy"
                alt=""
                src="/earthforestconceptaigenerated-1@2x.png"
              />
              <img
                className="w-[812px] relative rounded-xl max-h-full object-cover max-w-full mq1650:flex-1"
                loading="lazy"
                alt=""
                src="/severalcarstraveledbusyroadwaytrafficlights-1@2x.png"
              />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default DesktopV;
