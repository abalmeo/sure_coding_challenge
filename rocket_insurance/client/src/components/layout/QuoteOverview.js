import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Card, CardGroup, Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const QuoteOverview = props => {

  const data = JSON.parse(localStorage.getItem('userData'));
  const setupTime = localStorage.getItem('setupTime');
  const now = new Date().getTime();

  // Clear localStorage if current time is 1 hour passed setupTime and redirect to form
  if (now-setupTime > 1*60*60*1000) {
    localStorage.clear();
    return <Redirect to="/rating-information" />;
  }

  // Clear localStorage and Redirect to form if invalid data
  if (data === null || data.error === true) {
    localStorage.clear();
    return <Redirect to="/rating-information" />;
  }

  // Destructuring response data
  // Can't further destructure Object keys with same name, so limited to the first variable option
  const {
    quote: {
      quoteId,
      rating_address,
      policy_holder,
      variable_options,
      variable_selections,
      premium,
    }} = data



  return (
    <Fragment>

      <Card className="insuranceCard" bg="warning" text="white" style={{ width: '18rem' }}>
        <Card.Header>Deductible</Card.Header>
        <Card.Body>
          <Card.Title>Warning Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className="insuranceCard" bg="info" text="white" style={{ width: '18rem' }}>
        <Card.Header>Asteroid Collision</Card.Header>
        <Card.Body>
          <Card.Title>{variable_options.asteroid_collision.title}</Card.Title>
          <Card.Text>
            {variable_options.asteroid_collision.description}
          </Card.Text>


          <Card.Text>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  {/* <Form.Label>Example select</Form.Label> */}
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>
            </Form>
        </Card.Text>
        </Card.Body>
      </Card>

    </Fragment>
  )
}

QuoteOverview.propTypes = {

}

export default QuoteOverview
