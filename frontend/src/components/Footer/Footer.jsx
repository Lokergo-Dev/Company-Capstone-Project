import logo1 from "../../assets/images/logo-header.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-20 bg-white text-gray-500 px-8">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row border-b border-gray-300">
        <div className="flex-row">
          <a href="#">
            <img src={logo1} className="py-2" />
          </a>
          <h6 className="py-2">
            Jelajahi ribuan peluang kerja dengan semua <br />
            informasi yang Anda butuhkan, dan kelola
            <br />
            semua lamaran pekerjaan Anda dari awal <br /> menyelesaikan.
          </h6>
          <div className="flex justify-between sm:w-[100px] min-[360px]:justify-start py-2 text-2xl">
            <FaFacebook className="transition ease-in-out delay-50 hover:-translate-y-1.5 duration-300 min-[360px]:mr-2" />
            <FaInstagram className="transition ease-in-out delay-50 hover:-translate-y-1.5 duration-300 min-[360px]:mr-2" />
            <FaTwitter className="transition ease-in-out delay-50 hover:-translate-y-1.5 duration-300" />
          </div>
        </div>
        <div className="flex justify-between sm:text-left sm:w-[500px] min-[360px]:text-center">
          <div className="min-[360px]:mr-5">
            <h6 className="font-bold text-black uppercase pt-2 pb-5 ">
              Company
            </h6>
            <ul className="min-[360px]:text-left">
              <li className="py-2 hover:text-primary delay-150">Testimonial</li>
              <li className="py-2 hover:text-primary delay-150">
                For Jobseeker
              </li>
              <li className="py-2 hover:text-primary delay-150">For Company</li>
            </ul>
          </div>
          <div className="min-[360px]:mr-5">
            <h6 className="font-bold text-black uppercase pt-2 pb-5">
              Product
            </h6>
            <ul className="min-[360px]:text-left">
              <li className="py-2 hover:text-primary delay-150">Career Tips</li>
              <li className="py-2 hover:text-primary delay-150">
                Trending Job
              </li>
              <li className="py-2 hover:text-primary delay-150">
                Bonafide Company
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-black uppercase pt-2 pb-5">
              Resources
            </h6>
            <ul className="min-[360px]:text-left">
              <li className="py-2 hover:text-primary delay-150">FAQ</li>
              <li className="py-2 hover:text-primary delay-150">About Us</li>
              <li className="py-2 hover:text-primary delay-150">Call Center</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-0 mx-auto justify-between sm:flex-row text-center text-gray-500 min-[360px]:flex-row min-[360px]:gap-8 min-[360px]:text-[10px]">
        <p className="py-4">© Copyright Lokergo 2023. All rights reserved</p>
        <a href="#" className="flex justify-end sm:w-[500px] py-4 text-black">
          <h6 className="hover:text-primary delay-150 mr-5 min-[360px]:mr-2">
            Privacy Policy
          </h6>
          <h6 className="hover:text-primary delay-150 mr-5 min-[360px]:mr-2">
            Terms & Conditions
          </h6>
          <h6 className="hover:text-primary delay-150">Cookie Policy</h6>
        </a>
      </div>
    </div>
  );
};

export default Footer;
