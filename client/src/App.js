import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuoteOverview from "./components/layout/QuoteOverview";
import RatingInformation from "./components/layout/RatingInformation"

import "./App.css";

const App = () => (
  <Router className="container">
      <Switch>
        <Route exact path="/quote-overview" key="add" component ={QuoteOverview} />
        <Route exact path="/rating-information" key="update" component={RatingInformation} />
      </Switch>
  </Router>
)

export default App;
