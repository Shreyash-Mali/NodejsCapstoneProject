const App = require('../models/user_schema.js');

const Book = require("../models/book_schema.js");
const mongoose = require("mongoose")

exports.registerUser = (req, res) => {
    
    const newUser = new App(req.body);

    newUser.save()
    .then(() => { res.status(201).json({
         message: "User registered successfully", status: "Success" })
    })

    .catch((err) => {
        res.status(500).json({ message: err.message || "Error occurred while registering user" })
    })
};

exports.authenticateUser = (req, res) => {

    App.findOne({ username: req.body.username, password: req.body.password })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password", status: "Error" });
        }
        res.status(200).json({ message: "Authentication successfull!", status: "Success", user });
    })
    .catch((err) => res.status(500).json({ message: err.message || "Error occurred during authentication" }));
};


exports.updateBook = async (req, res) => {
    const user = await App.findOne ({username: req.params.username});
    const bookid = new mongoose.Types.ObjectId(req.body._id);
    const updatedBook = req.body;
    if(user.admin) {
        Book.findOneAndUpdate({_id:bookid}, updatedBook, {new:true, runValidators:true} )
        .then(() => {
            res.status(200).json({message: "Book updated successfully!", status: "Success"});
        })
        .catch(() => {
            res.status(400).json({message: "Error updating book", status: "Error"});
        })
    } else {
        res.status(403).json({message: "You are not authorized to update this book"});
    }
}



exports.insertUsers = (req, res) => {
    const users = [
        { name: "Shreyas", username: "shreyas01", password: "shreyas@123", email: "shreyas@gmail.com", mobile: 7447553392, admin: true },
        { name: "Atharva", username: "atharva02", password: "atharva@123", email: "atharva@gmail.com", mobile: 9234567891, admin: false },
        { name: "Rahul", username: "rahul03", password: "rahul@123", email: "rahul@gmail.com", mobile: 8434567324, admin: false },
        { name: "Ram", username: "ram04", password: "ram@123", email: "ram@gmail.com", mobile: 9234567893, admin: false },
        { name: "Sham", username: "sham05", password: "sham@123", email: "sham@gmail.com", mobile: 7234567894, admin: false },
    ];

    App.create(users)
    .then(() => {
        res.status(201).json({ message: "Users Inserted Successfully", status: "Success" })
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Something went wrong, error inserting users" })
    })
};


exports.findAll = (req, res) => {
    App.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Some error occured while fetching users" });
    })
}
