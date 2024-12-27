import React from "react";
import Navbar from "./ui/Navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3,34,6,6,7,6];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-semibold text-xl">Search Results - {randomJobs.length} fetched</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {randomJobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
