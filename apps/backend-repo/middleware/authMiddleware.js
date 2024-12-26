"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send({ message: 'Unauthorized: No token provided.' });
        return; // Ensure the function exits after sending a response.
    }
    if (token !== 'VALID_TOKEN') {
        res.status(403).send({ message: 'Unauthorized: Invalid token.' });
        return; // Ensure the function exits after sending a response.
    }
    next(); // Continue to the next middleware or route handler if authorized.
};
exports.authMiddleware = authMiddleware;
