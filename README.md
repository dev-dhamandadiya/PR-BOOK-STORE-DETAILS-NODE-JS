# PR-BOOK-STORE-DETAILS-NODE-JS# 📚 PR-BOOK-STORE-DETAILS-NODE-JS (The Velvet Spine)

A premium Book Management System built with Node.js and MongoDB. This application allows users to curate a digital library with full image upload capabilities and automated file system cleanup.

## 🚀 Features
* **Full CRUD:** Add, View, Edit, and Delete book records.
* **Image Processing:** Handles cover art uploads using `Multer`.
* **Auto-Cleanup:** Automatically deletes old image files from the server when a book is updated or removed to save storage.
* **Responsive UI:** A sophisticated "Velvet Spine" theme built with Bootstrap 5.
* **Database Integration:** Persistent storage using MongoDB and Mongoose.

## 🛠️ Tech Stack
* **Backend:** Node.js, Express.js
* **Database:** MongoDB & Mongoose
* **View Engine:** EJS (Embedded JavaScript)
* **Middleware:** Multer (File Uploads), Body-Parser
* **Styling:** Bootstrap 5, Google Fonts

## 📂 Project Structure
```text
PR-BOOK-STORE-DETAILS-NODE-JS/
├── config/             # Database & Environment configurations
├── middlewares/        # Multer image upload logic
├── models/             # Mongoose schemas (Book/UserModel)
├── public/             # CSS, JS, and Static assets
├── uploads/            # Storage for book cover images
├── views/              # EJS templates
│   ├── pages/          # Add, Edit, and View Archive pages
│   └── partials/       # Header & Footer components
└── index.js            # Entry point of the application
⚙️ How it Works: Image Deletion Logic
One of the core features of this project is efficient storage management. When a user updates a book cover or deletes a book, the following logic ensures no "zombie" files remain:

Delete: fs.unlinkSync removes the image from the /uploads folder immediately after the database record is deleted.

Edit: When a new image is uploaded, the system identifies the old path from the database, deletes the old file, and replaces it with the new path.

🚦 Installation
Clone the repository:

Bash
git clone [https://github.com/dev-dhamandadiya/PR-BOOK-STORE-DETAILS-NODE-JS.git](https://github.com/dev-dhamandadiya/PR-BOOK-STORE-DETAILS-NODE-JS.git)
Install dependencies:

Bash
npm install
Set up your .env file with PORT and MONGO_URI.

Start the server:

Bash
npm start

---

### 💡 Why this is great for your GitHub:
* **Visual Structure:** It uses a folder tree so people can understand your organization at a glance.
* **Logic Explanation:** Explaining the **Image Deletion** shows that you care about performance and clean code.
* **Professionalism:** Using Markdown tables and code blocks makes your repository look high-quality to other developers.

**Would you like me to generate a "Live Preview" GIF description or a list of "Future Roadmap" items (like User Authentication) to add to this README?**