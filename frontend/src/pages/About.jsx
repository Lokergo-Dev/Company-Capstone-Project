import React from "react";
import aliv from "../assets/images/Aliv.jpg";
import fakhrie from "../assets/images/Fakhrie.jpg";
import yustaf from "../assets/images/Yustaf.jpg";
import tarisha from "../assets/images/tarisha.jpg";
import ismail from "../assets/images/Ismail.jpg";
import revan from "../assets/images/Revan.jpg";

const people = [
  {
    name: "Aldrian Aliv",
    university: "Universitas Bakrie",
    role: "Machine Learning",
    image: aliv,
  },
  {
    name: "Fakhrie Nabil Putera Setiawan",
    university: "Universitas Komputer Indonesia",
    role: "Machine Learning",
    image: fakhrie,
  },
  {
    name: "Yustaf Kusuma Abi Al Yasid",
    university: "Institut Teknologi Sumatera",
    role: "Machine Learning",
    image: yustaf,
  },
  {
    name: "Tarisha Andhera",
    university: "Universitas Komputer Indonesia",
    role: "Machine Learning",
    image: tarisha,
  },
  {
    name: "Ismail Abdurrahim",
    university: "STT Terpadu Nurul Fikri",
    role: "Cloud Computing",
    image: ismail,
  },
  {
    name: "Revansa Helsa Kuswana",
    university: "Institut Teknologi Sumatera",
    role: "Cloud Computing",
    image: revan,
  },
];

const About = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Temui tim kami
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-7">
                <img
                  className="h-20 w-20 rounded-full"
                  src={person.image}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1.5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <h4 className="text-sm leading-6 text-gray-500">
                      {person.university}
                    </h4>
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1.5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    <h4 className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </h4>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
