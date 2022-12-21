const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const organizationSchema = new mongoose.Schema(
{   
    username : {type:String,required:true,unique:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    marks : {type:Number,required:true},
    property : [{type:ObjectId}],
    // feild : {type:ObjectId},
    // region : {type:ObjectId},
    isDeleted : {type:Boolean,default:false}
},
{timestamps : true})

module.exports = mongoose.model('Organization',organizationSchema)