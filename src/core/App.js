import { Navbar } from "../common/Navbar/navbar";
import { About } from "../common/sections/About/about";
import { Education } from "../common/sections/Education/education";
import { Home } from "../common/sections/Home/home";
import { Skills } from "../common/sections/Skills/skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education/>
    </>


  );
}

export default App;
