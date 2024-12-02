const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username of the returner is required"]
    },
    bookid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      unique: true,
      required: [true, "Book ID must be provided for the return record"]
    },
    duedate: {
      type: Date,
      ref: 'Borrow',
      required: [true, "Due date must be referenced from the borrow record"]
    },
    fine: {
      type: Number,
      default: 0
    }
});

module.exports = mongoose.model('Return', returnSchema);
