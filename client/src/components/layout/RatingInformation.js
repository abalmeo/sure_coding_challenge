import React, { useState } from 'react';
import { validate } from '../utils/utils';
import states from '../utils/states';

const RatingInformation = () => {


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    line_1: "",
    line_2:"",
    city: "",
    region: "",
    postal: "",
    page_reload: "",
  });

  const {
    first_name,
    last_name,
    line_1,
    line_2,
    city,
    region,
    postal,
  } = formData;

  const onFormChange = e => {
    setFormData({ ...formData, [e.target.name] : e.target.value});
  };

  const onFormSubmit = async e => {
    e.preventDefault();

    // Validate and post data
    const data = await validate(formData);

    // Get correct time
    const now = new Date().getTime();

    if (now !== null && !data.error) {
        localStorage.clear();
        localStorage.setItem('setupTime', now);
        localStorage.setItem('userData', JSON.stringify(data));
        window.location.href = '/quote-overview';
    }
  };

  // Get State values for dropdown
  const stateOptions = Object.values(states).map(state => (
    <option value={state} key={state}>{state}</option>
  ))

  return (
    <div className="ratingInfoBackground">
      <form className="registration" onSubmit={e => onFormSubmit(e)}>
        <div className="form-group websiteGreeting"> Welcome to Rocket-Insurance! Please enter your information below.</div>

        <div className='form-group'>
          <small>
            First Name*
          </small>
          <input
            type="text"
            placeholder="What is your first name?"
            name="first_name"
            value={first_name}
            onChange={e=>onFormChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <small>
            Last Name*
          </small>
          <input
            type="text"
            placeholder="What is your last name?"
            name="last_name"
            value={last_name}
            onChange={e=>onFormChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <small>
            Address*
          </small>
          <input
            type="text"
            placeholder="Street Address, P.O. box, company name, c/o "
            name="line_1"
            value={line_1}
            onChange={e=>onFormChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type="text"
            placeholder="apartment, suite, unit, building, floor, etc. "
            name="line_2"
            value={line_2}
            onChange={e=>onFormChange(e)}
          />
        </div>

        <div className='form-group'>
          <small>
            City*
          </small>
          <input
            type="text"
            placeholder="e.g. Los Angeles"
            name="city"
            value={city}
            onChange={e=>onFormChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <small>
            State* <br/>
          </small>
          <select
            className="state-dropdown"
            name="region"
            value={region}
            onChange={e=>onFormChange(e)}
            required
          >
          {stateOptions}
          </select>
        </div>

        <div className='form-group'>
          <small>
            Postal Code*
          </small>
          <input
            type="number"
            placeholder="e.g. 90017"
            name="postal"
            value={postal}
            onChange={e=>onFormChange(e)}
            required
          />
        </div>

        <input className="submitButton" type='submit'/>

      </form>
    </div>
  )
}

export default RatingInformation;
