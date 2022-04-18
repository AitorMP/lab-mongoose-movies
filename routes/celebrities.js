const express = require('express');
const Celebrity = require('../models/celebrity');

const router = new express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      // Sending the error to the catch all handler
      next(error);
    });
});

router.get('celebrities/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.get('celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      // Sending the error to the catch all handler
      next(error);
    });
});

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
