const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader)
      return res.status(401).send( {error: 'No token provided'});  
    
    const parts = authHeader.split(' ');
    if(!parts.lenght === 2)
        return res.status(401).send({ error: 'Invalid header token'});
    const [ scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Invalid token format'});
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Invalid token'});
    
        req.userId = decoded.id;
        next();
    });

    
}