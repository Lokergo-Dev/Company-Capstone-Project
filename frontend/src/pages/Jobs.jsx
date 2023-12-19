import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { SlLocationPin } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { LuBookmarkPlus } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { data } from "../../../backend/data";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import axios from "axios";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];
const filters = [
  {
    id: "pengalaman",
    name: "Pengalaman Kerja",
    options: [
      { value: "fresh Graduate", label: "Fresh Graduate", checked: false },
      { value: "entry level", label: "Entry Level", checked: false },
      { value: "associate", label: "Associate", checked: true },
      { value: "mid senior level", label: "Mid Senior Level", checked: false },
      { value: "executive", label: "Executive", checked: false },
    ],
  },
  {
    id: "pekerjaan",
    name: "Jenis pekerjaan",
    options: [
      { value: "full-time", label: "Full-time", checked: false },
      { value: "part-time", label: "Part-time", checked: false },
      { value: "internship", label: "Internship", checked: false },
      { value: "freelance", label: "Freelance", checked: false },
    ],
  },
  {
    id: "lokasi",
    name: "Jenis lokasi",
    options: [
      { value: "remote", label: "remote", checked: false },
      { value: "hybrid", label: "hybrid", checked: false },
      { value: "onsite", label: "onsite", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Jobs = () => {  
  const [userData, setUserData] = useState([
    sessionStorage.getItem("user")
  ]);

  const [jobsData, setJobsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cleanedData, setCleanedData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8090/getJobs", userData)
      .then((res) => {
        console.log(res.data);
        setJobsData(res.data);
        
        // console.log(jobsData);
        // const cleanedData = res.data.map(item => ({
        //   id: item.id,
        //   job_id: item.job_id.trim(),
        //   job_title: item.job_title.trim(),
        //   company: item.company.trim(),
        //   category: item.category.trim(),
        //   location: item.location.trim(),
        //   work_type: item.work_type.trim(),
        //   working_type: item.working_type.trim(),
        //   salary: item.salary.trim(),
        //   experience: item.experience.trim(),
        //   skills: item.skills.trim(),
        //   study_requirement: item.study_requirement.trim(),
        //   description: item.description.trim(),
        //   link: item.link.trim(),
        //   link_image: item.link_image.trim()
        // }));

        // setCleanedData(cleanedData);
        // console.log(cleanedData);
        setIsLoading(false);
        
      })
      .catch((error) => {
        console.log(error.response);
        setIsLoading(false);
      });
  }, []);

  const [search, setSearch] = useState("");

  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    
    const initialData = data.slice(0, 6);
    setVisibleData(initialData);
  }, []);

  const [selectedValue, setSelectedValue] = useState("");
  const [dataSet] = useState([
    { id: "1", nama: "ACEH" },
    { id: "2", nama: "SUMATERA UTARA" },
    { id: "3", nama: "SUMATERA BARAT" },
    { id: "4", nama: "RIAU" },
    { id: "5", nama: "JAMBI" },
    { id: "6", nama: "SUMATERA SELATAN" },
    { id: "7", nama: "BENGKULU" },
    { id: "8", nama: "LAMPUNG" },
    { id: "9", nama: "KEPULAUAN BANGKA BELITUNG" },
    { id: "10", nama: "KEPULAUAN RIAU" },
    { id: "11", nama: "DKI JAKARTA" },
    { id: "12", nama: "JAWA BARAT" },
    { id: "13", nama: "JAWA TENGAH" },
    { id: "14", nama: "DAERAH ISTIMEWA YOGYAKARTA" },
    { id: "15", nama: "JAWA TIMUR" },
    { id: "16", nama: "BANTEN" },
    { id: "17", nama: "BALI" },
    { id: "18", nama: "NUSA TENGGARA BARAT" },
    { id: "19", nama: "NUSA TENGGARA TIMUR" },
    { id: "20", nama: "KALIMANTAN BARAT" },
    { id: "21", nama: "KALIMANTAN TENGAH" },
    { id: "22", nama: "KALIMANTAN SELATAN" },
    { id: "23", nama: "KALIMANTAN TIMUR" },
    { id: "24", nama: "KALIMANTAN UTARA" },
    { id: "25", nama: "SULAWESI UTARA" },
    { id: "26", nama: "SULAWESI TENGAH" },
    { id: "27", nama: "SULAWESI SELATAN" },
    { id: "28", nama: "SULAWESI TENGGARA" },
    { id: "29", nama: "GORONTALO" },
    { id: "30", nama: "SULAWESI BARAT" },
    { id: "31", nama: "MALUKU" },
    { id: "32", nama: "MALUKU UTARA" },
    { id: "33", nama: "PAPUA" },
    { id: "34", nama: "PAPUA BARAT" },
  ]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      {/* ===== BANNER SEARCH ===== */}
      <section>
        <div>
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="top-[200px] mx-auto max-w-2xl rounded-3xl bg-darkGray ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 text-center lg:flex-auto">
                <div className="lg:mx-40 lg:my-6 min-[360px]:mx-0 min-[360px]:my-0">
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Cari <span className="text-primary">pekerjaan</span> yang
                    Kamu inginkan
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero repellendus magni, atque delectus molestias quis?
                  </p>
                  <div className="bg-white flex flex-row rounded-md shadow-md justify-between mt-12 p-[10px] min-[360px]:flex-wrap">
                    <div className="flex md:divide-x max-[390px]:divide-y min-[360px]:flex-wrap">
                      <div className="mr-5 self-center">
                        <form className="flex items-center p-2">
                          <PiSuitcaseSimple className="mr-1 text-gray-500" />
                          <select
                            value={selectedValue}
                            onChange={handleSelectChange}
                            name=""
                            id="relevance"
                            className="gb-white text-gray-500 rounded-[3px] lg:w-[10rem] min-[360px]:w-[14rem]">
                            <option value="">Category</option>
                            {data.map((data) => (
                              <option key={data.id} value={data.category}>
                                {data.category}
                              </option>
                            ))}
                          </select>
                        </form>
                      </div>
                      <div className="mr-5 self-center">
                        <form className="flex items-center p-2">
                          <SlLocationPin className="mr-1 text-gray-500" />
                          <select
                            value={selectedValue}
                            onChange={handleSelectChange}
                            name=""
                            id="relevance"
                            className="gb-white text-gray-500 rounded-[3px] lg:w-[10rem] min-[360px]:w-[14rem]">
                            <option value="">Location</option>
                            {dataSet.map((item) => (
                              <option key={item.id} value={item.nama}>
                                {item.nama}
                              </option>
                            ))}
                          </select>
                        </form>
                      </div>
                      <div className="mr-5 self-center">
                        <div className="flex items-center p-2">
                          <GoSearch className="mr-1 text-gray-500" />
                          <form>
                            <input
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Search Job...."
                              type="text"
                              className="bg-transparent text-gray-500 focus:outline-none lg:w-[140px] min-[360px]:w-[210px]"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="self-center">
                      <button className="lg:w-[120px] min-[360px]:w-[260px] rounded-md bg-primary px-3.5 py-2.5 text-sm font-reguler text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-hover hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                        <a href="/jobs" className="flex justify-center">
                          Search
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== FILTER JOBS ===== */}
          <div className="bg-white">
            <div>
              {/* Mobile filter dialog */}
              <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-40 lg:hidden"
                  onClose={setMobileFiltersOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full">
                      <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                          <h2 className="text-lg font-medium text-gray-900">
                            Filters
                          </h2>
                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            onClick={() => setMobileFiltersOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200">
                          {filters.map((section) => (
                            <Disclosure
                              as="div"
                              key={section.id}
                              className="border-t border-gray-200 px-4 py-6">
                              {({ open }) => (
                                <>
                                  <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                      <span className="font-medium text-gray-900">
                                        {section.name}
                                      </span>
                                      <span className="ml-6 flex items-center">
                                        {open ? (
                                          <MinusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <PlusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </h3>
                                  <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                      {section.options.map(
                                        (option, optionIdx) => (
                                          <div
                                            key={option.value}
                                            className="flex items-center">
                                            <input
                                              id={`filter-mobile-${section.id}-${optionIdx}`}
                                              name={`${section.id}[]`}
                                              defaultValue={option.value}
                                              type="checkbox"
                                              defaultChecked={option.checked}
                                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                              className="ml-3 min-w-0 flex-1 text-gray-500">
                                              {option.label}
                                            </label>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>

              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Rekomendasi pekerjaan untuk anda
                  </h1>

                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <a
                                    href={option.href}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900"
                                        : "text-gray-500",
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm"
                                    )}>
                                    {option.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <button
                      type="button"
                      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                      <span className="sr-only">View grid</span>
                      <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}>
                      <span className="sr-only">Filters</span>
                      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <section
                  aria-labelledby="products-heading"
                  className="pb-24 pt-6">
                  <h2 id="products-heading" className="sr-only">
                    Products
                  </h2>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* Filters */}
                    <form className="hidden lg:block">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-b border-gray-200 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center">
                                      <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600">
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>

                    {/* Jobs grid */}
                    <div
                      aria-label="card section"
                      className="lg:col-span-3 flex flex-col gap-5">
                      <div
                        aria-label="user profile recomendation"
                        className="border-[1px] bg-white rounded-md">
                        <div className="flex justify-between">
                          <div className="px-3 pt-5">
                            <h1 className="text-xl font-semibold px-1">
                              Rekomendasi Pekerjaan untuk Anda
                            </h1>
                            <p className="text-sm px-1 text-gray-500">
                              Berdasarkan profil Anda
                            </p>
                          </div>
                          <div className="self-center pr-4 pt-5">
                            <a
                              href="/jobs"
                              className="flex justify-center items-center">
                              <p className="text-md text-center font-semibold text-primary">
                                Lihat Semua
                              </p>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-4 pt-5 pb-5 justify-center items-center">
                            {visibleData.map((item) => {
                              return (
                                <>
                                  <div>
                                    <div
                                      key={item.id}
                                      className="w-[280px] h-[270px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
                                      <div className="flex flex-col justify-between">
                                        <div className="flex justify-between gap-3">
                                          <img
                                            src={item.link_image}
                                            alt="Company Logo"
                                            className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
                                          />
                                          <div
                                            className="flex flex-col self-start truncate"
                                            aria-label="company-label">
                                            <a href="">
                                              <h1 className="text-lg font-bold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                                                {item.job_title}
                                              </h1>
                                            </a>
                                            <div className=" flex text-sm gap-1 text-black">
                                              <h2 className="flex items-center">
                                                <IoLocationOutline />{" "}
                                                {item.location}
                                              </h2>
                                            </div>
                                          </div>
                                          <div className="w-50 h-50 p-1 self-start rounded border border-gray-200">
                                            <LuBookmarkPlus />
                                          </div>
                                        </div>
                                        <div className="pt-5">
                                          <button className="rounded-md truncate bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                                            {item.work_type}
                                          </button>
                                        </div>
                                        <div className="flex flex-row justify-start items-center truncate pt-5">
                                          <div className="mr-1">
                                            <FaRegBuilding />
                                          </div>
                                          <h3 className="text-xs text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                                            {item.company}
                                          </h3>
                                        </div>
                                        <p className="text-[13px] text-[#959595] truncate pt-5">
                                          Skills: {item.skills}
                                        </p>
                                        <div className="flex gap-x-2 pt-5 justify-between">
                                          <div className="flex truncate">
                                            <h1 className="text-md font-bold self-end truncate text-primary">
                                              {item.salary}
                                            </h1>
                                            <h2 className="text-xs text-gray-400 self-end">
                                              /Month
                                            </h2>
                                          </div>
                                          <button className="border rounded block p-1 w-[40%] text-[12px] font-medium text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                                            <a href="/jobs">Apply Now</a>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div
                        aria-label="location recomendation"
                        className="border-[1px] bg-white rounded-md">
                        <div className="flex justify-between">
                          <div className="px-3 pt-5">
                            <h1 className="text-xl font-semibold px-1">
                              Pekerjaan di Sekitar Anda
                            </h1>
                            <p className="text-sm px-1 text-gray-500">
                              Berdasarkan lokasi Anda
                            </p>
                          </div>
                          <div className="self-center pr-4 pt-5">
                            <a
                              href="/jobs"
                              className="flex justify-center items-center">
                              <p className="text-md text-center font-semibold text-primary">
                                Lihat Semua
                              </p>
                            </a>
                          </div>
                        </div>
                        <div>
                        <div className="flex flex-wrap gap-4 pt-5 pb-5 justify-center items-center">
                            {visibleData.map((item) => {
                              return (
                                <>
                                  <div>
                                    <div
                                      key={item.id}
                                      className="w-[280px] h-[270px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
                                      <div className="flex flex-col justify-between">
                                        <div className="flex justify-between gap-3">
                                          <img
                                            src={item.link_image}
                                            alt="Company Logo"
                                            className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
                                          />
                                          <div
                                            className="flex flex-col self-start truncate"
                                            aria-label="company-label">
                                            <a href="">
                                              <h1 className="text-lg font-bold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                                                {item.job_title}
                                              </h1>
                                            </a>
                                            <div className=" flex text-sm gap-1 text-black">
                                              <h2 className="flex items-center">
                                                <IoLocationOutline />{" "}
                                                {item.location}
                                              </h2>
                                            </div>
                                          </div>
                                          <div className="w-50 h-50 p-1 self-start rounded border border-gray-200">
                                            <LuBookmarkPlus />
                                          </div>
                                        </div>
                                        <div className="pt-5">
                                          <button className="rounded-md truncate bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                                            {item.work_type}
                                          </button>
                                        </div>
                                        <div className="flex flex-row justify-start items-center truncate pt-5">
                                          <div className="mr-1">
                                            <FaRegBuilding />
                                          </div>
                                          <h3 className="text-xs text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                                            {item.company}
                                          </h3>
                                        </div>
                                        <p className="text-[13px] text-[#959595] truncate pt-5">
                                          Skills: {item.skills}
                                        </p>
                                        <div className="flex gap-x-2 pt-5 justify-between">
                                          <div className="flex truncate">
                                            <h1 className="text-md font-bold self-end truncate text-primary">
                                              {item.salary}
                                            </h1>
                                            <h2 className="text-xs text-gray-400 self-end">
                                              /Month
                                            </h2>
                                          </div>
                                          <button className="border rounded block p-1 w-[40%] text-[12px] font-medium text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                                            <a href="/jobs">Apply Now</a>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div
                        aria-label="location recomendation"
                        className="border-[1px] bg-white rounded-md">
                        <div className="flex justify-between">
                          <div className="px-3 pt-5">
                            <h1 className="text-xl font-semibold px-1">
                              Rekomendasi Pekerjaan Lainnya
                            </h1>
                            <p className="text-sm px-1 text-gray-500">
                              Berdasarkan profil dan riwayat pencarian Anda
                            </p>
                          </div>
                          <div className="self-center pr-4 pt-5">
                            <a
                              href="/jobs"
                              className="flex justify-center items-center">
                              <p className="text-md text-center font-semibold text-primary">
                                Lihat Semua
                              </p>
                            </a>
                          </div>
                        </div>
                        <div>
                        <div className="flex flex-wrap gap-4 pt-5 pb-5 justify-center items-center">
                            {visibleData.map((item) => {
                              return (
                                <>
                                  <div>
                                    <div
                                      key={item.id}
                                      className="w-[280px] h-[270px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
                                      <div className="flex flex-col justify-between">
                                        <div className="flex justify-between gap-3">
                                          <img
                                            src={item.link_image}
                                            alt="Company Logo"
                                            className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
                                          />
                                          <div
                                            className="flex flex-col self-start truncate"
                                            aria-label="company-label">
                                            <a href="">
                                              <h1 className="text-lg font-bold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                                                {item.job_title}
                                              </h1>
                                            </a>
                                            <div className=" flex text-sm gap-1 text-black">
                                              <h2 className="flex items-center">
                                                <IoLocationOutline />{" "}
                                                {item.location}
                                              </h2>
                                            </div>
                                          </div>
                                          <div className="w-50 h-50 p-1 self-start rounded border border-gray-200">
                                            <LuBookmarkPlus />
                                          </div>
                                        </div>
                                        <div className="pt-5">
                                          <button className="rounded-md truncate bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                                            {item.work_type}
                                          </button>
                                        </div>
                                        <div className="flex flex-row justify-start items-center truncate pt-5">
                                          <div className="mr-1">
                                            <FaRegBuilding />
                                          </div>
                                          <h3 className="text-xs text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                                            {item.company}
                                          </h3>
                                        </div>
                                        <p className="text-[13px] text-[#959595] truncate pt-5">
                                          Skills: {item.skills}
                                        </p>
                                        <div className="flex gap-x-2 pt-5 justify-between">
                                          <div className="flex truncate">
                                            <h1 className="text-md font-bold self-end truncate text-primary">
                                              {item.salary}
                                            </h1>
                                            <h2 className="text-xs text-gray-400 self-end">
                                              /Month
                                            </h2>
                                          </div>
                                          <button className="border rounded block p-1 w-[40%] text-[12px] font-medium text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                                            <a href="/jobs">Apply Now</a>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
