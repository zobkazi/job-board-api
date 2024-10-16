import {Schema, model} from 'mongoose'

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

const News = model('News', newsSchema)

export default News