import { useState, useEffect } from "react";
import { data } from "../../../../backend/data";
import JobsCard from "./JobsCard";

const JobsList = () => {

  return (
    <div className="flex flex-wrap gap-4 pt-5 justify-center items-center">
      {data.map((data) => {
        return <JobsCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default JobsList;
