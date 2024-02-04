"use client";

import { getBanners } from "@/lib/data";
import { Card, CardContent } from "./common/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./common/carousel";
import Autoplay from "embla-carousel-autoplay";
import { DictType } from "@types";

export async function ProductsCarousel({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const data = await getBanners();
  

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="h-[220px] md:h-[320px] text-white border-none shadow-none"
    >
      <CarouselContent className="relative border-none shadow-none">
        {data.map((banner: DictType, index: number) => (
          <CarouselItem key={index} className="lg:basis-1/2">
            <Card className="h-[220px] md:h-[320px] border-none shadow-none p-0 flex w-full">
              <CardContent className="h-[340px] border-none shadow-none p-0 flex justify-center flex-1">
                <img src={banner.pcImageUrl} alt="" className="w-full" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-1/2 left-10 bg-black/50 text-white h-10 w-10" />
      <CarouselNext className="top-1/2 right-5 bg-black/50 text-white h-10 w-10" />
    </Carousel>
  );
}
