const jwt = require('jsonwebtoken')

const secretKey = "secretWord";

function verifyUser (req, res, next){
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Must token provided' });
    }
    jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(403).json({ error: 'Failed to authenticate token' });
        }
        req.users  = decoded
        next()
    })
}

module.exports = {secretKey, verifyUser}