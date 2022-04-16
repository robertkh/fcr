// todo
export const getUserName = (req, res) => {
	// Ամենաառաջին անգամ էս վատ դեպքին առնչվել եմ։
	if (req?.session?.user?.name) {
		res.json(req.session.user.name);
	} else {
		res.json("");
	}
};
