import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing/Pricing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
