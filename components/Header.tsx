import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  TvIcon,
  FilmIcon,
  BookOpenIcon,
  QueueListIcon,
  Bars4Icon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import IconMenu from "./IconMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`menu-header list-none flex items-center justify-between space-x-3 md:space-x-10 p-5 ${
        isScrolled && "bg-[#141414]"
      }`}
    >
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          width={130}
          height={130}
        />
      </div>

      <button className="block md:hidden">
        <Bars4Icon className="h-6 w-6" />
      </button>

      <ul className="hidden md:flex">
        <IconMenu icon={HomeIcon} label="Home" />
        <IconMenu icon={TvIcon} label="TV Shows" />
        <IconMenu icon={FilmIcon} label="Movies" />
        <IconMenu icon={BookOpenIcon} label="New & Popular" />
        <IconMenu icon={QueueListIcon} label="My List" />
      </ul>

      <div className="search flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="h-6 w-6 " />
        <p className="hidden lg:inline ">Kids</p>
        <BellIcon className="h-6 w-6 " />
        <Link href="/account">dsaasd</Link>
      </div>
    </header>
  );
};

export default Header;
