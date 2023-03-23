import { HashRouter, Switch } from "react-router-dom";
import { About } from "../common/About/about";
import { Home } from "../common/Home/home";
import { Navbar } from "../common/Navbar/navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <>
        <Home />
        <About />
        </>

      </Switch>
    </HashRouter>

  );
}

export default App;
