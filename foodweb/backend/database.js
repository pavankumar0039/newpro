const mongoose = require('mongoose');
const mongouri = 'mongodb://pavankumartumati101:Pavuu101@cluster0-shard-00-00.69jf6.mongodb.net:27017,cluster0-shard-00-01.69jf6.mongodb.net:27017,cluster0-shard-00-02.69jf6.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-xhag19-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("Connected to MongoDB");

        
        const FoodItem = mongoose.model('food_items', {});
        const foodCategory = mongoose.model('food_cats', {});

        // Fetch data from collections
        const data2 = await foodCategory.find({});
        
        global.food_category = data2;

        const data1 = await FoodItem.find({});
        // console.log(data1);
        global.food_items = data1;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = connectToMongoDB;
