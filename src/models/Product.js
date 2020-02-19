const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    validity: {
        type: Date, 
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);