import { useState } from "react";
import Hug from "../../assets/icons/hug";
import logo from "../../assets/images/logo.svg";
import MobileMenu from "../mobile-menu/mobile-menu";
import Navbar from "../navbar";

export default function Header() {
  const [togglemenu, setToggleMenu] = useState(false);

  const openMobileMenuHandler = () => {
    setToggleMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <div className="flex justify-between h-[68px] items-center p-4 lg:px-20 lg:py-4">
      <div className="lg:pl-8">
        <img src={logo} alt="logo" />
      </div>
      <div className="lg:hidden">
        <Hug onClick={openMobileMenuHandler} />
      </div>
      <div className="hidden lg:flex justify-center items-center pr-8">
        <Navbar />
        <button className="bg-gray900 p-1 rounded-xl text-sm text-default w-full px-4 py-1.5">
          Download CV
        </button>
      </div>

      {togglemenu && <MobileMenu onClick={closeMobileMenuHandler} />}
    </div>
  );
}
