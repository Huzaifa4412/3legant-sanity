import React from "react";
import Image from "next/image";

const NotificationBar = () => {
  return (
    <div
      className="w-screen h-[48px] relative max-w-[1440px] mx-auto flex items-center justify-center gap-2 text-[#343839] font-semibold"
      style={{ backgroundColor: "var(--notification)" }}
    >
      <Image
        src={"/images/navbar/notification_bar_ticket.svg"}
        alt="notification"
        width={24}
        height={24}
      />
      <h3>30% off storewide — Limited time! </h3>
      <Image
        src={"/images/navbar/cross_icon.svg"}
        className="cursor-pointer absolute right-4"
        alt="close"
        width={20}
        height={20}
      />
    </div>
  );
};

export default NotificationBar;
