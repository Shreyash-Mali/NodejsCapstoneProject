const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username of the borrower is required"]
    },
    bookid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      unique: true,
      required: [true, "Book ID must be specified for the borrow record"]
    },
    duedate: {
      type: Date,
      default: () => new Date(+new Date() + 15 * 24 * 60 * 60 * 1000),
      required: [true, "Due date is required for the borrow record"]
    }
});

module.exports = mongoose.model('Borrow', borrowSchema);
