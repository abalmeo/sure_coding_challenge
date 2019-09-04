import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { validate, createRatingProfile } from '../utils/utils';


const RatingInformation = props => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    line_1: "",
    line_2:"",
    city: "",
    region: "",
    postal: ""
  })

  const {
    first_name,
    last_name,
    line_1,
    line_2,
    city,
    region,
    postal,
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name] : e.target.value});
  }

  const onSubmit = async e => {
    e.preventDefault();
    const data = await validate(formData);
    const test = {
      first_name: "Prairie",
      last_name: "Johnson",
      address: {
        line_1: "123 Mulberry Lane",
        line_2: "3B",
        city: "Brooklyn",
        region: "NY",
        postal: "11211"
      }
    }

    const now = new Date().getTime();
    const setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
        localStorage.setItem('setupTime', now)
        // localStorage.setItem('data', data)
        localStorage.setItem('data', JSON.stringify(test))
    } else {
        if(now-setupTime > 1*60*60*1000) {
            localStorage.clear()
            localStorage.setItem('setupTime', now);
        }
}

  }

  useEffect(() => {

  })
  return (
    <Fragment>
      <form className="registration" onSubmit={e => onSubmit(e)}>

        <div className='form-group'>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={first_name}
            onChange={e=>onChange(e)}
          />
          <h3>
            First Name
          </h3>
        </div>

        <div className='form-group'>
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={last_name}
            onChange={e=>onChange(e)}
          />
          <h3>
            Last Name
          </h3>
        </div>

        <div className='form-group'>
          <input
            type="text"
            placeholder="Street Address, P.O. box, company name, c/o "
            name="line_1"
            value={line_1}
            onChange={e=>onChange(e)}
          />
          <h3>
            Address Line 1
          </h3>
        </div>

        <div className='form-group'>
          <input
            type="text"
            placeholder="Apartment, suite, unit, building, floor, etc. "
            name="line_2"
            value={line_2}
            onChange={e=>onChange(e)}
          />
          <h3>
            Address Line 2
          </h3>
        </div>

        <div className='form-group'>
          <input
            type="text"
            placeholder="e.g. Los Angeles"
            name="city"
            value={city}
            onChange={e=>onChange(e)}
          />
          <h3>
            City
          </h3>
        </div>

        <div className='form-group'>
          <input
            type="text"
            placeholder="e.g. California"
            name="region"
            value={region}
            onChange={e=>onChange(e)}
          />
          <h3>
            State
          </h3>
        </div>

        <div className='form-group'>
          <input
            type="number"
            placeholder="e.g. 90017"
            name="postal"
            value={postal}
            onChange={e=>onChange(e)}
          />
          <h3>
            Postal Code
          </h3>
        </div>

        <input type='submit'/>
        <Link className='btn btn-light' to='/quote-overview'/>

      </form>


    </Fragment>
  )
}

RatingInformation.propTypes = {
  // validate: PropTypes.func.isRequired,
}

export default RatingInformation
