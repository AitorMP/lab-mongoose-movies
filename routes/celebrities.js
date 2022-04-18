const express = require('express');
const Celebrity = require('./../models/celebrity');

const celebritiesRouter = new express.Router();

celebritiesRouter.get('/', (req, res, next) => {
  console.log('AAA');
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities', { celebrities });
    })
    .catch((error) => {
      // Sending the error to the catch all handler
      next(error);
    });
});

celebritiesRouter.get('/create', (req, res, next) => {
  console.log('BBB');
  res.render('celebrities/create');
});

celebritiesRouter.get('/:id', (req, res, next) => {
  console.log('CCC');
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => next(error));
});

celebritiesRouter.get('/:id/edit', (req, res, next) => {
  console.log('DDD');
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = celebritiesRouter;
