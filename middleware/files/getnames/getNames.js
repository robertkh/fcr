//?
import Path from "path";
import Fs from "fs";
import { yl, gl } from "../../../util/logger.js";
// import { log } from "console";

// todo
export default async (req, res) => {
	//
	let testFolder = Path.join(Path.resolve(), "client/public/images");
	let testFolder1 = Path.join((Path.resolve(), "client/build/images"));

	// if (process.env.NODE_ENV === "production") {
	// 	testFolder = Path.join((Path.resolve(), "client/build/images"));
	// } else {
	// 	// testFolder = Path.join(__dirname, "../../client/build/images");
	// 	testFolder = Path.join(Path.resolve(), "client/public/images");
	// }

	console.log(testFolder);

	Fs.readdir(testFolder1, (err, files) => {
		let newnames = files?.map((file) => {
			let i = file.indexOf("_");
			return file.slice(i + 1);
		});
		gl.log(newnames);
		res.json(newnames);
	});

	Fs.readdir(testFolder, (err, files) => {
		let newnames = files?.map((file) => {
			let i = file.indexOf("_");
			return file.slice(i + 1);
		});

		yl.log(newnames);
	});
};
