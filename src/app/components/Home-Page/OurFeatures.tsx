import React from "react";
import Image from "next/image";

const OurFeatures = () => {
  return (
    <div className="container flex-wrap justify-center !py-[48px] flex md:gap-[24px] gap-3 !px-2 !md:px-[20px]">
      <Card
        image="/images/OurFeatures/call.svg"
        text="24/7 Support"
        desc="Phone and Email support"
      />
      <Card
        image="/images/OurFeatures/money.svg"
        text="Money-back"
        desc="30 days guarantee"
      />
      <Card
        image="/images/OurFeatures/secure.svg"
        text="Secure Payments"
        desc="Secured by Stripe"
      />
      <Card
        image="/images/OurFeatures/shipping.svg"
        text="Free Shipping"
        desc="Order above $200"
      />
    </div>
  );
};

export default OurFeatures;

const Card = ({
  image,
  text,
  desc,
}: {
  image: string;
  text: string;
  desc: string;
}) => {
  return (
    <div
      className="card h-[180px] md:h-[220px] flex-shrink-0 w-[180px] md:w-[252px] lg:px-[32px] px-[24px] py-[35px] md:py-[48px] flex flex-col md:gap-[8px]"
      style={{ backgroundColor: "var(--notification)" }}
    >
      <Image src={image} alt={text} width={48} height={48} />
      <h2 className="font-semibold">{text}</h2>
      <p className="text-[14px] text-[#6C7275]">{desc}</p>
    </div>
  );
};
