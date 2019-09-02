const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

router.post("/v1/quotes", async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { first_name, last_name, address } = req.body;

  const customerInformation = {};
  if (first_name) customerInformation.first_name = first_name;
  if (last_name) customerInformation.last_name = last_name;
  if (address) customerInformation.address = address;
});
