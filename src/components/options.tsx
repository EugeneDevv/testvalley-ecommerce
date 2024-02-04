import Link from "next/link";

import { cn } from "@/lib/utils";
import { ArrowBigDown } from "lucide-react";

export function Options({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("flex justify-between items-center space-x-4", className)}
      {...props}
    >
      <Link
        href="#options"
        className="text-2xl  hover:text-primary font-semibold"
      >
        <ArrowBigDown size={40} />
      </Link>

      <span className="border-r border-gray-500 h-5 w-1" />
      <Link href="#menu" className="text-sm font-medium flex items-center">
        <span className="text-lg ml-2">Menu</span>
      </Link>
    </div>
  );
}
