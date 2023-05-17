import HHS from "../resources/hhs.jpg";
import AH from "../resources/ah.png";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="xl:flex gap-14 justify-center mx-auto mb-4">
      <div className="pt:-0 md:pt-10">
        <h3 className="text-3xl text-center font-bold pb-0 md:pb-5">
          Opleidingen
        </h3>
        <ExperienceCard
          timespan="September 2021 - Juni 2025"
          name="De Haagse Hogeschool"
          gradientFrom="#65a30d"
          gradientTo="#84cc16"
          image={HHS}
          location="Den Haag"
          title="HBO-ICT, Software Engineering"
          text="Op dit moment ben ik een tweedejaars HBO-ICT student en heb ik mijn propedeuse behaald met een gemiddeld cijfer van 7,6. Tijdens mijn eerste jaar heb ik gekozen voor de differentiatie Software Engineering. Ik zie mezelf als een zeer ambitieuze student met een grote passie voor het vak."
        />
      </div>

      <div className="pt-0 md:pt-10">
        <h3 className="text-3xl text-center font-bold pb-0 md:pb-5">
          Werkervaring
        </h3>
        <ExperienceCard
          timespan="Februari 2020 - Heden"
          name="Albert heijn"
          gradientFrom="#0284c7"
          gradientTo="#0ea5e9"
          image={AH}
          location="Hoofddorp"
          title="Functie Cassiere B"
          text="Als service medewerker is een sociale en proactieve instelling van belang. Ik ben onlangs gepromoveerd tot Cassiere B, wat meer verantwoordelijkheden met zich meebrengt, zoals het assisteren van klanten achter de servicebalie en het zelfstandig openen en sluiten van de winkel."
        />
      </div>
    </div>
  );
}

export default Experience;
