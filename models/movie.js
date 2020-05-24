const mongoose = require('mongoose');

//product schema containing name and quantity as variables
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    }
}, {
    timestamps: true
});

//exporting the schema
module.exports = mongoose.model('Movie', movieSchema);