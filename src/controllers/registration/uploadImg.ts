// controllers/registration/uploadImg.ts

import multer, { FileFilterCallback } from "multer";
import path from "path";
const upload = multer({ dest: "uploads/" });


const uploadImg = async (req, res, next) => {
  try {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../../public/uploads"));
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });

    const upload = multer({
      storage: storage,
      fileFilter: function (req, file, cb: FileFilterCallback) {
        // Define your file filter logic here
        // For example, accept only image files
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return cb(new Error("Only image files are allowed!"), false);
        }
        cb(null, true);
      },
    }).single("image");

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        return res.status(500).json({ error: err.message });
      } else if (err) {
        // An unknown error occurred when uploading.
        return res
          .status(500)
          .json({ error: "An error occurred while uploading the image" });
      }

      // Everything went fine.
      // You can access the uploaded file using req.file
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Here you can do further processing with the uploaded file
      // For example, you can save the file path to a database

      return res.status(200).json({
        message: "File uploaded successfully",
        filePath: req.file.path,
      });
    });
  } catch (error) {
    next(error);
  }
};

export default uploadImg;
