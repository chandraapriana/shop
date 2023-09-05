import Image from "next/image";
import React, { useMemo } from "react";
import ButtonSidebar from "./ButtonSidebar";

const Sidebar = () => {
  const routes = useMemo(
    () => [
      {
        route: "/",
        text: "Product",
        icon: "/assets/icons/ic_box.svg",
      },
      {
        route: "/carts",
        text: "Carts",
        icon: "/assets/icons/ic_cart.svg",
      },
    ],
    []
  );
  return (
    <div className="md:w-28  bg-white  h-[95%] mr-6 relative rounded-2xl drop-shadow-lg flex flex-col items-center">
      <div className="w-full h-16 flex justify-center items-center  border-gray-400 border-b-[1px] border-solid">
        <Image
          src="/assets/icons/ic_inventory.svg"
          width={42}
          height={42}
          alt="icon-inventory"
        />
      </div>
      {routes.map((route) => (
        <ButtonSidebar key={route.text} {...route} />
      ))}
    </div>
  );
};

export default Sidebar;
