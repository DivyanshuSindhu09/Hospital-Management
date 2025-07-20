import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String,
        lowercase : true,
        unique : true
    },
    email : {
        required : true,
        type : String,
        lowercase : true,
        unique : true
    },
    password : {
        required : true,
        type : String 
    }
}, {timestamps : true})

export const User = mongoose.model('User', userSchema)