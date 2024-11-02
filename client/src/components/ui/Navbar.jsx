import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Navbar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#f83002]">Portal</span>
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              <li>Home</li>
              <li>Jobs</li>
              <li>Browser</li>
            </ul>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">Hello</PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;