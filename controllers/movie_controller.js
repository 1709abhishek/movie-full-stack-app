const Movie = require('../models/movie');
const Genre = require('../models/genre');

// creating a movie for a particular genre.
module.exports.create = async function (req, res) {
    try {

        var new_movie = await new Movie(req.body);
        var curr_genre = await Genre.findOne({ name: req.params.genre });
        console.log(req.params);
        new_movie.genre = curr_genre.id;
        let movie = await new_movie.save();

        curr_genre.movies.push(movie);
        curr_genre.save();
        console.log(curr_genre);

        return res.json(200, {
            message: "movie created successfully",
            movie: movie
        });
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

// list all the reports for a particular patient
module.exports.showAll = async function (req, res) {
    try {
        let movies = await Movie.find({}).sort({ createdAt: 'asc' });
        return res.json(200, {
            message: "movies listed successfully",
            movies: movies
        });
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

// creating a genre 
module.exports.update = async function (req, res) {
    try {
        let movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(200, {
            message: "success",
            movie: movie
        })
    } catch (error) {
        return res.json(500, {
            message: "error occurred"
        })
    }


};

module.exports.delete = async function (req, res) {
    try {
        let movie = await Movie.findById(req.params.id);
        let genre = await Genre.findById(movie.genre);
        console.log(genre);
        await genre.movies.pull(movie);
        genre.save();
        movie.remove();
        return res.json(200, {
            message: "deleted successfully"
        })
    } catch (error) {
        return res.status(500).send({
            message: "Internal server error"
        });
    }
}

module.exports.show = async function (req, res) {
    try {
        let movies = await Movie.findById(req.params.id);
        return res.json(200, {
            message: "movies listed successfully",
            movies: movies
        });
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.showByGenre = async function (req, res) {
    try {
        let genre = await Genre.findOne({ name: req.params.genre });

        console.log(genre);
        let movies = await genre.populate({ path: 'movies' }).execPopulate();
        console.log(movies);
        return res.json(200, {
            message: "movies listed successfully",
            movies: movies
        });
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}
