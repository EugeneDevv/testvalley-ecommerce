import React from "react";
import { Card, CardContent } from "./common/card";
import { getShortcuts } from "@/lib/data";
import { DictType } from "@types*";
import Link from "next/link";

const Shortcuts = async () => {
  const data = await getShortcuts();

  return (
    <Card className="flex justify-around items-center flex-wrap border-none shadow-none md:h-[120px] h-auto my-10 md:my-5">
      {data?.map((shortcut: DictType, index: number) => (
        <Link href={`#${shortcut?.title}`} key={index}>
          <Card className="border-none shadow-none p-0 md:m-0 m-2">
            <CardContent className="flex flex-col justify-center items-center p-0 m-0">
              <img
                src={shortcut.imageUrl}
                alt="shortcut-img"
                className="h-16 w-16"
              />
              <span className="text-xs md:text-sm mt-2">
                {shortcut.title} {index}
              </span>{" "}
            </CardContent>
          </Card>
        </Link>
      ))}
    </Card>
  );
};

export default Shortcuts;
