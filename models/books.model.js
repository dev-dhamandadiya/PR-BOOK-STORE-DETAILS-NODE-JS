// models/books.model.js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    bookImage: String
});

// This creates the "named export" your index.js is looking for
export const Book = mongoose.model("Book", bookSchema);