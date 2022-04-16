//?
import { ml, f_str, rl, yl } from "./logger.js";
import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

//?
// mongoose.set("debug", true);
// mongoose.set("useUnifiedTopology", true);
//?
mongoose
	.connect(uri, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		// useFindAndModify: false,
	})
	.then(() => ml.log("MongoDB has been connected!"))
	.catch((err) => {
		rl.log(f_str(`Something went wrong\n ${err.message}`));
		process.exit(1);
	});

// todo
export default mongoose;
