const express = require("express");
const router = express.Router();
const models = require('../models'); 

router.get("/", async (req, res) => {
    try {
        const completedTasks = await models.Completed.findAll();
        res.json(completedTasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const completed = await models.Completed.create(req.body);
        res.status(201).json(completed);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
