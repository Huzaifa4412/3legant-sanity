import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="!p-0 container h-[360px] relative">
      <Image
        src={"/images/newsletter/img.png"}
        alt="News Letter"
        className="object-cover w-full h-full object-center"
        width={1440}
        height={360}
      />
      <div className="content max-w-[540px] flex flex-col items-center gap-[24px] h-[166px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text">
          <h2 className="text-3xl font-semibold">Join Our Newsletter</h2>
          <p>Sign up for deals, new products and promotions</p>
        </div>
        <div className="emailTake max-w-[488px] justify-between gap-[8px] flex items-center min-w-[320px] h-[52px] border-b border-black">
          <div className="emailIcon">
            <Image
              src={"/images/newsletter/email_Icon.svg"}
              alt="MAil Icon"
              width={24}
              height={24}
            />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none w-max"
            placeholder="Email address"
          />
          <button className="">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
