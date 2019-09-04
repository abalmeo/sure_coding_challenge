import axios from "axios";

// Validate incoming values
export const validate = values => {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = 'First name is required';
  }

  if (!values.last_name) {
    errors.last_name = 'Last name is required';
  }

  if (!values.line_1) {
    errors.line_1 = 'Address required';
  }

  if (!values.city) {
    errors.city = 'City required';
  }

  if (!values.state) {
    errors.state = 'State required';
  }

  if (!values.postal) {
    errors.postal = 'Postal/Zip code required';
  }

  return createRatingProfile();

}

// POST request to hit backend API
const createRatingProfile = async(values) =>  {
  try {
    const result = await axios.post("/posts/v1/quotes", test);

    if (result !== undefined && result !== null ) {
      return result.data;
    }

  } catch (error) {
    console.log(error);

  }
}
