import React from "react";
import { Card } from "./common/card";
import { Badge } from "./common/badge";
import { MdStar } from "react-icons/md";
import { DictType } from "@types*";
import Link from "next/link";

interface Props {
  product: DictType;
}
const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`#${product.id}`}>
      <Card className="flex flex-col shadow-none border-none min-h-[200px] col-span-1">
        <div className="relative rounded-t-md ">
          <img
            src={product?.media[0]?.uri}
            alt="product-image"
            className="flex-1 rounded-t-md min-h-[170px]"
          />
          <Badge className="absolute bottom-1 left-1 rounded-sm">
            리턴 가능
          </Badge>
        </div>
        <div className="">
          <div className="flex flex-col">
            <h5 className="my-2">{product?.title}</h5>
            <div className="font-semibold">
              <span className="text-orange-400 mr-2">
                {parseInt(String(product?.id)?.slice(2, 4))}%
              </span>
              <span>{parseInt(String(product?.id)?.slice(2, 4))}0,000 원</span>
            </div>
            <div className="flex items-center text-xs text-slate-400 my-2">
              <MdStar size={16} />
              <span>{product?.rating}</span>{" "}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
