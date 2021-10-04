import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Characters from "./pages/Characters/Characters";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Characters} exact />
      </Switch>
    </Router>
  );
}

export default App;
