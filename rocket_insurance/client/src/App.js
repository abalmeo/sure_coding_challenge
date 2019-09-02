import React, {Fragment, Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuoteOverview from "./components/QuoteOverview";
import RatingInformation from "./components/RatingInformation"

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path = "/quote-overview" component={QuoteOverview} />
            <Route exact path = "/rating-information" component={RatingInformation} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
