const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema(
    {
        name: { type: String, required: true },
        imgURL: { type: String, required: true },
        imgURL2: { type: String, required: true },
        imgURL3: { type: String, required: true },
        imgURL4: { type: String, required: true },
        imgURL5: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
)
module.exports = mongoose.model('products', Product)  