import { React, useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuBookmarkPlus } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobsCard = ({ data }) => {
  const {
    id,
    job_title,
    company,
    link_image,
    work_type,
    skills,
    salary,
    location,
    link,
  } = data;

  return (
    <div>
      <div
        className="flex flex-wrap gap-4 justify-center items-center">
        <div
          key={id}
          className="w-[280px] h-[270px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between gap-3">
              <img
                src={link_image}
                alt="Company Logo"
                className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
              />
              <div
                className="flex flex-col self-start truncate"
                aria-label="company-label">
                <a href="/jobs/:id">
                  <h1 className="text-lg font-bold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                    {job_title}
                  </h1>
                </a>
                <div className=" flex text-sm gap-1 text-black">
                  <h2 className="flex items-center">
                    <IoLocationOutline /> {location}
                  </h2>
                </div>
              </div>
              <div className="w-50 h-50 p-1 self-start rounded border border-gray-200">
                <LuBookmarkPlus />
              </div>
            </div>
            <div className="pt-5">
              <button className="rounded-md truncate bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                {work_type}
              </button>
            </div>
            <div className="flex flex-row justify-start items-center truncate pt-5">
              <div className="mr-1">
                <FaRegBuilding />
              </div>
              <h3 className="text-xs text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                <a href="/jobs/:id">{company}</a>
              </h3>
            </div>
            <p className="text-[13px] text-[#959595] truncate pt-5">
              Skills: {skills}
            </p>
            <div className="flex gap-x-2 pt-5 justify-between truncate">
              <div className="flex truncate">
                <h1 className="text-md font-bold self-end truncate text-primary">
                  {salary}
                </h1>
                <h2 className="text-xs text-gray-400 self-end">/Month</h2>
              </div>
              <button className="border rounded block p-1 w-[40%] text-[12px] font-medium text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                <a href={link}>Apply Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
