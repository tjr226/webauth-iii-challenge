const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
            if (err) {
                res.status(401).json({ message: 'Invalid credentials.' });
            } else {
                req.user = { 
                    username: decodeToken.username,
                    department: decodeToken.department
                };
                next();
            }
        })
    } else {
        res.status(400).json({ message: "Please provide token." });
    }
};

// how to do this in React
// const options = {
//     headers: {
//         authorization: token
//     }
// }
// axios.get(url, options)
// axios.post(url, data, options)