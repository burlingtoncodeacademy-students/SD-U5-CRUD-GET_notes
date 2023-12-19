const router = require('express').Router();
const Movie = require('../models/movie.model');

const errorResponse = (res, err) => {
    return(
        res.status(500).json({
            ERROR: err.message
        })
    );
}

router.post('/', async(req,res) => {
    try {
        
        const {
            title,genre,rating,length,releaseYear
        } = req.body;

        const movie = new Movie({
            title,genre,rating,length,releaseYear
        });

        const newMovie = await movie.save();

        res.status(200).json({
            result: newMovie,
            message: `${newMovie.title} added to collection`
        })

    } catch (err) {
        errorResponse(res,err);
    }
})

//TODO Get All
router.get("/", async(req,res) => {
    try {
        
    } catch (err) {
        errorResponse(res,err);
    }
})

//TODO GET One
router.get("/", async(req,res) => {
    try {
        
    } catch (err) {
        errorResponse(res,err);
    }
})

//TODO Get All by Genre
router.get("/", async(req,res) => {
    try {
        
    } catch (err) {
        errorResponse(res,err);
    }
})

/* 
! Challenge
    - Create a success and incomplete response functions just like the errorResponse function. 
    - Incorporate those within the current routes.
*/

module.exports = router;