import HHS from "../resources/hhs.jpg";
import AH from "../resources/ah.png";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="xl:flex gap-14 justify-center mx-auto mb-4">
      <div className="pt:-0 md:pt-10">
        <h3 className="text-3xl text-center font-bold pb-0 md:pb-5">
          Education
        </h3>
        <ExperienceCard
          timespan="September 2021 - June 2025"
          name="The Hague University of Applied Sciences"
          gradientFrom="#65a30d"
          gradientTo="#84cc16"
          image={HHS}
          location="Den Haag"
          title="HBO-ICT, Software Engineering"
          text="At the moment, I am a second-year HBO-ICT student and I have obtained my propaedeutic diploma. During my first year, I chose the Software Engineering specialization. I consider myself a highly ambitious student with a great passion for the field."
        />
      </div>

      <div className="pt-0 md:pt-10">
        <h3 className="text-3xl text-center font-bold pb-0 md:pb-5">
          Work experience
        </h3>
        <ExperienceCard
          timespan="February 2020 - Present"
          name="Albert heijn"
          gradientFrom="#0284c7"
          gradientTo="#0ea5e9"
          image={AH}
          location="Hoofddorp"
          title="Functie Cassiere B"
          text="As a service representative, having a social and proactive attitude is important. I was recently promoted to Cashier B, which comes with additional responsibilities such as assisting customers at the service desk and independently opening and closing the store."
        />
      </div>
    </div>
  );
}

export default Experience;
