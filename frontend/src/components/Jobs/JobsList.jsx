import { useState, useEffect } from "react";
import { data } from "../../../../backend/data";
import JobsCard from "./JobsCard";

const JobsList = () => {
  const [visibleData, setVisibleData] = useState([]);
  useEffect(() => {
    // Ambil 6 data pertama dari JSON lokal
    const initialData = data.slice(0, 8);
    setVisibleData(initialData);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pt-5 justify-center items-center">
      {visibleData.map((data) => {
        return <JobsCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default JobsList;
