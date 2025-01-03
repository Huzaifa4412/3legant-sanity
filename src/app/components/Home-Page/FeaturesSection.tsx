import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import ProductCard from "../ProductCard";
import client from "@/sanity/client";
import styles from "./FeaturesSection.module.css";

export const revalidate = 10; //seconds

const FeaturesSection = async () => {
  const getData = async () => {
    try {
      const query = `*[_type == "featureProducts" ] | order(_createdAt asc)`;
      const data = await client.fetch(query);

      return { data };
    } catch (err) {
      console.error(`${err} -- for Try Catch -------- Features Section`);
      return { data: null };
    }
  };
  const { data } = await getData();
  return (
    <div className="container !py-[48px] flex flex-col gap-[48px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[40px] font-medium leading-[44px]">
          New <br />
          Arrivals
        </h2>
        <div className="self-end">
          <PrimaryBtn text="More Products" arrow={true} />
        </div>
      </div>
      <div
        className={`${styles.features_product_container} py-[48px] flex gap-[24px] overflow-x-auto`}
      >
        {data.map(
          (
            item: {
              discountedPrice: number;
              actualPrice: number;
              discountPercent: number;
              name: string;
              isOnSale: boolean;
              productImage: string;
            },
            id: number
          ) => {
            return <ProductCard data={item} key={id} />;
          }
        )}
      </div>
    </div>
  );
};

export default FeaturesSection;
