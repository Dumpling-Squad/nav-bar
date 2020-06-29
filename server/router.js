const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
  .get(controller.get)

  router
  .route('/search/:params')
  .get(controller.getSearched)
  // .post(controller.post)

router
  .route('/:id')
  .get(controller.getId)

//   .delete(controller.delete)
//   .put(controller.put)

module.exports = router;