const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Favorite = require('../models/favourite.js');

// Function to get or create a model based on collection name
const getModel = (collectionName) => {
    const favoriteSchema = Favorite.schema;
    if (mongoose.models[collectionName]) {
        return mongoose.models[collectionName];
    } else {
        return mongoose.model(collectionName, favoriteSchema);
    }
};

router.post('/getfavouritedata', async (req, res) => {
    const email = req.body.email;

    if (!email) {
        return res.status(400).send('Email is required.');
    }

    const collectionName = email.toLowerCase();

    try {
        const FavoriteModel = getModel(collectionName);
        const favoriteItems = await FavoriteModel.find({});
        res.send(favoriteItems);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Failed to fetch favorite data');
    }
});

router.post('/favouriteinsertdata', async (req, res) => {
    const email = req.body.email;
    const data = req.body;

    if (!email) {
        return res.status(400).send('Email is required.');
    }

    const collectionName = email.toLowerCase();

    try {
        const FavoriteModel = getModel(collectionName);
        const existing = await FavoriteModel.findOne({ name: data.name });

        if (existing) {
            return res.status(400).send("Item is already in favorites.");
        }

        const newData = new FavoriteModel(data);
        await newData.save();
        return res.status(200).send('Data inserted successfully');
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Failed to insert data');
    }
});

router.post('/favouritedeletedata', async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;

    if (!email || !name) {
        return res.status(400).send('Email and name are required.');
    }

    const collectionName = email.toLowerCase();
    try {
        const FavoriteModel = getModel(collectionName);
        const deletedFavourite = await FavoriteModel.deleteOne({ email: email, name: name });

        if (deletedFavourite.deletedCount === 1) {
            return res.status(200).send("Favourite deleted successfully");
        } else {
            return res.status(400).send("Favourite not found");
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Failed to delete data');
    }
});

module.exports = router;
