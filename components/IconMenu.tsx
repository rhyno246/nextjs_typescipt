import React from "react";

interface Props {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label?: string;
}

const IconMenu = ({ icon: Icon, label }: Props) => {
  return (
    <li className="text-white hover:text-yellow-200 flex items-center mr-10">
      <Icon className="h-6 w-6" />
      <span className="ml-3">{label}</span>
    </li>
  );
};

export default IconMenu;
