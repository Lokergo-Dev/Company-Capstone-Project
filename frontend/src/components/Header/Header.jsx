import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo1 from "../../assets/images/logo-header.svg";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

function LogoutButton({ onClick }) {
  const handleLogout = () => {
    sessionStorage.clear(); // Memanggil fungsi clear untuk menghapus semua data dari sessionStorage
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      window.location.href = "/login";
    }, 300);
  };

  return <button className="bg-primary py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[8px] hover:bg-hover hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300"
  onClick={handleLogout}>Logout</button>;
}


const navLinks = [
  {
    path: "/Home",
    display: "Home",
  },
  {
    path: "/jobs",
    display: "Jobs",
  },
  {
    path: "/about",
    display: "About Us",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      className="sticky lg:px-8 min-[360px]:px-0 top-0 header flex items-center"
      ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* === logo ===*/}
          <a href="/Home">
            <img src={logo1} alt="" />
          </a>

          {/* === menu ===*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primary text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[600]"
                    }>
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* === nav right ===*/}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            {sessionStorage.getItem("token") ? (
              <LogoutButton />
            ) : (
              <Link to="/login">
                <button className="bg-primary py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[8px] hover:bg-hover hover:drop-shadow-lg transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                  Masuk
                </button>
              </Link>
            )}

            

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
