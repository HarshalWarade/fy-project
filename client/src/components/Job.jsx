import { Bookmark } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();

  const jobId = "sad3asd849asjhdajshd"

  return (
    <div>
      <div className="p-5 rounded-md border bg-white shadow-md border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-[12px]">2 days ago</p>
          <Button className="bg-gray-600 rounded-full m-0 h-5 w-5 p-6">
            <Bookmark
              variant="outline"
              className="rounded-full"
              size="icon"
            ></Bookmark>
          </Button>
        </div>
        <div className="flex gap-2 items-center my-2">
          <Button
            className="rounded-none p-6 border-none"
            variant="outline"
            size="icon"
          >
            <Avatar className="rounded-none">
              <AvatarImage src="https://i.pinimg.com/736x/3d/6a/2a/3d6a2ad56bc3403c5cfcc3efe09b741b.jpg" />
            </Avatar>
          </Button>
          <div>
            <h1>Company Name</h1>
            <p>India</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg my-2">Title</h2>
          <p className="text-sm text-gray-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            architecto incidunt perspiciatis placeat quod, quasi inventore
            minima eaque praesentium ea iste assumenda. Sit illum optio
            assumenda! Tenetur impedit laborum perferendis excepturi quia sed
            beatae tempore dolor quae vero, natus eaque?
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <Badge className={`text-green-600 font-semibold`} variant="ghost">
            Today
          </Badge>
          <Badge className={`text-yellow-600 font-semibold`} variant="ghost">
            Part-time
          </Badge>
          <Badge className={`text-purple-600 font-semibold`} variant="ghost">
            24LPA
          </Badge>
        </div>

        <div className="flex gap-4 mt-5">
          <Button
            className="bg-white text-black border border-gray-700 hover:bg-black hover:text-white"
            onClick={() => navigate(`/description/${jobId}`)}
          >
            Details
          </Button>
          <Button>Save for later</Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
