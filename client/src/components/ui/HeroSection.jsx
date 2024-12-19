import React from "react";
import { Button } from "./button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="px-4 py-2 rounded-full font-semibold mx-auto bg-lime-100 text-lime-600">
          No 1. Job Hunting Portal
        </span>
        <h1 className="text-5xl font-bold flex flex-col gap-2">
          <p>Search and Apply</p>
          <p>Get your <span className="text-lime-600">dream</span> job</p>
        </h1>
        <p className="my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique maxime fugiat pariatur assumenda, provident iure?</p>
        <div className="flex w-[40%] border border-gray-300 pl-3 rounded-md items-center gap-4 mx-auto">
            <input type="text" placeholder="Find your dream job..." className="text-slate-500 outline-none px-3 py-2 w-full rounded-md" />
            <Button className="rounded-r-md rounded-l-none bg-gray-800 hover:bg-gray-700">
                <Search className="h-5 w-5" />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
