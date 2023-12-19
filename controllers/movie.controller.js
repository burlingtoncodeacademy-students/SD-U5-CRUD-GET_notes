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

//Get All
router.get("/", async(req,res) => {
    try {
        
        const getAllMovies = await Movie.find();

        getAllMovies.length > 0 ?
            res.status(200).json({
                result: getAllMovies
            }) :
            res.status(404).json({
                result: `No movies found`
            });

    } catch (err) {
        errorResponse(res,err);
    }
})

//GET One
router.get("/find-one/:id", async(req,res) => {
    try {
        
        const { id } = req.params;
        const getMovie = await Movie.findOne({_id: id})

        getMovie ?
            res.status(200).json({
                result: getMovie
            }) :
            res.status(404).json({
                result: "No movie found"
            })

    } catch (err) {
        errorResponse(res,err);
    }
})

//TODO Get All by Genre
router.get("/genre/:genre", async(req,res) => {
    try {
        
        const { genre } = req.params;
        let buildWord;

        if(genre) {
            for(let i = 0; i < genre.length; i++) {
                i === 0 ? 
                    buildWord = genre[i].toUpperCase() :
                    buildWord += genre[i].toLowerCase()
            }
        }

        const getMovies = await Movie.find({genre: buildWord});

        getMovies.length > 0 ?
            res.status(200).json({
                result: getMovies
            }) :
            res.status(404).json({
                result: 'No movies found'
            });

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