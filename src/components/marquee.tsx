import React from 'react';

const Marquee = () => {
  return (
    <div className="overflow-hidden w-full relative">
      {/* The big container that moves */}
      <div
        className="
          flex
          animate-marquee
          whitespace-nowrap
          [&>*]:mx-6  /* optional spacing between items */
        "
        style={{
          animation: 'scroll-ping-pong 20s linear infinite', // 15s is an example speed
          width: '200%', // so we can scroll a wide area
        }}
      >
        {/* Repeat your icons or blocks as many times as you want */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />

        {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />

        {/* You can even do it a third time if you want to ensure coverage */}
         {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />
       {/* Repeat the set again for a seamless loop */}
        <MarqueeItem label="ECO-FRIENDLY" icon="/group.svg" />
        <MarqueeItem label="PRIVATE" icon="/group-116.svg" />
        <MarqueeItem label="SECURE" icon="/group-1.svg" />
        <MarqueeItem label="FAST & EASY" icon="/group-118.svg" />










      
      </div>
    </div>
  );
};

/** A sub-component that renders a single item (icon + label) */
function MarqueeItem({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <img src={icon} alt={label} className="h-18 w-18 mb-4" />
      <span className="uppercase font-black text-lg">{label}</span>
    </div>
  );
}

export default Marquee;
