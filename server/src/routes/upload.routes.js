// backend/routes/uploadRoute.js
const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// POST /api/upload
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blog_images",
    });

    fs.unlinkSync(req.file.path); // delete temp file
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error("❌ Upload failed:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
});

module.exports = router;
