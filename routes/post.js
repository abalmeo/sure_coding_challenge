const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const axios = require('axios')


router.post("/v1/quotes", async (req, res) => {
  try {
      // Destructuring request body
      const { first_name, last_name, address: {line_1, line_2, city, region, postal}} = req.body;

      // Terminal logging of POST
      console.log('Sending a POST with form-data...');

      // POST data as application/json to SURE url
      const result = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'https://fed-challenge.sure.now.sh/api/v1/quotes',
        data: {
          first_name,
          last_name,
          address: {
            line_1,
            line_2,
            city,
            region,
            postal
          }
        }
      })
      res.send(result.data);

      // Terminal logging of result status
      console.log('Response Status: ', result.status)

  } catch (error) {

    // Error logging
    console.log(error)
    return error;
  }

});

module.exports = router;

