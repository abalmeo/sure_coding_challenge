import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const QuoteOverview = props => {

  const data = JSON.parse(localStorage.getItem('userData'));
  const setupTime = localStorage.getItem('setupTime');
  const now = new Date().getTime();

  // Clear localStorage if current time is 1 hour passed setupTime and redirect to form
  if (now-setupTime > 1*60*60*1000) {
    localStorage.clear();
    return <Redirect to="/" />;
  }

  // Clear localStorage and Redirect to form if invalid data
  if (data === null || data.error === true) {
    localStorage.clear();
    return <Redirect to="/" />;
  }

  // Destructuring response data
  const {
    quote: {
      rating_address: {
        line_1,
        line_2,
        city,
        region,
        postal
      },
      policy_holder: {
        first_name,
        last_name
      },
      variable_options,
    }} = data

    const deductible_values = variable_options.deductible.values.map((val, ind) => (
        <tr key={ind}>
          <td>Option {ind + 1} : {val}</td>
        </tr>
      )
    )

    const collision_values = variable_options.asteroid_collision.values.map((val, ind) => (
      <tr key={ind}>
        <td>Option {ind + 1} : {val}</td>
      </tr>
    )
  )


  return (
    <Container>
      <div className="userGreeting">
        Hi {first_name}, we're excited you've chosen us for rocket owner's insurance! Please see the the available plans listed below.
      </div>

      <Row>
        <Col md={{span: 4}}>
            <Card className="insuranceCard" bg="secondary" text="white" style={{ width: '18rem', height: '20rem' }}>
              <Card.Header>Profile</Card.Header>
              <Card.Body>
                <table>
                  <tdata>Policy Holder:{first_name}{last_name}</tdata><br/>
                  <tdata>Address: {line_1} {line_2}{city} {region} {postal}</tdata>
                </table>
              </Card.Body>
            </Card>
        </Col>

        <Col md={{span: 4}}>
          <Card className="insuranceCard" bg="warning" text="white" style={{ width: '18rem', height: '20rem' }}>
            <Card.Header>Deductible</Card.Header>
            <Card.Body>
              <Card.Title>{variable_options.deductible.description}</Card.Title>
              <table>
                <tbody>{deductible_values}</tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{span: 4}}>
            <Card className="insuranceCard" bg="info" text="white" style={{ width: '18rem', height: '20rem' }}>
              <Card.Header>Asteroid Collision</Card.Header>
              <Card.Body>
                <Card.Title>{variable_options.asteroid_collision.title}</Card.Title>
                <table>
                  <tbody>{collision_values}</tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  )
}

QuoteOverview.propTypes = {

}

export default QuoteOverview
