import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container bg-[#141718] text-white h-max md:h-[250px] !py-[80px] flex flex-col  gap-[50px]">
      <nav className="flex justify-between items-center md:flex-row flex-col gap-[25px]">
        <div className="logo text-2xl font-semibold flex items-center">
          <h2 className="border-r border-r-white pr-[32px]">3legant.</h2>
          <p className="pl-[32px] text-lg font-medium text-[#E8ECEF]">
            Gift & Decoration Stores
          </p>
        </div>
        <div className="nav_items">
          <ul className="flex items-center gap-3 lg:gap-[30px]">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Shop</Link>
            </li>
            <li>
              <Link href={"/"}>Product</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/"}>Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <footer className="border-t border-t-slate-400  !py-[16px]">
        <div className="content flex gap-[28px] items-center w-full justify-between md:flex-row flex-col">
          <div className="items flex items-center justify-center  gap-[24px] md:flex-row flex-col">
            <h3 className="text-slate-300">
              Copyright © 2023 3legant. All rights reserved
            </h3>
            <div className="items flex gap-2">
              <h2 className="font-semibold text-lg">Privacy Policy</h2>
              <h2 className="font-semibold text-lg">Terms of Use</h2>
            </div>
          </div>
          <div className="socialIcons flex gap-2 justify-self-end">
            <Image
              src={"/images/socialIcons/facebook.svg"}
              alt="Facebook"
              width={24}
              height={25}
            />
            <Image
              src={"/images/socialIcons/instagram.svg"}
              alt="instagram"
              width={24}
              height={25}
            />
            <Image
              src={"/images/socialIcons/youtube.svg"}
              alt="youtube"
              width={24}
              height={25}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
