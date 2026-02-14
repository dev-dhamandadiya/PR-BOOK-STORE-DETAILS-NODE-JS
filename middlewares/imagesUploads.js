import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure you have created the "uploads/" folder in your root directory!
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        // This removes spaces and adds a unique timestamp to prevent overwriting
        const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, '_');
        cb(null, uniqueName);
    }
});
// Ensure it matches exactly
const imageUploads = multer({ storage }).single("bookImage");
export default imageUploads;