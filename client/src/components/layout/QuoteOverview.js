import React, {useState} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const QuoteOverview = () => {

  // Get data from local storage
  const data = JSON.parse(localStorage.getItem('userData'));
  let collisionPlan = JSON.parse(localStorage.getItem('collisionPlan'));
  let deductiblePlan = JSON.parse(localStorage.getItem('deductiblePlan'));
  const setupTime = localStorage.getItem('setupTime');
  const now = new Date().getTime();

  const [insuranceData, setInsuranceData] = useState({
    collision: "",
    deductible: "",
  });

  const {
    collision,
    deductible,
  } = insuranceData;

  const onFormChange = e => {
    setInsuranceData({ ...insuranceData, [e.target.name] : e.target.value});
  };

  const onFormSubmit = e => {
    e.preventDefault();

    // Update time and add insurancePlans to local storage
    localStorage.setItem('setupTime', now);

    if (collision) {
      localStorage.setItem('collisionPlan', collision);
    }
    if (deductible) {
      localStorage.setItem('deductiblePlan', deductible)
    }

    setInsuranceData({
      collisionPlan: collision,
      deductiblePlan: deductible
    });
  };

  // Clear localStorage if current time is 1 hour passed setupTime and redirect to Rating Information form
  if (now-setupTime > 1*60*60*1000) {
    localStorage.clear();
    return <Redirect to="/" />;
  }

  // Clear localStorage and Redirect to Rating Information form if invalid data
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

    // Mapping through local storage insurance plans to set up dropdown menu
    const deductible_values = variable_options.deductible.values.map((val, ind) => (
      <option value={val} key={val}> Option {ind+1}: ${val}</option>
      )
    );

    const collision_values = variable_options.asteroid_collision.values.map((val, ind) => (
      <option value={val}> Option {ind+1}: ${val}</option>
      )
    );

  return (
    <div className="quoteBackground">
      <Row>
        <Col md={{span: 12}}>
          <div className="userGreeting">
            Hi {first_name}, we're excited you've chosen us for rocket owner's insurance! Please see the available plans listed below.*
          </div>
        </Col>

        <Col md={{span: 12}}>
          <Card className="insuranceCard" bg="info" text="white" style={{ width: '30rem', height: '42rem' }}>
            <Card.Header className="cardOverview">Profile</Card.Header>

            <Card.Body style={{height: '3rem' }}>
              <div>
                <Card.Subtitle>Policy Holder: {first_name} {last_name}</Card.Subtitle><br/>
                <Card.Subtitle>Address: {line_1} {line_2} {city}, {region} {postal}</Card.Subtitle>
              </div>
              <div className="selected-plans">
                {deductiblePlan > 0 &&
                  <Card.Subtitle className="deductible">
                    Deductible Plan: ${deductiblePlan}
                  </Card.Subtitle>
                }
                {collisionPlan > 0 &&
                  <Card.Subtitle>
                    Collision Plan: ${collisionPlan}
                  </Card.Subtitle>
                }
              </div>
            </Card.Body>

            <Card.Body>
              <form className="insurance-registration" onSubmit={e => onFormSubmit(e)} name="deductible">

              <div className="insurance-section">
                <Card.Subtitle className="cardOverview">{variable_options.deductible.title}*</Card.Subtitle>
                  <Card.Text>{variable_options.deductible.description}</Card.Text>
                    <div>
                    <select
                      name="deductible"
                      className="insurance-selection"
                      value={deductible}
                      onChange={e=>onFormChange(e)}
                      >
                        <option disabled selected value> -- select an option -- </option>
                      {deductible_values}
                    </select>
                  </div>
                </div>

                <div>
                  <Card.Subtitle className="cardOverview">{variable_options.asteroid_collision.title}*</Card.Subtitle>
                  <Card.Text>{variable_options.asteroid_collision.description}</Card.Text>
                  <div>
                  <select
                    name="collision"
                    className="insurance-selection"
                    value={collision}
                    onChange={e=>onFormChange(e)}
                    >
                    <option disabled selected value> -- select an option -- </option>
                    {collision_values}
                  </select>
                  </div>
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