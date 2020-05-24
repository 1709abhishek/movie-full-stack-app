const express = require('express');

const router = express.Router();

var genreController = require('../../../controllers/genre_controller');


router.post('/create', genreController.create);
router.get('/', genreController.showAll);
router.put('/:id/update', genreController.update);
router.delete('/:id/delete', genreController.delete);
router.get('/:id/show', genreController.show);

module.exports = router;