const Activities = require('../models/activitiesModels');

exports.getAllActivities = (req, res) => {
    Activities.find()
        .then(activities => res.status(200).json(activities))
        .catch(error => res.status(500).json({message: error}))
}