import { MdSearch } from "react-icons/md";
import { Input } from "./common/input";

export function Search() {
  return (
    <div className="flex items-center w-[200px] md:w-[400px] border border-gray-200 rounded-md p-1 md:mx-24">
      <MdSearch size={26} />
      <Input
        type="search"
        placeholder="Search..."
        className="flex-1 w-full border-none outline-none shadow-none active:outline-none active:border-none focus:border-none focus:outline-none"
      />
    </div>
  );
}
