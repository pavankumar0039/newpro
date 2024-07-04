const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    },
    
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
   
});

module.exports = mongoose.model('order', OrderSchema);
