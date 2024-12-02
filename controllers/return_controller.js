const App = require('../models/return_schema.js');
const mongoose = require("mongoose")
exports.createReturnRecord = (req, res) => {

    App.create({
        username: req.body.username, 
        bookid:  new mongoose.Types.ObjectId(req.body.bookid),
        duedate: req.body.duedate,
        fine: req.body.fine

    })
    .then(() => {
            res.status(201).json({ message: "Book Returned successfully", status: "Success" });
    })
    .catch((err) => {
            res.status(500).json({ message: err.message || "Error returning book, inserting return record" });
    });
};


exports.findAll = (req, res) => {
    App.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Some error occured while fetching return records" });
    })
}
