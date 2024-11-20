import React from "react";
import LatestJobCard from "./LatestJobCard";

const a = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-3xl font-semibold">Latest Job Openings</h1>
      <div className="grid grid-cols-3 gap-4 pt-5">
        {a.slice(0,6).map((item, index) => (
          <LatestJobCard />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
