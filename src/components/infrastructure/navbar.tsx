export default function Navbar() {
  return (
    <>
      <div className="infra-nav bg-blue-800 flex-col text-white">
        <a href="#library" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Library
        </a>
        <a href="#reception" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Reception
        </a>
        <a href="#science" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Science Labs
        </a>
        <a href="#maths" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Mathematics Lab
        </a>
        <a href="#computer" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Computer Lab
        </a>
        <a href="#classroom" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Classroom
        </a>
      </div>
    </>
  );
}
