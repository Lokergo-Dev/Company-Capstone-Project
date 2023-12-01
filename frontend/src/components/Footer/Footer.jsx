import React from "react";
import logo from "../../assets/images/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-20 bg-white text-gray-500 px-8">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row border-b border-gray-500">
        <div>
          <a href="#">
            <img src={logo} className="py-2" />
          </a>
          <h6 className="py-2">
            Jelajahi ribuan peluang kerja dengan semua <br />
            informasi yang Anda butuhkan, dan kelola
            <br />
            semua lamaran pekerjaan Anda dari awal <br /> menyelesaikan.
          </h6>
          <div className="flex justify-between sm:w-[100px] py-2 text-2xl">
            <FaFacebook className="transition ease-in-out delay-50 hover:-translate-y-1.5 duration-300" />
            <FaInstagram className="transition ease-in-out delay-50 hover:-translate-y-1.5 duration-300" />
            <FaTwitter className="transition ease-in-out delay-50 hover:-translate-y-1.5 duration-300" />
          </div>
        </div>
        <div className="flex justify-between sm:w-[500px]">
          <div>
            <h6 className="font-bold text-black uppercase pt-2 pb-5">
              Company
            </h6>
            <ul>
              <li className="py-2 hover:text-primary delay-150">Testimonial</li>
              <li className="py-2 hover:text-primary delay-150">For Jobseeker</li>
              <li className="py-2 hover:text-primary delay-150">For Company</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-black uppercase pt-2 pb-5">
              Product
            </h6>
            <ul>
              <li className="py-2 hover:text-primary delay-150">Career Tips</li>
              <li className="py-2 hover:text-primary delay-150">Trending Job</li>
              <li className="py-2 hover:text-primary delay-150">Bonafide Company</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-black uppercase pt-2 pb-5">
              Resources
            </h6>
            <ul>
              <li className="py-2 hover:text-primary delay-150">FAQ</li>
              <li className="py-2 hover:text-primary delay-150">About Us</li>
              <li className="py-2 hover:text-primary delay-150">Call Center</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">© Copyright Lokergo 2023. All rights reserved</p>
        <div className="flex justify-between sm:w-[500px] py-4 text-black">
          <h6>Privacy Policy</h6>
          <h6>Terms & Conditions</h6>
          <h6>Cookie Policy</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
