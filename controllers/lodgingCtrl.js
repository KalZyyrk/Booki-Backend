const Lodging = require('../models/lodgingModels');

exports.getAllLodging = (req, res) => {
    Lodging.find({popular: false})
        .then(lodging => res.status(200).json(lodging))
        .catch(error => res.status(500).json({ message: error }));
};

exports.popularLodging = (req, res) => {
    Lodging.find({popular: true})
        .then(Lodging => res.status(200).json(Lodging))
        .catch(error => res.status(500).json({message: error}));
}