const express = require('express');
const router = express.Router();
const User = require("../models/user"); // Make sure this path is correct

const checkauth = require("../middlewares/isauth"); // Adjust the path as necessary

router.post("/createuser", checkauth, async (req, res) => {
    try {
        // At this point, checkauth middleware has already passed if the email is unique

        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        });
          
        res.json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ success: false, error: "Error creating user" });
    }
});

router.post("/loginuser", async (req, res) => {
    try {
        const userData = await User.findOne({ email: req.body.email });
        if (!userData || userData.password !== req.body.password) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        res.json({ success: true, data: userData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Error logging in" });
    }
});

module.exports = router;
