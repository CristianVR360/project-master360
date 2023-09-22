const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send('No estás autorizado');
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'SECRET_KEY', (err, payload) => { // Cambia 'SECRET_KEY' por una clave secreta real
        if (err) {
            return res.status(401).send('No estás autorizado');
        }

        req.userId = payload.userId;
        next();
    });
};
