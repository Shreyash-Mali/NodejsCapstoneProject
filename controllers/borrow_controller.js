const App = require('../models/borrow_schema.js');
const mongoose = require("mongoose")
exports.createBorrowRecord = (req, res) => {
    App.create({
        username: req.body.username,
        bookid: new mongoose.Types.ObjectId(req.body.bookid)
    })
    .then(() => {
        res.status(201).json({ message: "Book Borrowed successfully", status: "Success" })
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Error borrowing a book and inserting borrow record" })
    })
};


exports.findAll = (req, res) => {
    App.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Some error occured while fetching borrow records" });
    })
}
