import { Router } from "express";
import * as recordController from "../controllers/records.js";
import upload from "../services/Upload.js";

const recordsRouter = Router();

recordsRouter
  .route("/")
  .get(recordController.getAllRecords)
  .post(upload.single("image"), recordController.addRecord); //upload img multer

recordsRouter
  .route("/:id")
  .get(recordController.getRecordById)
  .delete(recordController.deleteRecord)
  .put(recordController.updateRecord)
  .patch(recordController.addTagToRecord);

export default recordsRouter;
