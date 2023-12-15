import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { SlLocationPin } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { LuBookmarkPlus } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { data } from "../../../../backend/data";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import JobsCard from "../../components/Jobs/JobsCard";
import JobsList from "../../components/Jobs/JobsList";

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
  const [search, setSearch] = useState("");

  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    // Ambil 6 data pertama dari JSON lokal
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}>
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="p-5 border rounded-md">
                <p className="my-3 text-lg font-semibold">Cari Pekerjaan</p>
                <div className="w-auto bg-white flex flex-row border rounded-md  justify-between p-[10px] min-[360px]:flex-wrap">
                  <div className="flex md:divide-x max-[390px]:divide-y min-[360px]:flex-wrap">
                    <div className="mr-5 self-center">
                      <div className="flex items-center p-2">
                        <GoSearch className="mr-1 text-gray-500" />
                        <form>
                          <input
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Job...."
                            type="text"
                            className="bg-transparent text-gray-500 focus:outline-none lg:w-[300px] min-[360px]:w-[700px]"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="self-center">
                    <button className="lg:w-auto rounded-md bg-primary px-3.5 py-2.5 text-sm font-reguler text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-hover hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                      <a href="/jobs" className="flex justify-center">
                        Search
                      </a>
                    </button>
                  </div>
                </div>
              </div>
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
                  <div className="flex flex-wrap gap-4 pt-5 justify-center items-center">
                    {visibleData.map((data) => {
                      return <JobsCard key={data.id} data={data} />;
                    })}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="flex flex-wrap gap-4 pt-5 justify-center items-center">
            {visibleData.map((data) => {
              return <JobsCard key={data.id} data={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
