import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn : '30d'
    });

    // Set JWT as HTTP-Only cookie 
    res.cookie('jwt',token, {
        httpOnly : true,
        secure : process.env.NODE_ENV !== 'developement',
        sameSite : 'strict',
        maxAge : 30 * 34 * 60 * 60 * 1000 // 30 Days
    })
}

export default generateToken;
