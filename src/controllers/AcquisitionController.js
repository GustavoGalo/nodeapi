const mongoose = require('mongoose');

const Acquisition = mongoose.model('Acquisition');

module.exports = {
    async index(req, res) { 
        const { page = 1 } = req.query;
        const acquisitions = await Acquisition.paginate({ }, { page, limit: 10});

        return res.json(acquisitions);
    },

    async show(req, res) {
        const acquisition = await Acquisition.findById(req.params.id);

        return res.json(acquisition);
    },

    async store(req, res) {
        const acquisition = await Acquisition.create(req.body);

        return res.json(acquisition);
    },

    async update(req, res) {
        const acquisition = await Acquisition.findOneAndUpdate(req.params.id, req.body, { new: true });

        return res.json(acquisition);
    },

    async destroy(req, res) {
        await Acquisition.findOneAndRemove(req.params.id);

        return res.send();
    }
};