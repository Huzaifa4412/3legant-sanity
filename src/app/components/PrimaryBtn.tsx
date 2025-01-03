import React from "react";
import Image from "next/image";

const PrimaryBtn = ({ text, arrow }: { text: string; arrow: boolean }) => {
  return (
    <button className="border-b border-b-black flex items-center justify-center gap-2">
      {text}{" "}
      {arrow && (
        <Image
          src={"/images/banner_grid/arrow.svg"}
          alt="Arrow"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default PrimaryBtn;
