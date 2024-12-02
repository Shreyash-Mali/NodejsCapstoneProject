const App = require('../models/book_schema.js');

exports.createBook = (req, res) => {
    const bookname = req.body.name;
    const authorname = req.body.author;
    const genre = req.body.genre;
    const type = req.body.type;
    const isavailable = req.body.available;

    App.create({
        name: bookname,
        author: authorname,
        genre: genre,
        type:type,
        available:isavailable
    })
    .then(() => {
        res.status(201).json({ message: "Book inserted successfully", status: "Success" })
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Error inserting book" })   
    });
}


exports.insertBooks = (req, res) => {
    const books = [
        { name: "Book A", author: "Author A", genre: "Fiction", type: "Novel", available: true },
        { name: "Book B", author: "Author B", genre: "Science", type: "Textbook", available: true },
        { name: "Book C", author: "Author C", genre: "History", type: "Biography", available: true },
        { name: "Book D", author: "Author D", genre: "Fantasy", type: "Graphic Novel", available: true },
        { name: "Book E", author: "Author E", genre: "Romance", type: "Short Story", available: true },
    ];

    App.create(books)
    .then(() => {
        res.status(201).json({ message: "Books inserted successfully", status: "Success" })
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Error inserting books" })   
    });
};


exports.findAll = (req, res) => {
    App.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Some error occured while fetching books" });
    })
}
