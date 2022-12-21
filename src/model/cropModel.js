const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const cropSchema = new mongoose.Schema(
{   
    name : {type:String,required:true,unique:true},
    season : {type:String,required:true,enum:{kharif,rabi,zaid}},
    field : {type:ObjectId},
    isDeleted : {type:Boolean,default:false}
},
{timestamps : true})

module.exports = mongoose.model('Crop',cropSchema)