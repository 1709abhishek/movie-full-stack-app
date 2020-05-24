const Movie = require('../models/movie');
const Genre = require('../models/genre');

// creating a movie for a particular genre.
module.exports.create = async function (req, res) {
    try {

        var new_genre = await new Genre(req.body);
        let genre = await new_genre.save();

        return res.json(200, {
            message: "genre created successfully",
            genre: genre
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
        let genre = await Genre.find({}).sort({ createdAt: 'asc' });
        return res.json(200, {
            message: "genre listed successfully",
            genre: genre
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
        let genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(200, {
            message: "success",
            genre: genre
        })
    } catch (error) {
        return res.json(500, {
            message: "error occurred"
        })
    }


};

module.exports.delete = async function (req, res) {
    try {
        let genre = await Genre.findByIdAndDelete(req.params.id);
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
        let genre = await Genre.findById(req.params.id);
        return res.json(200, {
            message: "genre listed successfully",
            genre: genre
        });
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}
