// src/modules/email/email.model.ts
import {Schema, model} from "mongoose";


const emailSchema = new Schema({
   recipient: {
       type: String,
   },
   subject: {
       type: String,
   },
   message: {
       type: String,
    
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