import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./menu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const responsiveMenu = [
  { name: "Empresa", target: "#empresa" },
  { name: "Informacion", target: "#info" },
];

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  console.log(menu);
  return (
    <nav className=" flex items-center justify-between bg-white w-full h-24  ">
      <div className="ml-6">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/594/594311.png"
          alt=""
          width={64}
          height={64}
        />
      </div>

      <div>
        <div className="flex justify-center text-lg ">
          <button className="hidden lg:block lg:mx-5">
            <Link href="/#footer">
              <a className=" text-orangee">HOME</a>
            </Link>
          </button>
          <button className="hidden lg:block lg:mx-5 ">
            <h1>PAGES</h1>
          </button>
          <button className="hidden lg:block lg:mx-5">
            <h1>PORTFOLIO</h1>
          </button>
          <button className="hidden lg:block lg:mx-5">
            <h1>BLOG</h1>
          </button>
          <button className="hidden lg:block lg:mx-5">
            <h1>CONTACT US</h1>
          </button>
        </div>
      </div>
      <div className="flex justify-end mr-10 text-xl">
        <button className="hidden lg:block lg:mx-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={() => handleMenu} className="block lg:hidden ">
          <FontAwesomeIcon icon={faBars} />
        </button>
        {menu && <Menu />}
      </div>
    </nav>
  );
};
// onClick={() => setMenu(false)}
