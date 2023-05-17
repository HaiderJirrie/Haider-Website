import Tools from "../resources/tools.png";
import Book from "../resources/book.png";
import Puzzle from "../resources/puzzle.png";

import SkillCard from "./SkillCard";

function Skills() {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-3xl font-bold">Alles op een rijtje</h3>
      </div>
      <div className="xl:flex gap-10 justify-center mx-auto mb-4">
        <SkillCard
          title="Tijdens mijn opleiding"
          image={Book}
          gradientFrom="#93c5fd"
          text="Tijdens mijn opleiding heb ik de mogelijkheid gehad om mij te
            verdiepen in verschillende onderwerpen binnen het brede vakgebied
            van ICT. Hieronder som ik enkele onderwerpen op waar veel nadruk op
            is gelegd."
          bulletpoints={[
            "Programming",
            "Web development",
            "Data Science & Engineering",
            "Cyber security",
          ]}
        />

        <SkillCard
          title="(Programmeer) Talen en Frameworks"
          image={Tools}
          gradientFrom="#86efac"
          text="Ik ben goed bekend met object georiënteerde programmeertalen, ook
          heb ik ervaring opgedaan met het werken met relationele databases.
          Verder heb ik een interesse in full-stack (web) development."
          bulletpoints={[
            "Agile & Scrum",
            "C# (.NET)",
            "SQL",
            "HTML, CSS, Javascript (React)",
          ]}
        />

        <SkillCard
          title="Inzichten als Software Engineer"
          image={Puzzle}
          gradientFrom="#fca5a5"
          text="Ik hecht veel belang aan de vaardigheid van een software engineer om
          goed te kunnen samenwerken binnen een team. Ik heb geleerd over
          Agile en ben bekend met technieken om code onderhoudbaar te houden."
          bulletpoints={[
            "Java",
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
