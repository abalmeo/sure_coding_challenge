import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const QuoteOverview = props => {

  const data = JSON.parse(localStorage.getItem('userData'));

  // Destructuring response data
  // Can't further destructure Object keys with same name, so limited to the first variable option
  const {
    quote: {
      quoteId,
      rating_address: {
        line_1,
        line_2,
        city,
        region,
        postal,
      },
      policy_holder: {
        first_name,
        last_name
      },
      variable_options: {
          deductible: {
            title,
            description,
            values,
            test,
          },
      },
      premium,
    }} = data

  return (
    <Fragment>
      Quote Overview
      <table>
        <tr>
          <td>Quote Id: {quoteId}</td>
          <td>Line_1: {line_1}</td>
          <td>Line_2: {line_2}</td>
          <td>city: {city}</td>
          <td>title: {title}</td>
          <td>description: {description}</td>
          <td>premium: {premium}</td>
        </tr>

      </table>

    </Fragment>
  )
}

QuoteOverview.propTypes = {

}

export default QuoteOverview
