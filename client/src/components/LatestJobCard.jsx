import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const LatestJobCard = () => {
  return (
    <div className="p-5 transform duration-300 ease-in-out hover:bg-slate-50 rounded-md shadow-md bg-white border border-gray-100 cursor-pointer">
      <div className="flex  items-center gap-4 mb-3">
        <div className="w-[70px] h-[70px] flex items-center content-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-xl">FrontEnd Developer</h1>
          <p>Country</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold my-2">Company Name</h1>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
          impedit qui nobis nesciunt assumenda quisquam, magni culpa voluptatem
          aliquid optio!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Button className="transform duration-300 ease-in-out bg-orange-50 outline-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Details and Apply</Button>
        <Badge
          className={`text-green-500 bg-green-100 font-semibold`}
          variant="ghost"
        >
          Today
        </Badge>
        <Badge
          className={`text-yellow-500 bg-yellow-100 font-semibold`}
          variant="ghost"
        >
          Part-time
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
