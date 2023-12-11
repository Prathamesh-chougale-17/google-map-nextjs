import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "../ThemeChanger";
import HeroImage from "@/public/truck.png";
import NavbarDropdown from "./NavbarDropdown";
import NavbarLogin from "./NavbarLogin";

const FixedNavbar = () => {
  return (
    <nav className="flex fixed top-0 z-50 w-full border-b-2 border-[#33353F] bg-opacity-100 dark:border-b-gray-600 py-4 dark:bg-[#121212] bg-white">
      <div className="flex justify-between mx-0 w-full max-w-screen-2xl px-6 sm:px-8">
        <div>
          <Link href="/">
            <Image
              priority={false}
              src={HeroImage}
              alt="logo"
              className="lg:h-14 h-10 w-auto dark:invert-0"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-3 max-md:hidden md:gap-x-3 items-center">
            <li className="body-text px-1 text-gradient_blue-purple font-bold">
              <Link className="text-xl" href="/">
                Home
              </Link>
            </li>
            <li className="body-text px-1 text-gradient_blue-purple font-bold">
              <Link className="text-xl" href="/weather">
                Weather
              </Link>
            </li>
            <li className="body-text px-1 text-gradient_blue-purple font-bold">
              <Link className="text-xl" href="/maps">
                Maps
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
            <li className="ml-2">
              <NavbarLogin />
            </li>
          </ul>
          <ul className="flex md:hidden">
            <li>
              <NavbarDropdown />
            </li>
            <li className="pl-2">
              <ThemeSwitcher />
            </li>
            <li className="pl-2">
              <NavbarLogin />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FixedNavbar;
