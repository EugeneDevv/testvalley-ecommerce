import Link from "next/link";

import { cn } from "@/lib/utils";
import { MdMenu, MdNotificationImportant } from "react-icons/md";
import { Search } from "./search-bar";
import { Options } from "./options";
import { IoMdSearch } from "react-icons/io";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <div className="flex h-[4.5rem] items-center md:justify-center justify-between w-full px-4">
        <nav
          className={cn(
            "flex justify-between items-center space-x-4  lg:space-x-6 text-brand-green",
            className
          )}
          {...props}
        >
          <Link
            href="#Testvalley"
            className="text-2xl  hover:text-primary font-semibold"
          >
            Testvalley
          </Link>

          <Link
            href="#menu"
            className="text-sm font-medium hidden md:flex items-center"
          >
            <MdMenu size={24} />
            <span className="text-lg ml-2">Menu</span>
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Search />
          <Options />
        </div>

        <div className="md:hidden flex justify-end text-black flex-1">
          <MdNotificationImportant size={24} />
          <span className="mx-1" />
          <IoMdSearch size={24} />
        </div>
      </div>
    </>
  );
}
