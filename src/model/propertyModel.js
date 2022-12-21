const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const propertySchema = new mongoose.Schema(
{   
    farmName : {type:String,required:true,unique:true},
    numberOfField : {type:Number,required:true},
    field : [{type:ObjectId}],
    isDeleted : {type:Boolean,default:false}
},
{timestamps : true})

module.exports = mongoose.model('Property',propertySchema)