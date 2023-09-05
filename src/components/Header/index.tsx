const Header = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-10 mb-4 border-gray-400 border-b-[1px] flex justify-between items-center">
      <h1>{title}</h1>
      <div className="w-7 h-7 rounded-full bg-gray-500"></div>
    </div>
  );
};

export default Header;
