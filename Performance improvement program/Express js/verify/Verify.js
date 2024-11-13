const jwt=require('jsonwebtoken');
const secretKey='HardToCrack';
module.exports.verifyToken = function(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]; // Extract token

    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }  
        next();  
    });
};
