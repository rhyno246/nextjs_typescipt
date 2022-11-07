import React from "react";

interface Props {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label?: string;
}

const IconMenu = ({ icon: Icon, label }: Props) => {
  return (
    <li className="text-white hover:text-red-500 flex items-center mb-4 md:mb-0 md:mr-10 last-of-type:mr-0">
      <Icon className="h-6 w-6" />
      <span className="ml-3">{label}</span>
    </li>
  );
};

export default IconMenu;
