import Navbar from "./navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[100dvh] flex flex-col">
        <div className="px-[max(5vw,2rem)] pb-[1rem]">
          <div className="text-[max(2vw,1.5rem)] py-[1rem]">Introduction</div>
          <img src="image1.png" className="float-right w-[20rem] h-[25rem]" />
          <div className="text-[max(1.7vw,1rem)]">
            "Education gives the deepest insight, search for truth the highest
            form of Worship, passion ends in endless miseries, scarifies and
            renunciation bring eternal bliss." -The Mahabharata
          </div>
          <div>
            Vishal Bharti Senior Secondary School, a premier educational
            institution, was established in 1989. Vishal Bharti Sr. Sec. School
            is a new wave Progressive school with the vision and aspiration of
            the new millennium enriched by the wisdom of great thinkers and
            educators like Tagore and Vivekananda and the dreams of scientist
            and educator Stephen Hawkings. Achieving excellence through human
            values is the goal of this School. The school is a unique experiment
            and honest endeavor aiming at man-making education for building a
            dynamic society by developing the personality of the child towards
            fullness. It is by helping the child in the manifestation of the
            perfection already existing in the child and by creating an
            environment where the child can recognize "the angle of surplus"
            that he is. Integral Education for fullness is ensured by developing
            his physical, intellectual, emotional and spiritual qualities in a
            balanced form, so that the child can blossom as a multi lotus in its
            pristine glory under the ever-purifying, constantly ever rising Sun.
            The manifestation of the perfection already existing in the
            child-the blossoming of the "Integral", i.e. his physical,
            intellectual, emotional and spiritual faculties.
          </div>
        </div>
        <div className="px-[max(5vw,2rem)] pb-[1rem]">
          <div className="text-[max(2vw,1.5rem)] py-[1rem]">
            Principal's Desk
          </div>
          <img
            src="principal.webp"
            className="float-left w-[15rem] h-[20rem]"
          />
          <div className="text-[max(1.7vw,1rem)]">
            “Education is our passport to the future, for tomorrow belongs to
            the people who prepare for it today.” – Malcolm X.
          </div>
          <div>
            The school with an enthusiastic, experienced and qualified teaching
            staff along with excellent infrastructure facilities provides the
            holistic atmosphere for the child to develop into the capable young
            wizards of today.Co-curricular activities complement the curriculum
            and aims at developing the personality of every student at physical,
            mental and cultural level. Besides scholastic achievements school
            also caters to polish non scholastic attributes by providing a
            conducive environment like the inclusion of different clubs such as
            Music, Dance, Art & craft, Dramatics etc.
          </div>
        </div>
        <div className="text-black text-center py-[1rem]">
          Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
