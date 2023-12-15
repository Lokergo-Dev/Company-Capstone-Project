import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";

const JobsDetails = () => {
  return (
    <section>
      <div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 min-[360px]:gap-y-6 sm:gap-y-20 lg:mx-[90px] lg:max-w-none lg:grid-cols-2">
          <div key="" className="w-auto p-5">
            <div className="flex flex-col gap-4 justify-between">
              <img
                src=""
                alt="Company Logo"
                className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
              />
              <div className="flex-col">
                <p className="text-2xl font-bold">Software engineer</p>
                <h3>company</h3>
                <h3 className="font-semibold">Jakarta</h3>
              </div>
              <div className="flex">
                <h3 className="flex gap-2">
                  <PiSuitcaseSimpleBold className="self-center" />
                  Full-time
                </h3>
              </div>
              <div>
                <h3 className="flex gap-2">
                  <MdOutlineAttachMoney className="self-center" />
                  Gaji
                </h3>
              </div>
              <button className="border rounded block p-1 w-[100%] text-[12px] font-medium bg-primary text-white border-primary">
                <a href="/jobs">Apply Now</a>
              </button>
            </div>
          </div>
          <div
            aria-label="desc"
            className="w-full p-[20px] border-[1px] bg-gray-200 rounded-md">
            <p className="mb-4 font-bold">Deskripsi</p>
            <h2 className="my-2">Experience: </h2>
            <h2 className="my-2">Study requirement:</h2>
            <h2 className="my-2">Skills:</h2>
            <h6 className="pl-2">reactjs</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsDetails;
