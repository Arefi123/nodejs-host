const jwt = require('jsonwebtoken')

const verfiyToken = (req, res, next ) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1]
        // console.log(jwt.decode(token, process.env.JWT_SEC));
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) {
                return res.status(403).json("token is not valid!")
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("you are not authenticated!")
    }
}

const verfiyTokenAndAuthorization = (req, res, next) => {
    verfiyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin ) {
           next()
        } else {
            res.status(403).json("You are not allowed to do this action!")
        }
    })
}

const verfiyTokenAndAdmin = (req, res, next) => {
    verfiyToken(req, res, () => {
        if(req.user.isAdmin ) {
           next()
        } else {
            res.status(403).json("You are not allowed to do this action!")
        }
    })
}
module.exports = { verfiyToken, verfiyTokenAndAuthorization, verfiyTokenAndAdmin }