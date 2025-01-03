import React from "react";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";
import { urlFor } from "@/sanity/client";
import Link from "next/link";
// import Link from "next/link";

const ArticleCard = ({
  title,
  image,
  slug,
}: {
  title: string;
  image: SanityImage;
  slug: string;
}) => {
  return (
    <div className="articleCard w-[320px] h-[413px] flex flex-col gap-[24px] flex-shrink-0">
      <div className="image w-full h-[325px] ">
        <Image
          src={urlFor(image.asset._ref).url()}
          className="w-full h-full object-cover object-center
          "
          alt="Product"
          width={357}
          height={325}
        />
      </div>
      <div className="text">
        <h3 className="text-lg font-medium">{title}</h3>
        <Link href={`/blog/${slug}`}>
          <PrimaryBtn text="Read More" arrow={true} />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
