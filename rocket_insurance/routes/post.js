const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const axios = require('axios')


router.post("/v1/quotes", async (req, res) => {
  console.log('testing route')
  res.send('Hi');

  try {
      console.log('This is the req', req.body)
      const { first_name, last_name, address: {line_1, line_2, city, region, postal}} = req;

      const data = await axios({
        method: 'post',
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

      console.log('data', data)

      res.send(data);

  } catch (error) {
    console.error('There was an error')

  }

});

router.post("/test", function (req, res) {
  console.log('hi');
})


module.exports = router;

