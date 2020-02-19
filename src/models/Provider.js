const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        required: true
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
    }
});

ProviderSchema.plugin(mongoosePaginate);

mongoose.model('Provider', ProviderSchema);