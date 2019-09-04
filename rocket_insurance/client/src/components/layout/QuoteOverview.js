import React from 'react'
import PropTypes from 'prop-types'

const QuoteOverview = props => {
  const data = JSON.parse(localStorage.getItem('data'));
  console.log('data', data)
  return (
    <div>
      Quote Overview
    </div>
  )
}

QuoteOverview.propTypes = {

}

export default QuoteOverview
