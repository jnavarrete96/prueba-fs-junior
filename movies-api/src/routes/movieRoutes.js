import express from 'express';
import { createMovieController, listMoviesController } from '../controllers/movieController.js';

const router = express.Router();

router.post('/movies', createMovieController);
router.get('/movies', listMoviesController);

export default router;
