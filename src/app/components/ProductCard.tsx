import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/sanity/client";

const ProductCard = ({
  data,
}: {
  data: {
    discountedPrice: number;
    actualPrice: number;
    discountPercent: number;
    name: string;
    isOnSale: boolean;
    productImage: string;
  };
}) => {
  const {
    discountedPrice,
    actualPrice,
    discountPercent,
    name,
    isOnSale,
    productImage,
  } = data;

  const builder = imageUrlBuilder(client);
  function urlFor(source: string) {
    return builder.image(source);
  }
  return (
    <div className="w-[262px] flex-shrink-0  h-[433px] relative flex flex-col justify-between">
      <div
        className="imagePart w-full h-[349px] overflow-hidden relative"
        style={{ backgroundColor: "var(--notification)" }}
      >
        <div className="saleTags absolute top-2 left-3 flex items-center justify-between gap-2">
          <div className="salesTag flex flex-col gap-2">
            <button className="bg-white w-max px-[14px] py-[4px] uppercase font-semibold text-[14px]">
              New
            </button>
            {isOnSale && (
              <button className="bg-[#38CB89] text-white w-max px-[14px] py-[4px] uppercase font-semibold text-[14px]">
                {discountPercent}%
              </button>
            )}
          </div>
        </div>
        <div className="whishList absolute top-8 right-3 cursor-pointer ">
          <Image
            src={"/images/products/wishList.svg"}
            className="p-2 rounded-full shadow-xl w-full h-full  "
            alt="Wish list"
            width={42}
            height={42}
          />
        </div>
        <Image
          src={urlFor(productImage).url()}
          alt={name}
          className="w-full h-full object-cover overflow-hidden"
          width={262}
          height={349}
        />
        <button className="bg-black hover:bg-white hover:text-black hover:border duration-500 ease-in-out hover:border-black px-[24px] w-[230px] absolute bottom-4 left-1/2 -translate-x-1/2 py-[8px] rounded-[8px] text-white">
          Add to Cart
        </button>
      </div>
      <div className="downPart flex flex-col gap-1">
        <div className="rating flex gap-1">
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
        </div>

        <div className="title">{name}</div>
        <div className="price flex gap-2 font-bold">
          <div className="discountedPrice">Rs {discountedPrice}</div>
          <div className="actualPrice line-through text-[#6C7275] font-medium">
            Rs {actualPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
