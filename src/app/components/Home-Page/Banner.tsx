import React from "react";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";

const Banner = () => {
  return (
    <div
      className="container !p-0 flex items-center md:flex-row flex-col"
      style={{ backgroundColor: "var(--notification)" }}
    >
      <Image
        src={"/images/banner/banner.png"}
        className="md:w-1/2 w-full"
        alt="Banner"
        width={720}
        height={532}
      />
      <div className="content py-5 lg:pl-[72px] px-[20px] lg:pr-[160px] md:w-[470px] w-full flex-col md:gap-[16px]">
        <h3 className="text-[#377DFF] text-[14px] font-semibold ">
          SALE UP TO 35% OFF
        </h3>
        <h2 className="text-3xl font-semibold">
          HUNDREDS of New lower prices!
        </h2>
        <p className="font-medium">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <div className="w-max mt-6 lg:mt-4">
          <PrimaryBtn text="Shop Now" arrow={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
