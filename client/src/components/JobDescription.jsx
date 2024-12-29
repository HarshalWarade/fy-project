import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;

  return (
    <>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl">Title (Role)</h1>
        <div className="flex items-center justify-between">
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
          {isApplied ? (
            <p className="text-green-500 text-xl font-bold">Already Applied!</p>
          ) : (
            <Button>Apply Now</Button>
          )}
        </div>

        <div className="mt-10">
          <h1 className="text-xl mb-3 font-semibold">Job Description</h1>
          <hr />
          <p className="my-5 text-justify text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eaque incidunt, perspiciatis possimus at pariatur deleniti doloribus veritatis quis ipsum cum quaerat molestiae. Soluta non libero quia magni, ad quibusdam reprehenderit odio aliquam sint fugit vitae praesentium maxime neque facilis debitis saepe repellat, ex accusamus delectus quasi deserunt quos? Iste.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <strong>Role: </strong> <p>FrontEnd Developer</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <strong>Package: </strong> <p>24LPA</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <strong>Location: </strong> <p>New Delhi</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <strong>Total Application Received: </strong> <p>345</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <strong>Posted On: </strong> <p>18/12/2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
