import { HashRouter, Switch } from "react-router-dom";
import { Home } from "../common/Home/home";
import { Navbar } from "../common/Navbar/navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Home />
      </Switch>
    </HashRouter>

  );
}

export default App;
