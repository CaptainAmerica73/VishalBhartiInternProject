import Classroom from "./infrastructure/classroom";
import Computer from "./infrastructure/computer";
import Library from "./infrastructure/library";
import Maths from "./infrastructure/maths";
import Reception from "./infrastructure/reception";
import Science from "./infrastructure/science";
import InfraNavbar from "./infrastructure/navbar";
import Navbar from "./navbar";

export default function Infrastructure() {
  return (
    <div>
      <Navbar />
      <div className="flex w-[100vw] min-h-[100vh]">
        <InfraNavbar />
        <div className="infra-content flex flex-col p-[1rem]">
          <Library />
          <Reception />
          <Science />
          <Maths />
          <Computer />
          <Classroom />
          <div className="text-black text-center py-[1rem]">
            Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
