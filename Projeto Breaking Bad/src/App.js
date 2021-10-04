import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import Nav from "./components/Nav/Nav";
import NavItems from "./components/Nav/NavItems";
import "./App.css";
import CharacterDetail from "./components/Characters/CharacterDetail";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <NavItems isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
      <Switch>
        <Route path="/" component={Characters} exact />
        <Route path="/:char_id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
};

export default App;
