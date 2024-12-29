import React from "react";
import Navbar from "./ui/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="flex flex-col gap-4">
            <div className="flex items-center font-semibold text-lg gap-[10px]">
              <h1>FirstName</h1>
              <h1>LastName</h1>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore soluta dolore dolorum ea sunt velit!
              </p>
            </div>
          </div>


          

        </div>
      </div>
    </>
  );
};

export default Profile;
