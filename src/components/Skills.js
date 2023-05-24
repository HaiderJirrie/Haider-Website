import Tools from "../resources/tools.png";
import Book from "../resources/book.png";
import Puzzle from "../resources/puzzle.png";

import SkillCard from "./SkillCard";

function Skills() {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-3xl font-bold">Everything laid out</h3>
      </div>
      <div className="xl:flex gap-10 justify-center mx-auto mb-4">
        <SkillCard
          title="During my studies"
          image={Book}
          gradientFrom="#93c5fd"
          text="
          During my studies, I had the opportunity to delve into various topics within the broad field of ICT. Below, I list some of the subjects that received significant emphasis"
          bulletpoints={[
            "Programming",
            "Web development",
            "Data Science & Engineering",
            "Cyber security",
          ]}
        />

        <SkillCard
          title="Programming languages and Frameworks"
          image={Tools}
          gradientFrom="#86efac"
          text="I am well acquainted with object-oriented programming languages, and I have gained experience working with relational databases. Additionally, I have a keen interest in full-stack (web) development."
          bulletpoints={[
            "Java",
            "C# (.NET)",
            "SQL",
            "HTML, CSS, Javascript (React)",
          ]}
        />

        <SkillCard
          title="Insights as a Software Engineer"
          image={Puzzle}
          gradientFrom="#fca5a5"
          text="
          I place great importance on the ability of a software engineer to collaborate effectively within a team. I have learned about Agile methodologies and I am familiar with techniques for maintaining code maintainability."
          bulletpoints={[
            "Agile & Scrum",
            "Test Driven Development",
            "OOP principles & Design patterns",
            "Version control",
          ]}
        />
      </div>
    </>
  );
}

export default Skills;
