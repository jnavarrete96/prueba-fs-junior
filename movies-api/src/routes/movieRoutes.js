import express from 'express';
import { createMovieController } from '../controllers/movieController.js';

const router = express.Router();

router.post('/movies', createMovieController);

export default router;
