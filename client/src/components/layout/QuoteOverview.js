import React, {useState, useEffect} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const QuoteOverview = () => {

  // Get data from local storage
  const data = JSON.parse(localStorage.getItem('userData'));
  const insurancePlan = JSON.parse(localStorage.getItem('insurancePLan'));
  const setupTime = localStorage.getItem('setupTime');
  const now = new Date().getTime();

  const [formData, setFormData] = useState({
    collision: "",
    deductible: "",
  });

  const {
    collision,
    deductible,
  } = formData;


  const onFormChange = e => {
    setFormData({ ...formData, [e.target.name] : e.target.value});
  };

  const onFormSubmit = async e => {
    e.preventDefault();

    // update time and add insurancePlan to local storage
    localStorage.setItem('setupTime', now);
    localStorage.setItem('insurancePlan', formData);
  };

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
    }} = data;

    // Mapping through returned values
    const deductible_values = variable_options.deductible.values.map((val, ind) => (
      <option value={val} key={val}> Option {ind+1}: {val}</option>
      )
    );

    const collision_values = variable_options.asteroid_collision.values.map((val, ind) => (
      <option value={val} > Option {ind+1}: {val}</option>
    )
  );

  return (
    <div className="quoteBackground">
      <div className=" container userGreeting">
        Hi {first_name}, we're excited you've chosen us for rocket owner's insurance! Please see the available plans listed below*.
      </div>
      <div></div>
      <Row>
        <Col md={{span: 3, offset: 1}}>
            <Card className="insuranceCard" bg="secondary" text="white" style={{ width: '18rem', height: '20rem' }}>
              <Card.Header className="cardOverview">Profile</Card.Header>
              <Card.Body>
                <table>
                  <tdata>Policy Holder: {first_name} {last_name}</tdata><br/>
                  <tdata>Address: {line_1} {line_2} {city}, {region} {postal}</tdata>
                </table>
              </Card.Body>
            </Card>
        </Col>

        <Col md={{span: 3, offset: 1}}>
          <Card className="insuranceCard" bg="warning" text="white" style={{ width: '18rem', height: '20rem' }}>
            <Card.Header className="cardOverview">{variable_options.deductible.title}*</Card.Header>
            <Card.Body>
              <Card.Title>{variable_options.deductible.description}</Card.Title>
            </Card.Body>
            <Card.Body>
              <form className="insurance-registration">
                <div>
                  <select
                    name="deductible"
                    value={deductible_values}
                    className="insurance-selection"
                    >
                    {deductible_values}
                  </select>
                </div>
                <input className="submitButton" type='submit'/>
              </form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{span: 3, offset: 1}}>
            <Card className="insuranceCard" bg="info" text="white" style={{ width: '18rem', height: '20rem' }}>
              <Card.Header className="cardOverview">{variable_options.asteroid_collision.title}*</Card.Header>
              <Card.Body>
                <Card.Title>{variable_options.asteroid_collision.description}</Card.Title>
              </Card.Body>
                <Card.Body>
                <form className="insurance-registration">
                <div>
                  <select
                    name="collision"
                    value={collision_values}
                    className="insurance-selection"
                    >
                    {collision_values}
                  </select>
                </div>
                <input className="submitButton" type='submit'/>
              </form>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default QuoteOverview;
