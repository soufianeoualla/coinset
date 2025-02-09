import React from "react";
import { Input } from "./ui/Input";
import { Search } from "lucide-react";
import { BellIcon, ChatIcon } from "@/assets/iconsComponents";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="flex justify-between items-center w-full">
      <h1 className="text-[22px]">{title}</h1>
      <div className="flex items-center">
        <Input
          placeholder="Search"
          Icon={
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-green-dark"
              width={18}
              height={18}
              strokeWidth={1.25}
            />
          }
        />
        <div className="flex items-center gap-x-2.5 ml-5 mr-9">
          <div className="w-9 h-9 rounded-full bg-green-bg flex justify-center items-center text-green-dark">
            <ChatIcon />
          </div>
          <div className="w-9 h-9 rounded-full bg-green-bg flex justify-center items-center text-green-dark ">
            <div className="relative">
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500" />
              <BellIcon />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-3 flex-1">
          <strong className="flex-1 w-[118px]">Andrew Forbist</strong>
          <div className="w-[38px] h-[38px] rounded-full bg-green-light " />
        </div>
      </div>
    </header>
  );
};

export default Header;
