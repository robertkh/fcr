//?
import { gl, rl, yl } from "../util/logger.js";
import express from "express";
var router = express.Router();

//?
import checkPermision from "../middleware/files/upload/checkPermision.js";
import fileUploadHandler from "../middleware/files/upload/fileUploadHandler.js";
import getNames from "../middleware/files/getnames/getNames.js";
import deleteFile from "../middleware/files/delfile/deleteFile.js";
import renameFile from "../middleware/files/renamefile/renameFile.js";

//todo - create
router.post("/upload", checkPermision, fileUploadHandler);

//todo - read
router.get("/getnames", getNames);

//todo - rename
router.post("/rename", renameFile);

//todo - delete
router.delete("/del", deleteFile);

//todo
export default router;
