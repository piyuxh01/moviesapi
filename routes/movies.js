const express = require('express')
const router = express.Router();
const {newMovie,deleteMovie, getMovie, updateMovie, deleteMovieById,getMovieById, updateMovieById} = require('../controller/setup');
router.get('/getMovie',getMovie);
router.get('/getMovieById/:id',getMovieById);
router.post('/newMovie',newMovie);
router.delete('/deleteMovie',deleteMovie);
router.delete('/deleteMovieById/:id',deleteMovieById);
router.patch('/updateMovie',updateMovie);
router.patch('/updateMovieById/:id',updateMovieById);
module.exports = router;
