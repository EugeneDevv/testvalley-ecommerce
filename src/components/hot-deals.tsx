import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import ProductCard from "./product-card";
import { getCategories } from "@/lib/data";
import { DictType } from "@types*";

interface Props {
  label: string;
  description: string;
  single?: boolean;
}
const HotDeals = async ({ label, description, single }: Props) => {
  const data = await getCategories(single);

  const from = Math.floor(Math.random() * 75);
  const to = from + 4;

  return (
    <div className="flex md:flex-row flex-col px-6 my-8 ">
      <div className="flex flex-col w-[220px]">
        <h3 className="text-xl font-semibold">{label}</h3>
        <p className="text-slate-300 flex-1 text-xs lg:text-md mt-2 mb-4 md:mb-0">
          {description}
        </p>
        <div className="hidden md:flex">
          <ChevronLeft className="cursor-pointer" size={28} />
          <span className="mx-1" />
          <ChevronRight className="cursor-pointer" size={28} />
        </div>
      </div>

      {/* Show 4 items in tablets and desktop */}
      <div className="px-0 md:px-4 hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {data?.items
          ?.slice(from, to)
          .map((product: DictType, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>

      {/* Show 6 item in mobile view */}
      <div className="px-0 md:px-4 grid md:hidden grid-cols-2 gap-4 w-full">
        {data?.items
          ?.slice(from, to + 2)
          .map((product: DictType, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HotDeals;
