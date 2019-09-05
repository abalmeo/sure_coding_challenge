import axios from "axios";

// Validate incoming values
export const validate = values => {
  const {
    first_name,
    last_name,
    line_1,
    line_2,
    city,
    region,
    postal,
  } = values;

  let errors = {};

  if (!first_name) {
    errors.first_name = 'First name is required';
  }

  if (!last_name) {
    errors.last_name = 'Last name is required';
  }

  if (!line_1) {
    errors.line_1 = 'Address required';
  }

  if (!city) {
    errors.city = 'City required';
  }

  if (!region) {
    errors.region = 'State/Region required';
  }

  if (!postal) {
    errors.postal = 'Postal/Zip code required';
  }

  const body = {
    first_name,
    last_name,
    address: {
      line_1,
      line_2,
      city,
      region,
      postal,
    }
  };

  // Check if all required fields are filled out
  if (Object.keys(errors).length === 0) {
    const data = createRatingProfile(body);

    // Return data or return the error
    if (data !== undefined && data !== null) {
      return data
    } else {
      return 'Post unsuccessful';
    }
  } else {
    return errors;
  }


}

// POST request to hit backend API
const createRatingProfile = async(values) =>  {
  try {
    const results = await axios.post("/posts/v1/quotes", values);

    if (results !== undefined && results !== null ) {
      return results.data;
    }

  } catch (error) {
    return error;

  }
}

