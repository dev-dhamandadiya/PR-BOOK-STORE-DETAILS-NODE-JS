import bodyParser from "body-parser";
import express from "express";
import fs from "fs";
import { env } from "./configs/dotenv.js";
import db from "./configs/database.js";
import { Book } from "./models/books.model.js";
import imageUpload from "./middlewares/imagesUploads.js";

const PORT = env.PORT || 8081;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    Book.find()
        .then((booksData) => {
            res.render('index', { books: booksData });
        })
});

app.get('/add-book', (req, res) => {
    res.render('pages/add-book');
});

app.post('/add-book', imageUpload, (req, res) => {
    const newBook = { ...req.body, bookImage: req.file ? req.file.path : "" };
    Book.create(newBook)
        .then(() => {
            res.redirect('/view-book')
        })
        .catch(err => {
            res.redirect('/add-book')
        });
});

app.get('/view-book', (req, res) => {
    Book.find()
        .then((booksData) => {
            res.render('pages/view-book', { books: booksData });
        })
        .catch((err) => {
            console.log(err);
            res.render('pages/view-book', { books: [] });
        });
});

app.get('/edit-book/:id', (req, res) => {
    Book.findById(req.params.id)
        .then((book) => {
            res.render('pages/edit-book', { book })
        })
        .catch((err) => {
            res.redirect('/view-book')
        });
});

app.post('/edit-book/:id', imageUpload, (req, res) => {
    let updateData = { ...req.body };
    if (req.file) updateData.bookImage = req.file.path;

    Book.findByIdAndUpdate(req.params.id, updateData)
        .then(oldData => {
            if (req.file && oldData.bookImage && fs.existsSync(oldData.bookImage)) {
                fs.unlinkSync(oldData.bookImage);
            }
            res.redirect('/view-book');
        })
        .catch(() => {
            res.redirect('/view-book')
        });
});

app.get('/delete-book/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then((data) => {
            fs.unlinkSync(data.image);
            res.redirect('/view-book');
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/view-book');
        });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));