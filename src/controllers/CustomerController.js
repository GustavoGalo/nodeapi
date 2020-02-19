const mongoose = require('mongoose');

const Customer = mongoose.model('Customer');

module.exports = {
    async index(req, res) { 
        const { page = 1 } = req.query;
        const customers = await Customer.paginate({ }, { page, limit: 10});

        return res.json(customers);
    },

    async show(req, res) {
        const customer = await Customer.findById(req.params.id);

        return res.json(customer);
    },

    async store(req, res) {
        const customer = await Customer.create(req.body);

        return res.json(customer);
    },

    async update(req, res) {
        const customer = await Customer.findOneAndUpdate(req.params.id, req.body, { new: true });

        return res.json(customer);
    },

    async destroy(req, res) {
        await Customer.findOneAndRemove(req.params.id);

        return res.send();
    }
};