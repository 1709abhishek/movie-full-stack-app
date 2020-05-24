const mongoose = require('mongoose');

//product schema containing name and quantity as variables
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
}, {
    timestamps: true
});

//exporting the schema
module.exports = mongoose.model('Genre', genreSchema);