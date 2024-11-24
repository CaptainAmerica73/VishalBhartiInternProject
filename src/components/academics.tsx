import Rules from "./academics/rules";
import Navbar from "./navbar";
import AcademicsNavbar from "./academics/navbar";
import Assessment from "./academics/assessment";

export default function Academics() {
  return (
    <div>
      <Navbar />
      <div className="flex w-[100vw] min-h-[100vh]">
        <AcademicsNavbar />
        <div className="academics-content min-h-[100dvh] flex flex-col">
          <Rules />
          <Assessment />
          <div className="text-black text-center py-[1rem]">
            Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
