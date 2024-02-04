import { socials } from "@/lib/resources";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-4 h-[280px] w-full bg-slate-100 text-black">
      <h4 className="text-2xl font-semibold">Test Valley Footer</h4>{" "}
      <div className="flex  items-center justify-center w-full lg:w-1/2 mt-6">
        {socials.map((platform, index) => (
          <platform.icon key={index} size={30} className="mx-2 text-3xl" />
        ))}
      </div>
    </div>
  );
};

export default Footer;
