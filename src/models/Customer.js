const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        required: true
    },
    cpf: {
        type: Number,
        required: false
    },
    rg: {
        type: Number,
        required: false
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    complement: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: true
    },
    guardian: {
        type: Array, 
        required: false
    }
});

CustomerSchema.plugin(mongoosePaginate);

mongoose.model('Customer', CustomerSchema);