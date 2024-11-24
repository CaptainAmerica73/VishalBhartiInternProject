export default function Navbar() {
  return (
    <>
      <div className="navbar h-[7vh] bg-[#5f0b35] sticky top-0">
        <label className="nav-burger" htmlFor="nav-ref">
          <input id="nav-ref" type="checkbox"></input>
        </label>
        <div
          className="flex flex-col min-w-[10rem] items-center justify-center"
          style={{ lineHeight: "20px" }}
        >
          <div className="text-[max(2vw,1rem)]">VISHAL BHARTI</div>
          <div className="text-[max(1vw,.5rem)]">SENIOR SECONDARY SCHOOL</div>
        </div>
        <div className="nav-content text-[max(1.5vw,.8rem)]">
          <p className="cursor-pointer" onClick={() => location.replace("/")}>
            HOME
          </p>
          <p
            className="cursor-pointer"
            onClick={() => location.replace("about")}
          >
            ABOUT US
          </p>
          <p
            className="cursor-pointer"
            onClick={() => location.replace("infrastructure")}
          >
            INFRASTRUCTURE
          </p>
          <p
            className="cursor-pointer"
            onClick={() => location.replace("admission")}
          >
            ADMISSION
          </p>
          <p
            className="cursor-pointer"
            onClick={() => location.replace("academics")}
          >
            ACADEMICS
          </p>
          <p
            className="cursor-pointer"
            onClick={() => location.replace("activities")}
          >
            ACTIVITIES
          </p>
          <p
            className="cursor-pointer"
            onClick={() => location.replace("contact")}
          >
            CONTACT US
          </p>
        </div>
      </div>
    </>
  );
}
