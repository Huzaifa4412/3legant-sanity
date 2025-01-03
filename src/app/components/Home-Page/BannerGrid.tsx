import React from "react";
import Image from "next/image";

const BannerGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-[18px] max-w-[1120px] mx-auto h-max md:h-[664px]">
      <div
        className="card1 relative row-span-2"
        style={{ backgroundColor: "var(--notification)" }}
      >
        <div className="text absolute top-5 left-10">
          <CardText title="Living Room" />
        </div>
        <Image
          src={"/images/banner_grid/img1.png"}
          className="w-full h-full object-cover object-center"
          alt="Living Room"
          width={800}
          height={664}
        />
      </div>
      <div className="card2 relative">
        <div className="text absolute top-[50%] left-10">
          <CardText title="Bedroom" />
        </div>
        <Image
          src={"/images/banner_grid/img3.png"}
          className="w-full h-full object-cover object-center"
          alt="Bedroom"
          width={800}
          height={664}
        />
      </div>
      <div className="card3 relative">
        <div className="text absolute top-[50%] left-10">
          <CardText title="Kitchen" />
        </div>
        <Image
          src={"/images/banner_grid/img2.png"}
          className="w-full h-full object-cover object-center"
          alt="Kitchen"
          width={800}
          height={664}
        />
      </div>
    </div>
  );
};

export default BannerGrid;

const CardText = ({ title }: { title: string }) => {
  return (
    <div className="card-text ">
      <h2 className="text-[32px] font-semibold">{title}</h2>
      <button className="flex gap-2 border-b border-b-black items-center">
        Shop Now{" "}
        <Image
          src={"/images/banner_grid/arrow.svg"}
          alt="Right Arrow"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
