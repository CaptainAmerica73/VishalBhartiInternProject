import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <div className="flex flex-col gap-[2rem] items-center text-center pb-[2vh]">
        <div className="hero h-[100vh] w-[100vw]"></div>
        <div className="p-[1rem]">
          At Vishal Bharti Senior Secondary School, we believe that every
          student has the potential to excel academically and personally. That’s
          why we’ve developed a unique approach to learning that focuses on each
          student’s individual needs and learning style. Our teachers are
          dedicated to fostering a supportive and inclusive learning
          environment, where students are encouraged to explore new ideas and
          take risks. We offer a wide range of academic and extracurricular
          programmes that enable our students to build a strong foundation for
          success.
        </div>
        <div className="p-[1rem]">
          With a legacy spanning 35 years, Vishal Bharti Public School pioneers
          English medium CBSE education, anchored in experiential pedagogy.
          Rooted in a dynamic learning ethos, we nurture academic excellence and
          holistic development in every student. At VBPS, innovation fuels our
          approach, creating an environment where students are empowered to
          embrace challenges and realize their full potential. These meticulous
          efforts have ensured us a Top Spot in the Times of Indian survey for
          the past three consecutive years. Step into our world, where education
          transcends boundaries, and every day ignites a passion for discovery
          and growth.
        </div>
        <div
          onClick={() => location.replace("about")}
          className="bg-red-600 cursor-pointer text-white rounded-lg text-[max(1.2vw,.8rem)] p-[.5rem_1.5rem]"
        >
          Know more
        </div>
        <div className="text-black">
          Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
