import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="max-w-[1120px] h-[760px] mx-auto p-0">
      <Slider />
      <div className="text flex items-center md:flex-row flex-col gap-6 justify-center md:pb-[20px] lg:pb-[40px]">
        <div className="part1 w-full lg:w-[643px]">
          <h1 className="text-[48px] lg:text-[72px] font-medium px-[15px] leading-[52px] lg:leading-[76px]">
            Simply Unique<span className="text-[#6C7275]">/</span> Simply Better
            <span className="text-[#6C7275]">.</span>
          </h1>
        </div>
        <div className="part2 w-full px-2 md:w-[424px]">
          <h3 style={{ color: "var(--light-text)" }}>
            <span className="font-semibold text-[#111]">3legant</span> is a gift
            & decorations store based in HCMC, Vietnam. Est since 2019.{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
