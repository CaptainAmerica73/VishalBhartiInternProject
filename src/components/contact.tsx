import Navbar from "./navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="flex w-[100vw] h-[50vh] mt-[20vh]">
          <div className="basis-1/2 p-[2rem] bg-slate-300">
            <div className="text-[max(2vw,1.5rem)]">Address</div>
            <div className="p-[1rem]">
              Vishal Bharti Sr. Sec. School opposite D Block, Sarawati Vihar
              ,Parwana Road, Pitampura Delhi-110034
            </div>
            <div className="text-[max(2vw,1.5rem)]">Phone Number</div>
            <div className="p-[1rem]">
              011-27026750, 27023377, 9354937851/54
            </div>
            <div className="text-[max(2vw,1.5rem)]">E-Mail</div>
            <a href="mailto:vbsschool.info@gmail.com" className="p-[1rem]">
              vbsschool.info@gmail.com
            </a>
          </div>
          <div className="map basis-1/2"></div>
        </div>
        <div className="absolute bottom-5">
          Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
