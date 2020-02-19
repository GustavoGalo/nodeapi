const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AcquisitionSchema = new mongoose.Schema({
    provider: {
        type: String,
        required: true
    },
    nf: {
        type: String, 
        required: true
    },
    products: {
        type: Array, 
        required: true
    },
    quantity: {
        type: Array,
        required: true
    },
    price: {
        type: Array,
        required: true
    },
    validity: {
        type: Date,
        required: true
    }
});

AcquisitionSchema.plugin(mongoosePaginate);

mongoose.model('Acquisition', AcquisitionSchema);