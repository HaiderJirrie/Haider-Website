import HHS from "../resources/hhs.jpg";
import AdHoc from "../resources/AdHoc.png";

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
        {/* <ExperienceCard
          timespan="February 2020 - Present"
          name="Albert heijn"
          gradientFrom="#0284c7"
          gradientTo="#0ea5e9"
          image={AH}
          location="Hoofddorp"
          title="Functie Cassiere B"
          text="As a service representative, having a social and proactive attitude is important. I was recently promoted to Cashier B, which comes with additional responsibilities such as assisting customers at the service desk and independently opening and closing the store."
        /> */}
        <ExperienceCard
        timespan="May 2023"
        name="Adhoc IT Services"
        gradientFrom="#0284c7"
        gradientTo="#0ea5e9"
        image={AdHoc}
        title="Developed a webapp"
        text={ <p>I had the oppurtunity to create a webapplication for a small IT businnes, <a className=" underline font-bold" href="/https://www.adhocit.nl/" target="_blank" rel="noreferrer">Ad Hoc</a>. I used ReactJS and Tailwind as CSS framework for the frontend, I also intergrated my own webapi alowing vistors to  sending emails to the company through forms. I used .NET for the backend.</p>}/>
      </div>
    </div>
  );
}

export default Experience;
