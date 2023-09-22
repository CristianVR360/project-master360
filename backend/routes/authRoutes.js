const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password });
    await user.save();

    res.status(201).send('Usuario registrado');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send('Usuario no encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Contraseña incorrecta');
    }

    const token = jwt.sign({ userId: user._id }, 'SECRET_KEY'); // Cambia 'SECRET_KEY' por una clave secreta real

    res.send({ token });
});

module.exports = router;
