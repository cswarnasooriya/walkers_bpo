import { useState } from "react";
import Logo from "../../assets/logo-01.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md ">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[10px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">i n f o @ m t d w a l k e r s . c o m </p>
              <p className="text-lg font-semibold">+( 94 )  112 401 951 </p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-20" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-16 ">
                <li className="py-6 text-[20px] font-semibold">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-6 text-[20px] font-semibold">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="py-6 text-[20px] font-semibold">
                  <NavLink to="/services" activeClassName="active">
                    Services
                  </NavLink>
                </li>
                <li className="py-6 text-[20px] font-semibold">
                  <NavLink to="/best-places" activeClassName="active">
                    Blog
                  </NavLink>
                </li>
                <li className="py-6 text-[20px] font-semibold">
                  <NavLink to="/projects" activeClassName="active">
                   Projects
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex text-[20px] h-[82px] items-center gap-[4px] font-semibold"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="hover:bg-bg-gradient-to-r bg-cyan-400 hover:from-secondary hover:bg-primary transition-all duration-400 text-black font-bold px-4 py-4 rounded-full border-2 border-black text-sm"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Contact Now
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
