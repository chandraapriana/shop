import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const Header = ({
  title,
  setSidebar,
}: {
  title: string;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full h-10 mb-4 border-gray-400 border-b-[1px] flex justify-between items-center">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex flex-row">
        <Image
          src="/assets/icons/ic_bars.svg"
          width={22}
          height={22}
          alt="btn-sidebar"
          className="lg:hidden mr-2"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <div className="w-7 h-7 rounded-full bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Header;
