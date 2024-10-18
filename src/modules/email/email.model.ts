import {Schema, model} from "mongoose";


const emailSchema = new Schema({
   recipient: {
       type: String,
       required: true
   },
   subject: {
       type: String,
       required: true
   },
   message: {
       type: String,
       required: true
   },
   sender: {
       type: String 
   },
   source: {
       type: String
   }
}, {
    timestamps: true
})

const Email = model('Email', emailSchema)

export default Email