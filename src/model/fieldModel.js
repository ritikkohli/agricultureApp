const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const feildSchema = new mongoose.Schema(
{   
    propertyId : {type:ObjectId,required:true},
    region : {type:String,required:true},
    area : {type:Number,required:true},
    cropName : {type:String,required:true},
    stage : {type:String,required:true,enum:{ploughed,manureAdded,sown,irrigated,spayed,harvested}},
    isDeleted : {type:Boolean,default:false}
},
{timestamps : true})

module.exports = mongoose.model('Field',feildSchema)