import React from "react";
import {
  HomeIcon,
  BuildingOfficeIcon,
  NewspaperIcon,
  ServerIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import IconMenu from "./IconMenu";

const Menu = () => {
  return (
    <div className="menu-header list-none bg-green-500 py-5">
      <ul className="flex items-center justify-center">
        <IconMenu icon={HomeIcon} label="Home" />
        <IconMenu icon={BuildingOfficeIcon} label="Products" />
        <IconMenu icon={NewspaperIcon} label="News" />
        <IconMenu icon={ServerIcon} label="Services" />
        <IconMenu icon={CreditCardIcon} label="Contacts" />
      </ul>
    </div>
  );
};

export default Menu;
