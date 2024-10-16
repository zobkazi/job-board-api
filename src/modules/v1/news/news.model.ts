import {Schema, model} from 'mongoose'

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const News = model('News', newsSchema)

export default News