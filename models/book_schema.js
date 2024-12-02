const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of the book should be there"]
    },
    author: {
      type: String,
      required: [true, "Author of the book should be specified"]
    },
    genre: {
      type: String,
      required: [true, "Genre of the book is required"]
    },
    type: {
      type: String,
      required: [true, "Type of the book is mandatory"]
    },
    available: {
      type: Boolean,
      default: true
    }
});

module.exports = mongoose.model('Book', bookSchema);
