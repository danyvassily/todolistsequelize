const { Completed } = require('../models');


exports.getAllCompletedTasks = async (req, res) => {
    try {
        const completedTasks = await Completed.findAll();
        res.json(completedTasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.createCompletedTask = async (req, res) => {
    try {
        const completed = await Completed.create(req.body);
        res.status(201).json(completed);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.getCompletedTaskById = async (req, res) => {
    try {
        const completed = await Completed.findByPk(req.params.id);
        if (completed) {
            res.json(completed);
        } else {
            res.status(404).json({ error: 'Completed task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

