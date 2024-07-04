// checkAuthMiddleware.js

const User = require("../models/user");

const checkauth = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send("This email already exists");
        }
        // If email does not exist, continue with the next middleware or route handler
        next();
    } catch (error) {
        console.error("Error in checkauth middleware:", error);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = checkauth;
