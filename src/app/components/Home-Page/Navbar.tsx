"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container h-[60px] flex items-center justify-between">
      <div className="logo text-[26px] font-semibold">
        <Link href={"/"}>
          {" "}
          <h2>3legant.</h2>
        </Link>
      </div>
      <Image
        src={"/images/navbar/menu_icon.svg"}
        alt="Menu"
        width={24}
        height={24}
        className={`cursor-pointer hidden ${styles.menu_icon}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`${styles.nav_items} ${isOpen ? styles.active : ""}`}>
        <Image
          src={"/images/navbar/close.svg"}
          alt="Close Icon"
          className={`${styles.CloseIcon} hidden`}
          width={40}
          height={40}
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className="nav_list flex items-center space-x-8 text-[14px] font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Product</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="nav_icons flex items-center justify-center gap-[16px]">
        <Image
          src={"/images/navbar/search.svg"}
          alt="Search_Icon"
          width={24}
          height={24}
        />
        <Image
          src={"/images/navbar/account.svg"}
          alt="Account Icon"
          width={24}
          height={24}
        />
        <Image
          src={"/images/navbar/shopping_bag.svg"}
          alt="Search_Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Navbar;
