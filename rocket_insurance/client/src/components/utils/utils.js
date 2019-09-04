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

  console.log('values');

}

export const createRatingProfile = values => {
  console.log(values);
}
