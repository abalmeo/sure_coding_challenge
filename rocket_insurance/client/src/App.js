import React, {Fragment, Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuoteOverview from "./components/layout/QuoteOverview";
import RatingInformation from "./components/layout/RatingInformation"

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router className="container">
        <Fragment>
          <Switch>
            <Route exact path = "/" component ={QuoteOverview} />
            <Route exacst path = "/rating-information" component={RatingInformation} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
