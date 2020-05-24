const express = require('express');

const router = express.Router();

var moviesController = require('../../../controllers/movie_controller');

// routing to doctors
router.post('/:genre/create', moviesController.create);
router.get('/', moviesController.showAll);
router.put('/:id/update', moviesController.update);
router.delete('/:id/delete', moviesController.delete);
router.get('/:id/show', moviesController.show);
router.get('/:genre/showByGenre', moviesController.showByGenre);


module.exports = router;