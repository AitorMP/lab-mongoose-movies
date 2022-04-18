const express = require('express');
const router = express.Router();

// Handle GET request for website root

router.get('/', (req, res, next) => {
  console.log('EEE');
  res.render('index');
});

module.exports = router;
