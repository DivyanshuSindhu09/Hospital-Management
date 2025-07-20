import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },
    quantity : {
        type : Number,
        required : true
    }
})

// we can make mini models tooo

const orderSchema = new mongoose.Schema({
    orderPrice : {
        type: Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    status : {
        type : String,
        enum : ['Pending', 'Canceled', 'Delivered'],
        default : 'Pending'
    },
    orderItems : {
        type : [orderItemSchema]
    },
    address : {
        type : String,
        required : true
    }
}, { timestamps : true })

export const Order = mongoose.model('Order', orderSchema)