export default function Navbar() {
  return (
    <>
      <div className="academics-nav bg-blue-800 flex-col text-white">
        <a href="#rules" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Rules & Regulations
        </a>
        <a href="#assessment" className="w-full p-[.6rem_1rem] cursor-pointer">
          <span className="px-[.8rem]">{">"}</span>Assessments
        </a>
      </div>
    </>
  );
}
