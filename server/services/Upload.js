import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "records",
    allowedFormates: ["jpeg", "jpg", "png", "svg", "gif", "mp4", "mov", "avi"],
  },
});

const upload = multer({ storage });

export default upload;
