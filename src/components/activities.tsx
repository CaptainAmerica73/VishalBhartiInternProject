import Navbar from "./navbar";

export default function Activities() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[100dvh] py-[2rem] flex flex-col items-center gap-[2rem]">
        <img className="bg-center bg-no-repeat bg-cover" src="act1.webp" />
        <img className="bg-center bg-no-repeat bg-cover" src="act2.webp" />
        <img className="bg-center bg-no-repeat bg-cover" src="act3.webp" />
        <img className="bg-center bg-no-repeat bg-cover" src="act4.webp" />
        <div className="text-black text-center py-[1rem]">
          Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
