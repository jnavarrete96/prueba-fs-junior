import express from 'express';
import { createMovieController, listMoviesController, getMovieByIdController } from '../controllers/movieController.js';

const router = express.Router();

router.post('/movies', createMovieController);
router.get('/movies', listMoviesController);
router.get('/movies/:id', getMovieByIdController);

export default router;
