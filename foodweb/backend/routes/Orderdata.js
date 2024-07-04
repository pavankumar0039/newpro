const express = require('express')
const router=express.Router();
const Order=require("../models/order");
router.post("/orderdata", async (req, res) => {
    try {
        const existingOrder = await Order.findOne({
            email: req.body.email,
            name: req.body.name,
            size: req.body.size
        });

        if (existingOrder) {
            // Update quantity if order already exists
            existingOrder.quantity = req.body.quantity;
            await existingOrder.save();
        } else {
            // Create new order if it doesn't exist
            await Order.create({
                email: req.body.email,
                imgurl: req.body.imgurl,
                name: req.body.name,
                size: req.body.size,
                quantity: req.body.quantity,
                price: req.body.price
            });
        }

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Error creating/updating order" });
    }
});
router.post("/orderdatadelete", async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const size = req.body.size;
    try {
       
        const deletedOrder = await Order.deleteOne({ email: email, name: name, size: size });
        
        if (deletedOrder.deletedCount === 1) {
            res.send("Order deleted successfully");
        } else {
            res.send("Order not found");
        }
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).send("Internal server error");
    }
});

router.post("/orderdatafind",async(req,res)=>{
   
    try {
        const itemsdata = await Order.find({ email: req.body.email });
       
        res.send([itemsdata])
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Error during finding" });
    }
})
module.exports=router;