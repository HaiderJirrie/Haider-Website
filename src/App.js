import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="px-8 my-32 md:px-20 lg:px-40">
      <Hero/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
