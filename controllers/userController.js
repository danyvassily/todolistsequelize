const User = require("../models/User");

const db = require('../models/');
const User = db.User;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        .then(() => res.status(201).json({ message: 'User created successfully!' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Incorrect username or password' });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ message: 'Incorrect username or password' });
            }
            res.status(200).json({
                userId: user.idUsers,
                token: jwt.sign(
                    { userId: user.idUsers },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '365d' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

