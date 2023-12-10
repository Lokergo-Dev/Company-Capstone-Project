import React, { useState, useEffect } from "react";
import all from "../assets/images/all.svg";
import management from "../assets/images/management.svg";
import finance from "../assets/images/finance.svg";
import human from "../assets/images/human.svg";
import retail from "../assets/images/retail.svg";
import content from "../assets/images/content.svg";
import { IoLocationOutline } from "react-icons/io5";
import { LuBookmarkPlus } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { data } from "../../../backend/data";
import value from "../assets/images/value.png";
import hero from "../assets/images/hero.png";

const stats = [
  { name: "Jobs", value: "550K" },
  { name: "Startups", value: "10K" },
  { name: "Recruitment", value: "345K" },
];
const bidang = [
  { id: 1, nama: "All", image: all },
  { id: 2, nama: "Management", image: management },
  { id: 3, nama: "Finance", image: finance },
  { id: 4, nama: "Human Resource", image: human },
  { id: 5, nama: "Retail & Products", image: retail },
  { id: 6, nama: "Content", image: content },
];

const Home = () => {
  const [search, setSearch] = useState("");

  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    // Ambil 6 data pertama dari JSON lokal
    const initialData = data.slice(0, 6);
    setVisibleData(initialData);
  }, []);

  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
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

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="my-5 lg:max-w-lg">
                  <h2 className="text-base text-center font-reguler leading-7 inline-block rounded border-transparent px-4 py-1.5 bg-[#FFF1E0] text-[#DB9B10]">
                    🏅 Platform pencarian kerja terkemuka di dunia
                  </h2>
                  <h1 className="text-5xl mt-6 font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Temukan<span className="text-primary"> Pekerjaan </span>
                    yang Anda Butuhkan Sekarang
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Platform kami memudahkan individu berbakat seperti Anda
                    untuk menemukan lowongan pekerjaan di berbagai industri dan
                    sektor
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
                            className="gb-white text-gray-500 rounded-[3px] lg:w-[5.5rem] min-[360px]:w-[14rem]">
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
                            className="gb-white text-gray-500 rounded-[3px] lg:w-[6rem] min-[360px]:w-[14rem]">
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
                              className="bg-transparent text-gray-500 focus:outline-none lg:w-[50px] min-[360px]:w-[210px]"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="self-center">
                      <button className="lg:w-[70px] min-[360px]:w-[290px] rounded-md bg-primary px-3.5 py-2.5 text-sm font-reguler text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-hover hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                        <a href="/jobs" className="flex justify-center">
                          Search
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={hero}
                alt="Product screenshot"
                className="w-[48rem] max-w-none  ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ===== PERFORMANCE SECTION ===== */}
      <section className="performance">
        <div className="relative isolate overflow-hidden bg-darkGray py-20 sm:py-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:px-20 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl mx-auto sm:static font-bold tracking-tight text-black text-center">
                <span className="text-primary">Kinerja produktivitas </span>kami
              </h2>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <dl className="grid grid-cols-3 divide-x-2 divide-gray-300 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col px-5">
                    <dt className="text-base leading-7 text-black">
                      {stat.name}
                    </dt>
                    <dd className="text-2xl pt-4 font-bold leading-9 tracking-tight text-black">
                      <span className="text-primary font-semibold text-2xl">
                        +{" "}
                      </span>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      {/* ===== VALUE SECTION ===== */}
      <section className="value">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl sm:px-10 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true">
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#3C65F5" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-base text-center font-reguler leading-7 inline-block rounded border-transparent px-4 py-1.5 bg-[#FFF1E0] text-[#DB9B10]">
                  🔎 Temukan pekerjaan
                </h2>
                <h2 className="text-3xl mt-6 font-bold tracking-tight text-white sm:text-4xl">
                  Satu langkah mudah untuk mengubah
                  <span className="text-primary"> masa depanmu.</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Anda dapat menemukan berbagai solusi hanya dengan mengakses
                  platform kami. Karena kami berkomitmen untuk menjaganya
                  kualitas layanan pengguna
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-hover hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                    Memulai
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                    Temukan Pekerjaan <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-0 w-[58rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src={value}
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== CLIENT SECTION ===== */}
      <section className="client">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Dipercaya oleh perusahaan paling inovatif di dunia
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-40 hover:opacity-100 transition delay-150 ease-in-out delay-50 hover:-translate-y-2 duration-300"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-40 hover:opacity-100 transition delay-150 ease-in-out delay-50 hover:-translate-y-2 duration-300"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-40 hover:opacity-100 transition delay-150 ease-in-out delay-50 hover:-translate-y-2 duration-300"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 opacity-40 hover:opacity-100 transition delay-150 ease-in-out delay-50 hover:-translate-y-2 duration-300"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 opacity-40 hover:opacity-100 transition delay-150 ease-in-out delay-50 hover:-translate-y-2 duration-300"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ===== JOB SECTION ===== */}
      <section className="job">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="text-center mx-auto">
            <h2 className="text-base font-reguler leading-7 inline-block rounded border-transparent px-4 py-1.5 bg-[#FFF1E0] text-[#DB9B10]">
              🔎 Jelajahi Pekerjaan
            </h2>
            <h2 className="text-3xl mt-6 font-bold tracking-tight text-black sm:text-4xl">
              Pekerjaan <span className="text-primary">unggulan</span> minggu
              ini.
            </h2>
            <p className="mt-6 p text-lg leading-8 text-gray-500">
              Temukan lebih dari 500 ribu lowongan kerja impian Anda.
            </p>
          </div>
          <div className="text-center mt-10">
            <div className="inline-block">
              <ul role="" className="flex flex-wrap justify-center gap-5">
                {bidang.map((tipe) => (
                  <li key={tipe.id} className="">
                    <button className="font-semibold border-[2px] rounded-[10px] block p-[10px] w- text-[14px] hover:border-primary hover:text-primary transition ease-in-out delay-50 hover:-translate-y-1.5 duration-300">
                      <a className="border-5 flex">
                        <img src={tipe.image} className="w-[20px] mr-2" />
                        {tipe.nama}
                      </a>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 lex-wrap">
            <div className="flex flex-wrap gap-5 px-8 pt-5 justify-center items-center">
              {visibleData.map((item) => {
                return (
                  <>
                    <div>
                      <div
                        key={item.id}
                        className="w-[280px] h-[280px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
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
                              <h3 className="text-md text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                                {item.company}
                              </h3>
                              <div className=" flex text-sm gap-1 text-black">
                                <h2 className="flex items-center">
                                  <IoLocationOutline /> {item.location}
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
                          <div className="flex-col justify-between truncate items-center gap-4 pt-5">
                            <a href="">
                              <h1 className="text-[16px] font-semmibold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                                {item.job_title}
                              </h1>
                            </a>
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

          <div className="text-center py-10">
            <button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-reguler text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-hover hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
              <a href="/jobs" className="flex items-center">
                Selengkapnya
                <FaArrowRightLong className="ml-2" />
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* ===== SUBSCRIBES SECTION ===== */}
      <section className="subscribe">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-10 lg:py-10">
            <img
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20 "
              src="https://img.freepik.com/free-vector/white-irregular-organic-lines-seamless-pattern-blue-background_1409-4447.jpg?w=1480&t=st=1701263186~exp=1701263786~hmac=4fdb5b3f69b67936f21dfee5a51d1f6ef8e33569b92beb3342021e29631f1078"
              alt=""
            />
            <div className="mx-auto grid gap-y-6 max-w-2xl grid-cols-1 gap-x-40 lg:max-w-none lg:grid-cols-2">
              <div className="mx-auto my-auto max-w-2xl lg:mx-0">
                <h6 className="text-3xl mx-auto sm:static font-bold tracking-tight text-black text-left">
                  Mari bergabung bersama kami dan jangan lewatkan
                  <span className="text-primary"> lowongan kerja </span> terbaru
                  kami.
                </h6>
              </div>
              <div className="max-w-xl my-auto lg:max-w-lg">
                <p className="text-sm leading-4 text-gray-500 text-left">
                  Dengan bergabung bersama kami, Anda telah mengambil keputusan
                  yang bijaksana pencarian kerja Anda lebih transparan, mudah
                  dan cepat
                </p>
                <div className="mt-6 gap-x-6 flex max-w-m rounded-md bg-white p-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto px-3.5 py-2 text-black sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                    Berlangganan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
