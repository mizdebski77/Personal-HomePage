import { Navbar } from "../common/Navbar/navbar";
import { About } from "../common/sections/About/about";
import { Contact } from "../common/sections/Contact/contact";
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
      <Education />
      <Contact />
    </>


  );
}

export default App;
