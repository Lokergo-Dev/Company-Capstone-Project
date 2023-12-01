import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.svg";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "United States",
    tipe: "Full-Time",
    desc: "Memiliki kemampuan bahasa pemrograman mulai dari HTML, CSS, Javascript, React.JS.",
    company: "Microsoft",
    salary: "$1000",
  },
  {
    id: 2,
    image: logo2,
    title: "Frontend Developer",
    time: "Now",
    location: "Canada",
    tipe: "Full-Time",
    desc: "Memiliki kemampuan bahasa pemrograman mulai dari HTML, CSS, Javascript, React.JS.",
    company: "LinkedIn",
    salary: "$2000",
  },
  {
    id: 3,
    image: logo3,
    title: "UI Design",
    time: "Now",
    location: "Manchester",
    tipe: "Full-Time",
    desc: "Memiliki kemampuan bahasa pemrograman mulai dari HTML, CSS, Javascript, React.JS.",
    company: "Facebook",
    salary: "$1500",
  },
  {
    id: 4,
    image: logo4,
    title: "IT Support",
    time: "Now",
    location: "Indonesia",
    tipe: "Full-Time",
    desc: "Memiliki kemampuan bahasa pemrograman mulai dari HTML, CSS, Javascript, React.JS.",
    company: "Google",
    salary: "$1800",
  },
  {
    id: 5,
    image: logo4,
    title: "IT Support",
    time: "Now",
    location: "Indonesia",
    tipe: "Full-Time",
    desc: "Memiliki kemampuan bahasa pemrograman mulai dari HTML, CSS, Javascript, React.JS.",
    company: "Google",
    salary: "$1800",
  },
  {
    id: 6,
    image: logo4,
    title: "IT Support",
    time: "Now",
    location: "Indonesia",
    tipe: "Full-Time",
    desc: "Memiliki kemampuan bahasa pemrograman mulai dari HTML, CSS, Javascript, React.JS.",
    company: "Google",
    salary: "$1800",
  },
];

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "pengalaman",
    name: "Pengalaman",
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
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
                                {section.options.map((option, optionIdx) => (
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
                                ))}
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
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
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

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
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
              <div className="lg:col-span-3">
                <div className="jobContainer flex gap-8 justify-center flex-wrap items-center">
                  {Data.map(
                    ({
                      id,
                      image,
                      title,
                      time,
                      location,
                      tipe,
                      desc,
                      company,
                      salary,
                    }) => {
                      return (
                        <div
                          key={id}
                          className="w-[280px] h-[340px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
                          <div className="flex">
                            <div className="company flex items-center gap-2">
                              <img
                                src={image}
                                alt="Company Logo"
                                className="w-[25%] p-1.5 rounded border border-gray-200"
                              />
                              <div>
                                <h3 className="text-lg font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                                  {company}
                                </h3>
                                <h6 className="text-sm flex items-end gap-1 text-black">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-6">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                  </svg>
                                  {location}
                                </h6>
                              </div>
                            </div>
                            <div className="p-1 self-start rounded border border-gray-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="pt-5">
                            <button className="rounded-md bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                              {tipe}
                            </button>
                          </div>
                          <span className="flex justify-between items-center gap-4 pt-5">
                            <h1 className="text-[16px] font-semmibold text-color hover:text-primary transition ease-in-out delay-100 duration-300">
                              {title}
                            </h1>
                            <span className="flex items-center text-black gap-1">
                              <BiTimeFive />
                              {time}
                            </span>
                          </span>
                          <p className="text-[13px] text-[#959595] pt-5">
                            {desc}
                          </p>
                          <div className="flex gap-x-5 pt-5">
                            <div className="flex self-end">
                              <span className="text-2xl font-bold self-end text-primary">
                                {salary}
                              </span>
                              <span className="text-md text-gray-400 self-end">
                                /Month
                              </span>
                            </div>
                            <button className="border-2 rounded-md block p-1 w-full text-[14px] font-semibold text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Jobs;
